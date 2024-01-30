import type { JobData } from '@/types'

import { getJobList } from '@/utils/services/jobs-service'
import { useJobsStore } from '@/stores/jobs.store'

const useJobs = () => {
	const { DEFAULT_JOB_COLOR } = useConstants()
	const store = useJobsStore()
	const { jobList, currentPage } = storeToRefs(store)

	const { pending, data, error } = useAsyncData('jobList', () => getJobList(), {
		watch: [currentPage],
	})

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
				}))

				// console.log('🚀 ~ useJobs ~ jobList:', jobList)
				store.setJobs(jobList)
			}
		},
		{ immediate: true },
	)

	return {
		// --- Properties
		jobList,
		currentPage,
		isLoading: pending,
		error,
		isError: !!error.value,
		// totalPages,

		// --- Methods
		// getPage(page: number) {
		// 	store.setPage(page)
		// },
	}
}

export default useJobs
