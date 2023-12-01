import { render as vtlRender } from '@testing-library/vue'
import { createTestingPinia } from '@pinia/testing'

import { createVuetify } from 'vuetify'

import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
// import { mdiThemeLightDark } from '@mdi/js'

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
	theme: {
		defaultTheme: 'dark',
	},
})

// export * from '@testing-library/user-event'

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
// import { NuxtPage } from '#build/components.js'
export function mount(component, { NuxtPage } = {}) {
	// router.push('/')
	// await router.isReady()
	return vtlRender(component, {
		global: {
			plugins: [
				createTestingPinia({ stubActions: false }),
				vuetify,
				// router,
				// piniaPluginPersistedstate()
			],
			stubs: {
				NuxtPage: false,
			},
			components: {
				// NuxtPage: Index,
				NuxtPage,
			},
		},
	})
}

export * from '@testing-library/vue'
