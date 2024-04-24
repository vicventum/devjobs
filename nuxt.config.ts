import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
		(_options, nuxt) => {
			nuxt.hooks.hook('vite:extendConfig', (config) => {
				// @ts-expect-error
				config.plugins.push(
					vuetify({
						autoImport: true,
						styles: {
							configFile: 'assets/sass/config/settings.scss',
						},
					}),
				)
			})
		},
	],
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
		storesDirs: ['./stores/**'],
	},
	typescript: {
		typeCheck: true,
		strict: true,
	},
})
