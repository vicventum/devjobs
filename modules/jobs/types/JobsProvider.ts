import type { JobDataResponse, JobListResponse } from '@/modules/jobs/types'

export type JobListQuery = {
	page: number
	query: object
}

export type GetAll = (data: JobListQuery) => Promise<JobListResponse>

export type Get = (id: string) => Promise<JobDataResponse>
