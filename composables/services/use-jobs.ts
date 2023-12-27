import type { JobListResponse, JobDataResponse, JobData } from '@/types'
import { JobListSchema, JobDataSchema } from '@/types'

// const DEFAULT_COLOR = theme.current.value.colors['light-darken-2']
// const DEFAULT_JOB_COLOR = 'rgb(var(--v-theme-light-darken-2))'

// async function getJobList(): Promise<void> {
export function useJobs() {
	async function getJobList(): Promise<JobData[]> {
		const { DEFAULT_JOB_COLOR } = useConstants()
		try {
			const { data, error } = await useMyFetch<JobListResponse>(`/jobsA/`)
			// Validar los datos recibidos con el esquema
			console.log('🚀 ~ getJobList ~ error:', error)
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
				color: job.logo ? DEFAULT_JOB_COLOR : utilRandomColor(),
			}))

			return jobList
		} catch (error) {
			// En caso de error de validación o de la petición HTTP
			console.error('⚠ Error al obtener o validar los datos:', error)
			throw error
		}
	}

	return {
		getJobList,
	}
}
