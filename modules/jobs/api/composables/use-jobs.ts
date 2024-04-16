// import type { JobData, DataFilter } from '@/types'
import { getJobList } from '@/modules/jobs/api/services/jobs-service'
import { getAll as ofetchGetAll } from '@/modules/jobs/api/providers/jobs-ofetch-provider'
// import { useJobsStore } from '@/stores/jobs.store'

const useJobs = () => {
	const { DEFAULT_JOB_COLOR } = useConstants()
	const store = useJobsStore()
	const { jobList, currentPage, isFinalPage, dataFilter } = storeToRefs(store)

	const provider = ofetchGetAll

	const { pending, data, error } = useAsyncData(
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
				const jobList: JobData[] = newJobsResponse.results.map((job) => ({
					id: job.id,
					logo: job.logo,
					title: job.role,
					company: job.company_name,
					type: job.employment_type,
					location: job.location,
					date: job.date_posted,
					color: job.logo ? DEFAULT_JOB_COLOR : utilRandomColor(),
					remote: job.remote,
				}))

				// console.log('🚀 ~ useJobs ~ jobList:', jobList)
				store.setJobs(jobList)
				store.setFinalPage(newJobsResponse.next)
			}
		},
		{ immediate: true },
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
			console.log('🚀 ~ useJobs getPage ~ page:', page)
			store.setPage(page)
		},
		getDataFilter(data: DataFilter) {
			console.log('🚀 ~ useJobs getPage ~ page:', data)
			store.setDataFilter(data)
		},
	}
}

export default useJobs
