import type { JobDataResponse, JobListResponse } from '@/modules/jobs/types'

type JobListQuery = {
	page: number
	query: object
}

type GetAll = (data: JobListQuery) => Promise<JobListResponse>

type Get = (id: string) => Promise<JobDataResponse>

export type { JobListQuery, GetAll, Get }
