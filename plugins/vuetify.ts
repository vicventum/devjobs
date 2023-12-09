// import 'vuetify/styles'
import { createVuetify, type ThemeDefinition } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import {
	mdiThemeLightDark,
	mdiWhiteBalanceSunny,
	mdiWeatherNight,
} from '@mdi/js'

// import { md1 } from 'vuetify/blueprints'
// import { VDataTable } from 'vuetify/labs/VDataTable'
// import { defineNuxtPlugin } from '#app'

// Crea nuevo tema personalizado
const lightTheme: ThemeDefinition = {
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
const darkTheme: ThemeDefinition = {
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

export const vuetify = createVuetify({
	// your config will come here
	ssr: true,
	icons: {
		defaultSet: 'mdi',
		// aliases,
		aliases: {
			...aliases,
			themeLightDark: mdiThemeLightDark,
			whiteBalanceSunny: mdiWhiteBalanceSunny,
			weatherNight: mdiWeatherNight,
		},
		sets: {
			mdi,
		},
	},
	// Cambia la versión de Material Design
	// blueprint: md1,
	defaults: {
		// Modifica la configuración global de los estilos de los componentes
		global: {
			ripple: true,
		},
		// Modifica la configuración de los estilos de un componente específico (el `v-text-field` en este caso)
		// VTextField: {
		// 	variant: 'outlined',
		// 	color: 'primary',
		// }
	},
	// Configura los temas
	theme: {
		defaultTheme: 'lightTheme',
		// variations: {
		// 	colors: ['primary'],
		// 	lighten: 1,
		// 	darken: 1,
		// },
		themes: {
			lightTheme,
			darkTheme,
		},
	},
	// Configura los íconos personalizados
	// icons: {
	// 	defaultSet: 'custom',
	// 	sets: {
	// 		custom
	// 	},
	// 	aliases,
	// },
	// Agrega componentes adicionales. En este caso el componente de `v-data-table`, de _Vuetify Labs_ (componentes no terminados aún, en estado alpha)
	// components: {
	// 	VDataTable
	// }
})

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.use(vuetify)
})
