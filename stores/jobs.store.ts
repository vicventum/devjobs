import type { JobData } from '@/types'

export const useJobsStore = defineStore('Jobs', () => {
	const jobList = ref<JobData[]>([])
	const currentPage = ref<number>(1)
	// const totalPages = ref<number>(5)

	return {
		// --- State
		jobList,
		currentPage,

		// --- Getters
		// squareCount: computed(() => currentPage.value * currentPage.value),

		// --- Actions
		setJobs(newJobs: JobData[]) {
			jobList.value.push(...newJobs)
		},
		// setPage(page: number) {
		//   if (currentPage.value === page) return null
		//   if (page <= 0) return null
		//   if (page > totalPages.value) return null

		//   currentPage.value = page
		// }
	}
})
