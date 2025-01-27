import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
// import { defineVitestConfig } from 'nuxt-vitest/config'
// import vuetify from 'vite-plugin-vuetify'

// https://vitejs.dev/config/
export default defineConfig({
	// threads: true,
	plugins: [
		vue(),
		// vuetify({ autoImport: true }),
		// vuetify({ styles: { configFile: 'assets/settings.scss' } }),
		Components({
			dirs: ['./components'],
		}),
		AutoImport({
			imports: [
				'vue',
				'vue-router',
				'vitest',
				'pinia',

				// {
				// 	'@pinia-plugin-persistedstate/nuxt/dist/runtime/storages': ['persistedState']
				// }
			],
			dirs: [
				'./stores',
				'./composables',
				'./utils',
				'./plugins',
				'./components',
			],
			dts: true,
		}),
	],
	test: {
		// @ts-ignore
		setupFilesAfterEnv: './setup.ts',
		globals: true,
		environment: 'happy-dom',
		deps: {
			inline: ['vuetify'],
		},

		// include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
		// testTimeout: 10000,
	},

	resolve: {
		alias: {
			'@': path.resolve(__dirname, '.'),
			// '#app': path.resolve(
			// 	__dirname,
			// 	'./node_modules/nuxt/dist/app/index.d.ts'
			// )

			// find: '@vue/test-utils',
			// replacement: '/node_modules/@nuxt/test-utils/dist/index.js',
		},
	},
	// moduleNameMapper: {
	// 	'^@/(.*)$': '<rootDir>/$1',
	// 	'^~/(.*)$': '<rootDir>/$1',
	// 	// '^vue$': 'vue/dist/vue.common.js',
	// },
})
