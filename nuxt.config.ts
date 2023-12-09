import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: false },
	css: ['vuetify/styles', '~/assets/sass/main.scss'],
	components: [
		{
			path: '~/components',
			pathPrefix: false,
		},
	],
	build: {
		transpile: ['vuetify'],
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
