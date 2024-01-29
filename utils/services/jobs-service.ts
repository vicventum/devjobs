import useJobsApi from '@/composables/api/use-jobs-api'
import type { JobListResponse } from '~/types'

async function getJobList({
	page = 1,
}: { page?: number } = {}): Promise<JobListResponse> {
	const jobsApi = useJobsApi()
	const resp = await jobsApi<JobListResponse>(`/jobs/?page=${page}`)
	return resp
}

export { getJobList }
