import type { Color } from '@/modules/core/types'

const API_BASE = process.browser
	? useRuntimeConfig().public.API_BASE
	: process.env.API_BASE
const API_PROXY = process.browser
	? useRuntimeConfig().public.API_PROXY
	: process.env.API_PROXY
const API_KEY = process.browser
	? useRuntimeConfig().public.API_KEY
	: process.env.API_KEY
// const API_URL =  process.browser
// 	? useRuntimeConfig().public.API_URL
// 	: process.env.API_URL
const API_URL = `${API_PROXY}${API_BASE}`

// const defaultColor = useTheme().current.value.colors['light-darken-2']
// const DEFAULT_JOB_COLOR: Color = `rgb(var(--v-${defaultColor}))`
const DEFAULT_JOB_COLOR: Color = 'rgb(var(--v-theme-light-darken-2))'

export { API_KEY, API_BASE, API_PROXY, API_URL, DEFAULT_JOB_COLOR }
