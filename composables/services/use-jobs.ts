import type { FetchError } from 'ofetch'
import type { JobListResponse, JobDataResponse, JobData } from '@/types'
import { JobListSchema, JobDataSchema } from '@/types'

// const DEFAULT_COLOR = theme.current.value.colors['light-darken-2']
// const DEFAULT_JOB_COLOR = 'rgb(var(--v-theme-light-darken-2))'

// async function getJobList(): Promise<void> {
export function useJobs() {
	async function getJobList() {
		const { DEFAULT_JOB_COLOR } = useConstants()
		const { data, error, pending } = await useMyFetch<JobListResponse>(
			`/jobs/`,
			{
				lazy: true,
			},
		)
		// Validar los datos recibidos con el esquema

		// const isLoading = ref(true)
		// setTimeout(() => {
		// 	isLoading.value = false
		// 	console.log('📡📡 ~ setTimeout ~ isLoading.value:', isLoading.value)
		// }, 1000)
		// watch(
		// 	() => isLoading,
		// 	() => {
		// 		console.log('📡 ~ isLoading:', isLoading.value)
		// 	},
		// 	{
		// 		immediate: true,
		// 	},
		// )

		try {
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
			return { data: jobList, isError: false, isLoading: pending }
		} catch (error) {
			// En caso de error de validación o de la petición HTTP
			console.log('⚠ Error al obtener o validar los datos:', error)
			// return { data: null, isError: true, isLoading: pending }
			return { data: null, isError: true, isLoading: pending }
		}
	}

	return {
		getJobList,
	}
}
