import type { JobData, DataFilter } from '@/modules/jobs/types'
import { getJobList } from '@/modules/jobs/api/services/jobs-service'
import { getAll as ofetchGetAll } from '@/modules/jobs/api/providers/jobs-ofetch-provider'
import { utilFormatJobList } from '@/modules/jobs/utils/util-format-job-list'
import { useJobsStore } from '@/modules/jobs/stores/jobs.store'

export const useJobs = () => {
	const store = useJobsStore()
	const { jobList, currentPage, isFinalPage, dataFilter } = storeToRefs(store)

	const provider = ofetchGetAll

	const { data, pending, error } = useAsyncData(
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
			console.log('🚀 ~ useJobs ~ newJobsResponse:', newJobsResponse)
			if (newJobsResponse) {
				const jobList: JobData[] = utilFormatJobList(newJobsResponse.results)

				store.setJobs(jobList)
				store.setFinalPage(newJobsResponse.next)
			}
		},
		{ immediate: false },
	)

	return {
		// --- Properties
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
