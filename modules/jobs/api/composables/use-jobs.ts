import type { JobData, DataFilter, JobListResponse } from '@/modules/jobs/types'
import { getJobList } from '@/modules/jobs/api/services/jobs-service'
import { getAll as ofetchGetAll } from '@/modules/jobs/api/providers/jobs-ofetch-provider'
import { utilFormatJobList } from '@/modules/jobs/utils/util-format-job-list'
import { useJobsStore } from '@/modules/jobs/stores/jobs.store'

export const useJobs = async () => {
	const store = useJobsStore()
	const { jobList, currentPage, isFinalPage, dataFilter } = storeToRefs(store)

	const provider = ofetchGetAll

	const { data, pending, error } = await useAsyncData(
		'jobList',
		() =>
			getJobList(provider, {
				page: currentPage.value,
				filters: dataFilter.value,
			}),
		{
			watch: [currentPage, dataFilter],
			lazy: true,
		},
	)

	// ? Insertando la data (cuando ya se obtenga) en el store
	watch(
		() => data.value,
		(newJobsResponse) => {
			if (newJobsResponse) {
				if (!newJobsResponse.length) {
					store.setFinalPage(true)
					return null
				}
				const jobListFormatted: JobData[] = utilFormatJobList(newJobsResponse)
				// ? Evita agregar data duplicada cuando ya se obtuvo data desde el servidor
				if (jobList.value.length && currentPage.value === 1) return null

				store.setJobs(jobListFormatted)
			}
		},
		{ immediate: true },
	)

	return {
		// --- Properties
		// jobList: computed(() => [jobList.value[0], jobList.value[1]]),
		jobList,
		currentPage,
		isFinalPage,
		error,
		isLoading: pending,

		// --- Computed
		isError: computed(() => !!error.value),

		// --- Methods
		getPage(page: number) {
			store.setPage(page)
		},
		getDataFilter(data: DataFilter) {
			store.setDataFilter(data)
		},
	}
}
