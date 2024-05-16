import { defineNuxtPlugin } from '#app'
import Toast, { type PluginOptions } from 'vue-toastification'
import 'vue-toastification/dist/index.css' // if needed

export default defineNuxtPlugin((nuxtApp) => {
	const options: PluginOptions = {
		toastClassName: 'custom-toast',
		timeout: 3500,
	}
	nuxtApp.vueApp.use(Toast, options)
})
