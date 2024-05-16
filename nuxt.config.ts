import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import vuetifySass from '@paro-paro/vite-plugin-vuetify-sass'

// https://nuxt.com/docs/api/configuration/nuxt-config
const isDev = process.env.NODE_ENV !== 'production'
export default defineNuxtConfig({
	ssr: true,
	devtools: { enabled: false },
	devServer: {
		// port: 1234,
	},
	runtimeConfig: {
		// The private keys which are only available within server-side
		API_KEY: process.env.API_KEY,
		// Keys within public, will be also exposed to the client-side
		public: {
			API_KEY: process.env.API_KEY,
			API_BASE: process.env.API_BASE,
			API_PROXY: process.env.API_PROXY,
			API_URL: process.env.API_URL,
		},
	},
	css: ['vuetify/styles', '~/assets/sass/main.scss'],
	components: [
		{
			path: '~/modules',
			pathPrefix: false,
		},
	],
	build: {
		transpile: ['vuetify'],
	},
	app: {
		baseURL: isDev ? process.env.BASE_URL_DEV : process.env.BASE_URL_PROD, // baseURL: '/<repository>/'
		// buildAssetsDir: 'assets', // don't use "_" at the begining of the folder name to avoids nojkill conflict
	},
	imports: {
		dirs: [
			// scan all modules within given directory
			// 'modules/**/*',
			// 'composables/**/*',
		],
	},
	modules: [
		'@nuxtjs/google-fonts',
		'@pinia/nuxt',
		// 'vuetifySass',
		// (_options, nuxt) => {
		// 	nuxt.hooks.hook('vite:extendConfig', (config) => {
		// 		// @ts-expect-error
		// 		config.plugins.push(
		// 			vuetify({
		// 				autoImport: true,
		// 				styles: {
		// 					configFile: 'assets/sass/config/settings.scss',
		// 				},
		// 			}),
		// 		)
		// 	})
		// },
	],
	experimental: {
		// @ts-ignore
		inlineSSRStyles: false, // for production build
	},
	hooks: {
		'vite:extendConfig': (config) => {
			config.plugins!.push(
				vuetify({ autoImport: true }), // do not pass the 'styles' option
				vuetifySass({
					configFile: './assets/sass/config/settings.scss',
				}),
			)
		},
	},
	vite: {
		vue: {
			template: {
				transformAssetUrls,
			},
			script: {
				defineModel: true,
				// ^^ enables the feature
				propsDestructure: true,
			},
		},
		// ? Para agregar las variables de SCSS de forma global en los componentes
		// css: {
		// 	preprocessorOptions: {
		// 		scss: {
		// 			additionalData: '@use "@/assets/scss/settings.scss" as *;',
		// 		},
		// 	},
		// },
	},
	// Configuración de Google font
	googleFonts: {
		families: {
			'Kumbh+Sans': [100, 200, 300, 400, 700, 900],
			preload: true,
			// useStylesheet: true,
			download: true,
		},
	},
	pinia: {
		// storesDirs: ['./stores/**'],
	},
	typescript: {
		typeCheck: true,
		strict: true,
	},
})
