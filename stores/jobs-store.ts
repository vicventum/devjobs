import { defineStore } from 'pinia'
// import persistedState from '@pinia-plugin-persistedstate/nuxt'
import { useJobs } from '@/composables/services/use-jobs'
import type { JobData } from '~/types'

// export const jobsStore = defineStore({
// 	id: 'jobsStore',
// 	// persist: {
// 	//   // storage: persistedState.localStorage,
// 	//   storage: false,
// 	// },
// 	state: () => ({
// 		jobList: {
// 			data: [] as JobData[] | null,
// 			isError: false,
// 			// isLoading: ref(true) as globalThis.Ref<boolean>,
// 			isLoading: ref(true),
// 		},
// 	}),

// 	actions: {
// 		async fetchJobList() {
// 			const { data, isError, isLoading } = await useJobs().getJobList()
// 			// console.log('🚀 ~ fetchJobList ~ error:', error)
// 			this.jobList.data = data
// 			this.jobList.isError = isError
// 			this.jobList.isLoading = isLoading
// 			// @ts-ignore
// 			// this.$patch({ jobList: { data, isError, isLoading } })
// 			// return this.jobList
// 		},
// 		// fetchJobList() {
// 		// 	// @ts-ignore
// 		// 	this.jobList = useJobs().getJobList()
// 		// 	console.log('🚀 ~ fetchJobList ~ this.jobList:', this.jobList, useJobs())
// 		// 	return this.jobList
// 		// },
// 	},
// })

interface JobsState {
	data: JobData[] | null
	isError: Ref<any>
	isLoading: Ref<any> // Declarar isLoading como una referencia
}

export const jobsStore = defineStore('jobsStore', () => {
	// --- STATE

	// persist: {
	//   // storage: persistedState.localStorage,
	//   storage: false,
	// },
	const jobList = ref<JobsState>({
		data: [],
		isError: ref(false),
		isLoading: ref(true),
	})
	const page = ref(1)

	// --- ACTIONS

	async function fetchJobList() {
		// jobList.value = await useJobs().getJobList()
		const { data, isError, isLoading } = await useJobs().getJobList()
		jobList.value.data = data
		jobList.value.isError = isError
		jobList.value.isLoading = isLoading

		// // Efecto para monitorear cambios en pending y actualizar isLoading
		// const stopLoadingWatcher = watch(
		// 	isLoading,
		// 	(newValue) => {
		// 		jobList.isLoading = newValue
		// 		console.log('👁 ~ fetchJobList ~ newValue:', newValue)
		// 	},
		// 	{ immediate: true },
		// )

		// // Detener el watcher cuando ya no sea necesario (por ejemplo, cuando la tarea está completa)
		// if (!isLoading.value) {
		// 	stopLoadingWatcher()
		// }
	}

	async function loadMoreJobs() {
		let pageNumber = page.value
		pageNumber++
		console.log('🟡 ~ loadMoreJobs ~ page.value:', page.value)
		// jobList.value = await useJobs().getJobList({ page: page.value })
		// const resp = await useJobs().getJobList({ page: page.value })
		// const { data, isError, isLoading } = await toRefs(
		// 	useJobs().getJobList({
		// 		page: page.value,
		// 	}),
		// )

		const { data, isError, isLoading } = await useJobs().getJobList({
			page: pageNumber,
		})
		jobList.value.data = data
		const list = jobList.value.data
		// @ts-ignore
		if (list) list?.push(...data)
		jobList.value.data = list
		watch(
			() => isLoading.value,
			() => {
				console.log('🟡🟡 ~ isLoading:', isLoading.value)
			},
			{
				immediate: true,
			},
		)
		// if (!isError) page.value = pageNumber
		page.value = pageNumber
		jobList.value.isError = isError
		jobList.value.isLoading = isLoading

		// @ts-ignore
		// const list = jobList.value.data
		// console.log('🚀 ~ loadMoreJobs ~ list:', list)

		// @ts-ignore
		// if (list) list?.push(...resp.data)
		// jobList.value.data = list
		// jobList.value.isError = resp.isError
		// jobList.value.isLoading = resp.isLoading
	}

	return {
		jobList,
		page,
		fetchJobList,
		loadMoreJobs,
	}
})
