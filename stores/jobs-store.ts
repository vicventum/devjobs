import { defineStore } from 'pinia'
// import persistedState from '@pinia-plugin-persistedstate/nuxt'
import { getJobList } from '@/services/jobs'

export const jobsStore = defineStore({
	id: 'jobsStore',
	// persist: {
	//   // storage: persistedState.localStorage,
	//   storage: false,
	// },
	state: () => ({
		jobList: [],
	}),

	actions: {
		async fetchJobList() {
			const API_KEY = useRuntimeConfig().API_KEY
			console.log('🚀🚀🚀 ~ API_KEY:', API_KEY, process.env.API_KEY)
			await getJobList()
		},
	},
})
