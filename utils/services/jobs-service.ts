import type { JobListResponse, JobDataResponse, JobData } from '@/types'
import { JobListSchema, JobDataSchema } from '@/types'
// import type {  } from 'zod'

import useJobsApi from '@/composables/api/use-jobs-api'

async function getJobList({
	page = 1,
}: { page?: number } = {}): Promise<JobListResponse> {
	const jobsApi = useJobsApi()
	const resp = await jobsApi<JobListResponse>(`/jobs/?page=${page}`)

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
