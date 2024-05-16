import type { JobListResponse, JobDataResponse } from '@/modules/jobs/types'
import type {
	Get,
	GetAll,
	JobListQuery,
} from '@/modules/jobs/types/JobsProvider'
import { ofetchApi } from '~/modules/jobs/api/clients/ofetch-api'

// const ofetchApi = ofetchApi()

export const getAll: GetAll = async (data: JobListQuery) => {
	const { page, query } = data
	const LIMIT_PAGE = 15
	const resp = await ofetchApi<JobListResponse>(
		`/jobs/?page=${page}&limit=${LIMIT_PAGE}`,
		{
			query,
		},
	)

	return resp
}

export const get: Get = async (id: string) => {
	const resp = await ofetchApi<JobDataResponse>(`/jobs/${id}`)
	return resp
}
