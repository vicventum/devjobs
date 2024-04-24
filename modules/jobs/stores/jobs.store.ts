import type { JobData, DataFilter } from '@/modules/jobs/types'

export const useJobsStore = defineStore('Jobs', () => {
	const jobList = ref<JobData[]>([])
	const currentPage = ref<number>(1)
	const isFinalPage = ref<boolean>(false)
	const dataFilter = ref<DataFilter>({
		title: '',
		location: '',
		isRemote: false,
	})

	function resetData() {
		jobList.value = []
		currentPage.value = 1
		isFinalPage.value = false
	}

	return {
		// --- State
		jobList,
		currentPage,
		isFinalPage,
		dataFilter,

		// --- Getters
		// squareCount: computed(() => currentPage.value * currentPage.value),

		// --- Actions
		setJobs(newJobs: JobData[]) {
			jobList.value.push(...newJobs)
		},
		setPage(page: number) {
			if (currentPage.value === page) return null
			if (page <= 0) return null
			// if (page > totalPages.value) return null

			currentPage.value = page
		},
		setFinalPage(finalPage: string | null) {
			isFinalPage.value = !finalPage
		},
		setDataFilter(data: DataFilter) {
			resetData()
			dataFilter.value = { ...data }
		},
	}
})
