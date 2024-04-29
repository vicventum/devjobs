import type { $Fetch, FetchOptions } from 'ofetch'
import { $fetch } from 'ofetch'
import { useConstants } from '@/modules/core/constants/use-constants'
// import { API_URL, API_KEY } from '@/modules/core/constants'

// const ofetchApi = (): $Fetch => {
function ofetchApi<T>(url: string, options?: FetchOptions): Promise<T> {
	const { API_URL, API_KEY } = useConstants()

	const api: $Fetch = $fetch.create({
		// your default options
		baseURL: API_URL ?? 'https://api.nuxt.com',
	})

	return api(url, {
		...options,
		headers: {
			...options?.headers,
			Authorization: `Token ${API_KEY}`,
		},
	})
}

export { ofetchApi }