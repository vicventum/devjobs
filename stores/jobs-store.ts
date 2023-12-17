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
			// @ts-ignore
			this.jobList = await getJobList()
		},
	},
})
