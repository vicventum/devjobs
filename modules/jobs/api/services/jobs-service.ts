import {
	type JobListResponse,
	type DataFilter,
	type JobDataResponse,
	JobListSchema,
	JobDataSchema,
} from '@/modules/jobs/types'
import type { GetAll, Get } from '@/modules/jobs/types/JobsProvider'
import { utilCheckResponseSchema } from '@/modules/core/utils/util-check-response-schema'

type JobListOptions = { page?: number; filters?: DataFilter }

async function getJobList(
	provider: GetAll,
	options: JobListOptions = {},
): Promise<JobListResponse> {
	const {
		page = 1,
		filters = {
			title: '',
			location: '',
			isRemote: false,
		},
	} = options

	const isRemoteOnly: true | '' = filters.isRemote ? filters.isRemote : ''
	const query = {
		// page,
		search: filters.title,
		location: filters.location,
		remote: isRemoteOnly,
	}

	const jobListResponse = await provider({ page, query })

	const jobListResponseChecked = utilCheckResponseSchema<JobListResponse>(
		jobListResponse,
		JobListSchema,
	)

	return jobListResponseChecked
}

async function getJobDetail(
	provider: Get,
	{ id }: { id: string },
): Promise<JobDataResponse> {
	const jobDetailResponse = await provider(id)

	const jobDetailResponseChecked = utilCheckResponseSchema<JobDataResponse>(
		jobDetailResponse,
		JobDataSchema,
	)

	return jobDetailResponseChecked
}

export { getJobList, getJobDetail }

// const api = $fetch.create({
// 	// your default options
// 	baseURL: 'https://cors-anywhere.herokuapp.com/https://findwork.dev/api',
// 	headers: {
// 		Authorization: `Token c6bef58abe2eded3348921b287e5f5f27daf73f9`,
// 	},
// })
