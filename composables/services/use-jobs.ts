import type { JobListResponse, JobDataResponse, JobData } from '@/types'
import { JobListSchema, JobDataSchema } from '@/types'

import { getJobList } from '@/utils/services/jobs-service'
import { useJobsStore } from '@/stores/jobs.store'

const useJobs = () => {
	const { DEFAULT_JOB_COLOR } = useConstants()
	const store = useJobsStore()
	const { jobList, currentPage } = storeToRefs(store)

	const { pending, data, error } = useAsyncData('jobList', () => getJobList(), {
		watch: [currentPage],
	})
	console.warn('🚀 ~ useAsyncData ~ error:', error.value)

	// ? Insertando la data (cuando ya se obtenga) en el store
	watch(
		() => data.value,
		(newJobs) => {
			if (newJobs) {
				try {
					const jobListResponse: JobListResponse = JobListSchema.parse(newJobs)

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

					console.log('🚀 ~ useJobs ~ jobList:', jobList)
					store.setJobs(jobList)
				} catch (error) {
					// En caso de error de validación o de la petición HTTP
					console.warn('⚠ Error al obtener o validar los datos:', error)
					return { data: null, error, isLoading: pending, isError: !!error }
				}
			}
		},
		{ immediate: true },
	)

	return {
		// --- Properties
		jobList,
		currentPage,
		isLoading: pending,
		error,
		isError: !!error.value,
		// totalPages,

		// --- Methods
		// getPage(page: number) {
		// 	store.setPage(page)
		// },
	}
}

export default useJobs
