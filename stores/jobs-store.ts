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
	isError: boolean
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
		isError: false,
		isLoading: ref(true),
	})

	// --- ACTIONS

	async function fetchJobList() {
		jobList.value = await useJobs().getJobList()
		// const { data, isError, isLoading } = await useJobs().getJobList()
		// jobList.value.data = data
		// jobList.value.isError = isError
		// jobList.value.isLoading = isLoading

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

	return {
		jobList,
		fetchJobList,
	}
})
