import type { JobListResponse, DataFilter } from '@/types'
import { JobListSchema } from '@/types'
// import type {  } from 'zod'

import useJobsApi from '@/composables/api/use-jobs-api'

async function getJobList({
	page = 1,
	filters = {
		title: '',
		location: '',
		isRemote: false,
	},
}: { page?: number; filters?: DataFilter } = {}): Promise<JobListResponse> {
	// const queryPage = `page=${page}`
	// const filterQueryTitle = `search=${filters.title}`
	// const filterQueryLocation = `source=&location=${filters.location}`
	// const filterQueryRemote = `remote=${filters.isRemote}`
	// const URL = `/jobs/?${queryPage}&${filterQueryTitle}&${filterQueryLocation}&${filterQueryRemote}`
	// const resp = await jobsApi<JobListResponse>(URL)

	const remoteOnly: true | '' = filters.isRemote ? filters.isRemote : ''
	const query = {
		// page,
		search: filters.title,
		location: filters.location,
		remote: remoteOnly,
	}
	console.log('🚀 ~ query:', query)

	const jobsApi = useJobsApi()
	const resp = await jobsApi<JobListResponse>(`/jobs/?page=${page}`, { query })

	try {
		const jobListResponse: JobListResponse = JobListSchema.parse(resp)
		// Los datos son válidos si no se ha lanzado una excepción hasta este punto
		// console.log('Datos válidos:', jobListResponse)
		return jobListResponse
	} catch (error) {
		// En caso de error de validación o de la petición HTTP
		console.error('⚠ Error al obtener o validar los datos:', error)
		throw error
	}
}

export { getJobList }
