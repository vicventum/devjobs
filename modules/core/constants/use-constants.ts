// import { useTheme } from 'vuetify'
import type { Color } from '@/modules/core/types'

export function useConstants() {
	const API_KEY = useRuntimeConfig().public.API_KEY
	const API_BASE = useRuntimeConfig().public.API_BASE
	const API_PROXY = useRuntimeConfig().public.API_PROXY
	const API_URL = useRuntimeConfig().public.API_URL

	// const defaultColor = useTheme().current.value.colors['light-darken-2']
	// const DEFAULT_JOB_COLOR: Color = `rgb(var(--v-${defaultColor}))`
	const DEFAULT_JOB_COLOR: Color = 'rgb(var(--v-theme-light-darken-2))'

	return {
		API_KEY,
		API_BASE,
		API_PROXY,
		API_URL,
		DEFAULT_JOB_COLOR,
	}
}
