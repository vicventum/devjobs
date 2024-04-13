// import type { JobListResponse, DataFilter, JobDataResponse } from '@/types'
// import { JobListSchema, JobDataSchema } from '@/types'
// import type {  } from 'zod'

// import useJobsApi from '@/composables/api/use-jobs-api'

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

	// ! FIXME: CLARA VIOLACION A _OCP_, NECESITO INYECTAR DEPENDENCIAS
	const jobsApi = useJobsApi()
	const resp = await jobsApi<JobListResponse>(`/jobs/?page=${page}`, { query })

	try {
		const jobListResponse: JobListResponse = JobListSchema.parse(resp)
		// Los datos son válidos si no se ha lanzado una excepción hasta este punto
		// console.log('Datos válidos:', jobListResponse)
		return jobListResponse
	} catch (error) {
		// TODO: Indicar el tipo del error
		// En caso de error de validación o de la petición HTTP
		console.error('⚠ Error al obtener o validar los datos:', error)
		throw error
	}
}

async function getJobDetail({ id }: { id: string }): Promise<JobDataResponse> {
	const jobsApi = useJobsApi()
	const api = $fetch.create({
		// your default options
		baseURL: 'https://cors-anywhere.herokuapp.com/https://findwork.dev/api',
		headers: {
			Authorization: `Token c6bef58abe2eded3348921b287e5f5f27daf73f9`,
		},
	})

	const resp = await jobsApi<JobDataResponse>(`/jobs/${id}`)

	try {
		const jobDataResponse: JobDataResponse = JobDataSchema.parse(resp)
		return jobDataResponse
	} catch (error) {
		// TODO: Indicar el tipo del error
		console.error('⚠ Error al obtener o validar los datos:', error)
		throw error
	}
}

export { getJobList, getJobDetail }
