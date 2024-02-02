import type { JobDataDetail, DataFilter, Color } from '@/types'

import { getJobDetail } from '@/utils/services/jobs-service'
// import { useJobsStore } from '@/stores/jobs.store'

const useJob = ({ id, color }: { id: string; color?: Color }) => {
	const { DEFAULT_JOB_COLOR } = useConstants()
	// const store = useJobsStore()
	// const { jobList, currentPage, isFinalPage, dataFilter } = storeToRefs(store)
	const jobDetail = ref<JobDataDetail>()

	const { data, pending, error } = useAsyncData(
		'jobDetail',
		() => getJobDetail({ id }),
		{
			// watch: [currentPage, dataFilter],
			lazy: false,
		},
	)

	// ? Insertando la data (cuando ya se obtenga) en el store
	watch(
		() => data.value,
		(newJobDetailResponse) => {
			if (newJobDetailResponse) {
				const CUSTOM_COLOR = color ?? utilRandomColor()
				jobDetail.value = {
					id: newJobDetailResponse.id,
					logo: newJobDetailResponse.logo,
					title: newJobDetailResponse.role,
					company: newJobDetailResponse.company_name,
					type: newJobDetailResponse.employment_type,
					location: newJobDetailResponse.location,
					date: newJobDetailResponse.date_posted,
					color: newJobDetailResponse.logo ? DEFAULT_JOB_COLOR : CUSTOM_COLOR,
					remote: newJobDetailResponse.remote,
					urlApply: newJobDetailResponse.url,
					text: newJobDetailResponse.text,
					keywords: newJobDetailResponse.keywords,
					source: newJobDetailResponse.source,
					companyNumEmployees: newJobDetailResponse.company_num_employees,
					urlCompany: undefined,
				}
				// store.setJobs(jobDetail)
			}
		},
		{ immediate: true },
	)

	return {
		// --- Properties
		jobDetail,
		error,
		isLoading: pending,
		isError: !!error.value,
		// totalPages,

		// --- Methods
		// getPage(page: number) {
		// 	store.setPage(page)
		// },
		// getDataFilter(data: DataFilter) {
		// 	store.setDataFilter(data)
		// },
	}
}

export default useJob
