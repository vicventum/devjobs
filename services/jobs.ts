import type { JobListResponse, JobDataResponse } from '@/types'
import { JobListSchema, JobDataSchema } from '@/types'

// async function getJobList(): Promise<void> {
async function getJobList() {
	try {
		// const API_KEY = useRuntimeConfig().API_KEY
		const API_KEY = 'c6bef58abe2eded3348921b287e5f5f27daf73f9'
		const API_BASE = useRuntimeConfig().public.API_BASE
		const API_PROXY = 'https://corsproxy.io/?'
		console.log('🚀 ~ getJobList ~ API_KEY:', API_KEY, API_BASE)

		// if (process.server)
		// console.log('🚀 ~ getJobList ~ process.server:', process)

		// const response = await useFetch<JobListResponse>(
		const response = await useFetch(`${API_PROXY}${API_BASE}/jobs/`, {
			headers: {
				Authorization: `Token ${API_KEY}`,
			},
		})
		console.log('🚀 ~ getJobList ~ response:', response)

		// const jobList: JobListResponse = JobListSchema.parse(response) // Validar los datos recibidos con el esquema

		// Los datos son válidos si no se ha lanzado una excepción hasta este punto
		// console.log('Datos válidos:', jobList)

		// return jobList
		// Puedes usar los datos validados como desees
	} catch (error) {
		// En caso de error de validación o de la petición HTTP
		console.error('Error al obtener o validar los datos:', error)
	}
}

export { getJobList }
