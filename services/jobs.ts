import type { JobListResponse, JobDataResponse, JobData } from '@/types'
import { JobListSchema, JobDataSchema } from '@/types'

// async function getJobList(): Promise<void> {
async function getJobList() {
	try {
		const { data } = await useMyFetch<JobListResponse>(`/jobs/`)
		// Validar los datos recibidos con el esquema
		const jobListResponse: JobListResponse = JobListSchema.parse(data.value)
		// Los datos son válidos si no se ha lanzado una excepción hasta este punto
		// console.log('Datos válidos:', jobListResponse)

		const jobList: JobData[] = jobListResponse.results.map((job) => ({
			id: job.id,
			logo: job.logo,
			title: job.role,
			company: job.company_name,
			type: job.employment_type,
			location: job.location,
			date: job.date_posted,
		}))

		return jobList
	} catch (error) {
		// En caso de error de validación o de la petición HTTP
		console.error('Error al obtener o validar los datos:', error)
	}
}

export { getJobList }
