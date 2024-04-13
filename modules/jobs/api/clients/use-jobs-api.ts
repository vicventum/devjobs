import { $fetch } from 'ofetch'
import type { $Fetch } from 'ofetch'

const useJobApi = (): $Fetch => {
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

export default useJobApi
