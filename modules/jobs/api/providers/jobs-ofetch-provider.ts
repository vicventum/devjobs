import type { $Fetch } from 'ofetch'
import type { JobListResponse, JobDataResponse } from '@/modules/jobs/types'
import type {
	Get,
	GetAll,
	JobListQuery,
} from '@/modules/jobs/types/JobsProvider'
// import { useOfetchApi } from '@/modules/jobs/api/clients/use-ofetch-api'

// const ofetchApi = useOfetchApi()

export const getAll: GetAll = async (data: JobListQuery, ofetchApi: $Fetch) => {
	const { page, query } = data
	const resp = await ofetchApi<JobListResponse>(`/jobs/?page=${page}`, {
		query,
	})

	return resp
}

export const get: Get = async (id: string, ofetchApi: $Fetch) => {
	const resp = await ofetchApi<JobDataResponse>(`/jobs/${id}`)
	return resp
}
