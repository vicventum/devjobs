import { render as vtlRender } from '@testing-library/vue'
import { createTestingPinia } from '@pinia/testing'

import { createVuetify } from 'vuetify'

import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import { mdiWhiteBalanceSunny, mdiWeatherNight } from '@mdi/js'

export * from '@testing-library/vue'
export * from '@testing-library/user-event'

// import { createRouter, createWebHistory } from 'vue-router'
// const routes = [
// 	{
// 		path: '/',
// 		component: {
// 			template: 'Welcome to the blogging app',
// 		},
// 	},
// ]
// const router = createRouter({
// 	history: createWebHistory(),
// 	routes: routes,
// })

// import Index from '../pages/index.vue'
// import NuxtLink from '../node_modules/nuxt/dist/app/components/nuxt-link.js'
// import { NuxtLink } from '#build/components.js'

const lightTheme = {
	dark: false,
	colors: {
		background: '#F4F6F8',
		surface: '#FAFAFA',
		primary: '#5964E0',
		dark: '#121721',
		light: '#FAFAFA',

		'on-background': '#121721',
		'on-surface': '#121721',
		'on-primary': '#FAFAFA',

		'primary-lighten-1': '#939BF4',
		'dark-lighten-1': '#19292D',
		'light-darken-1': '#F4F6F8',
		'light-darken-2': '#9DAEC2',
		'light-darken-3': '#6E8098',
	},
	variables: {
		'hover-opacity': 0.3,
	},
}
const darkTheme = {
	dark: true,
	colors: {
		background: '#121721',
		surface: '#19202D',
		primary: '#5964E0',
		dark: '#121721',
		light: '#FAFAFA',

		'on-background': '#FAFAFA',
		'on-surface': '#FAFAFA',
		'on-primary': '#FAFAFA',

		'primary-lighten-1': '#939BF4',
		'dark-lighten-1': '#19292D',
		'light-darken-1': '#F4F6F8',
		'light-darken-2': '#9DAEC2',
		'light-darken-3': '#6E8098',
	},
	variables: {
		'hover-opacity': 0.3,
	},
}

const vuetify = createVuetify({
	// your config will come here
	components,
	directives,
	ssr: true,
	icons: {
		defaultSet: 'mdi',
		// aliases,
		aliases: {
			...aliases,
			whiteBalanceSunny: mdiWhiteBalanceSunny,
			weatherNight: mdiWeatherNight,
		},
		sets: {
			mdi,
		},
	},
	defaults: {
		global: {
			ripple: true,
		},
	},
	// Configura los temas
	theme: {
		defaultTheme: 'lightTheme',
		themes: {
			lightTheme,
			darkTheme,
		},
	},
})
export function mount(component, { NuxtPage, container } = {}) {
	// router.push('/')
	// await router.isReady()
	return vtlRender(component, {
		container,
		global: {
			plugins: [
				createTestingPinia({ stubActions: false }),
				vuetify,
				// router,
				// piniaPluginPersistedstate()
			],
			stubs: {
				NuxtPage: false,
				NuxtLink: true,
			},
			components: {
				// NuxtPage: Index,
				NuxtPage,
				// NuxtLink,
			},
		},
	})
}
