import { defineStore } from 'pinia'
// import persistedState from '@pinia-plugin-persistedstate/nuxt'
import { useJobs } from '@/composables/services/use-jobs'
import type { JobData } from '~/types'

export const jobsStore = defineStore({
	id: 'jobsStore',
	// persist: {
	//   // storage: persistedState.localStorage,
	//   storage: false,
	// },
	state: () => ({
		jobList: [] as JobData[],
	}),

	actions: {
		async fetchJobList() {
			this.jobList = await useJobs().getJobList()
			return this.jobList
		},
		// fetchJobList() {
		// 	// @ts-ignore
		// 	this.jobList = useJobs().getJobList()
		// 	console.log('🚀 ~ fetchJobList ~ this.jobList:', this.jobList, useJobs())
		// 	return this.jobList
		// },
	},
})
