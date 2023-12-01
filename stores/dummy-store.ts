import { defineStore } from 'pinia'
// import persistedState from '@pinia-plugin-persistedstate/nuxt'
// import { persistedState, } from '../node_modules/@pinia-plugin-persistedstate/nuxt/dist/runtime/storages'
// import { persistedState, } from '../node_modules/@pinia-plugin-persistedstate/nuxt/dist/runtime/storages'

export const dummyStore = defineStore({
	id: 'dummyStore',
	// persist: {
	//   // storage: persistedState.localStorage,
	//   storage: false,
	// },
	state: () => ({
		message: 'holi',
	}),
})
