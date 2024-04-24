import type { $Fetch } from 'ofetch'
import { $fetch } from 'ofetch'
import { useConstants } from '@/modules/core/composables/use-constants'

const useOfetchApi = (): $Fetch => {
	const { API_URL, API_KEY } = useConstants()

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
