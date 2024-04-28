import type { $Fetch } from 'ofetch'
import { $fetch } from 'ofetch'
// import { useConstants } from '@/modules/core/composables/use-constants'
import {
	API_URL as API_URL_SERVER,
	API_KEY as API_KEY_SERVER,
} from '@/modules/core/constants'

const useOfetchApi = (): $Fetch => {
	// const runtimeConfig = useRuntimeConfig()
	// console.log('🚀 ~ useOfetchApi ~ useRuntimeConfig():', runtimeConfig)
	const API_KEY = process.browser
		? useRuntimeConfig().public.API_KEY
		: API_KEY_SERVER
	const API_URL = process.browser
		? (useRuntimeConfig().public.API_URL as string)
		: API_URL_SERVER
	// const { API_URL, API_KEY } = useConstants()

	const api = $fetch.create({
		// your default options
		baseURL: API_URL ?? 'https://api.nuxt.com',
		headers: {
			Authorization: `Token ${API_KEY}`,
		},
	})

	return api
}

export { useOfetchApi }
