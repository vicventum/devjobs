import type { JobDataDetail, Color } from '@/modules/jobs/types'
import { getJobDetail } from '@/modules/jobs/api/services/jobs-service'
import { get as ofetchGet } from '@/modules/jobs/api/providers/jobs-ofetch-provider'
import { utilFormatJob } from '@/modules/jobs/utils/util-format-job'
// import { useJobsStore } from '@/modules/jobs/stores/jobs.store'

const useJob = ({ id, color }: { id: string; color?: Color }) => {
	// const store = useJobsStore()
	// const { jobList, currentPage, isFinalPage, dataFilter } = storeToRefs(store)
	const jobDetail = ref<JobDataDetail>()
	const provider = ofetchGet

	const { data, pending, error } = useAsyncData(
		'jobDetail',
		() => getJobDetail(provider, { id }),
		{
			lazy: true,
		},
	)

	// ? Insertando la data (cuando ya se obtenga) en el store
	watch(
		() => data.value,
		(newJobDetailResponse) => {
			if (newJobDetailResponse) {
				jobDetail.value = utilFormatJob(newJobDetailResponse, color)
				// store.setJobs(jobDetail)
			}
		},
		// ? Al colocarlo en `false`, hace que no se tenga data desde un inicio, y por lo tanto se muestre el loader, de otra forma se mostraría la data previamente guardada por el `useAsyncData`
		{ immediate: false },
	)

	return {
		// --- Properties
		jobDetail,
		error,
		isLoading: pending,
		// isError: !!error.value,

		// --- Computed
		isError: computed(() => !!error.value),

		// --- Methods
		// getPage(page: number) {
		// 	store.setPage(page)
		// },
		// getDataFilter(data: DataFilter) {
		// 	store.setDataFilter(data)
		// },
	}
}

export default useJob
