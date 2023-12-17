export default function useConstants() {
	const API_KEY = useRuntimeConfig().public.API_KEY
	const API_BASE = useRuntimeConfig().public.API_BASE
	const API_PROXY = useRuntimeConfig().public.API_PROXY
	const API_URL = `${API_PROXY}${API_BASE}`
	return {
		API_KEY,
		API_BASE,
		API_PROXY,
		API_URL,
	}
}
