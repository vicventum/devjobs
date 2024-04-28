import type { $Fetch } from 'ofetch'
import { $fetch } from 'ofetch'
// import { useConstants } from '@/modules/core/composables/use-constants'
import { API_URL, API_KEY } from '@/modules/core/constants'

const useOfetchApi = (): $Fetch => {
	const runtimeConfig = useRuntimeConfig()
	console.log('🚀 ~ useOfetchApi ~ useRuntimeConfig():', runtimeConfig)
	const API_KEY = runtimeConfig.public.API_KEY
	const API_BASE = runtimeConfig.public.API_BASE
	const API_PROXY = runtimeConfig.public.API_PROXY
	const API_URL = `${API_PROXY}${API_BASE}`
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
