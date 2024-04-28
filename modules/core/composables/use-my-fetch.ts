// import type { UseFetchOptions } from 'nuxt/dist/app/composables'
// import type { KeysOf } from 'nuxt/dist/app/composables/asyncData'

// const API_KEY = useRuntimeConfig().API_KEY
// const API_BASE = useRuntimeConfig().public.API_BASE

// export default function useMyFetch(
// 	url: string,
// 	options: UseFetchOptions<any, any, KeysOf<any>, null, any, 'get'> | undefined,
// ) {
// 	return useFetch(url, {
// 		// your defaults
// 		key: url,
// 		baseURL: API_BASE,
// 		headers: {
// 			Authorization: `Token ${API_KEY}`,
// 		},
// 		...options,
// 	})
// }

import type { UseFetchOptions } from '#app'
import { defu } from 'defu'
// import { useConstants } from '@/modules/core/composables/use-constants'
import { API_URL, API_KEY } from '@/modules/core/constants'

export default function useMyFetch<T>(
	url: string,
	options: UseFetchOptions<T> = {},
) {
	// const userAuth = useCookie('token')
	// const { API_URL, API_KEY } = useConstants()

	const defaults: UseFetchOptions<T> = {
		baseURL: API_URL ?? 'https://api.nuxt.com',
		// this overrides the default key generation, which includes a hash of
		// url, method, headers, etc. - this should be used with care as the key
		// is how Nuxt decides how responses should be deduplicated between
		// client and server
		key: url,

		/// set user token if connected
		// headers: userAuth.value
		// 	? { Authorization: `Bearer ${userAuth.value}` }
		// 	: {},
		headers: {
			Authorization: `Token ${API_KEY}`,
		},

		onResponse(_ctx) {
			// _ctx.response._data = new myBusinessResponse(_ctx.response._data)
		},

		onResponseError(_ctx) {
			// throw new myBusinessError()
		},
	}

	// for nice deep defaults, please use unjs/defu
	const params = defu(options, defaults)
	// const { error } = useFetch(url, params)
	return useFetch(url, params)
}
