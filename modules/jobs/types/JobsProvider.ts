import type { JobDataResponse, JobListResponse } from '@/modules/jobs/types'

type JobListQuery = {
	page: number
	query: object
}

type GetAll = (data: JobListQuery, ofetchApi: any) => Promise<JobListResponse>

type Get = (id: string, ofetchApi: any) => Promise<JobDataResponse>

export type { JobListQuery, GetAll, Get }
