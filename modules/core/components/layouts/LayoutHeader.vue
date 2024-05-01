<script setup lang="ts">
import { useDisplay } from 'vuetify'
import { useSrc } from '@/modules/core/composables/use-src'

const HEADER_HEIGHT = 161

const { name } = useDisplay()

const BACKGROUND_IMAGE: { [key: string]: string } = {
	xs: '/assets/img/mobile/bg-pattern-header.svg',
	sm: '/assets/img/tablet/bg-pattern-header.svg',
}
const DEFAULT_BACKGROUND_IMAGE = '/assets/img/desktop/bg-pattern-header.svg'

const headerImage = computed(
	() => BACKGROUND_IMAGE[name.value] ?? DEFAULT_BACKGROUND_IMAGE,
)
// xs: boolean // 0 - 595
// sm: boolean // 600 - 959
// md: boolean // 960 - 1279
// lg: boolean // 1280 - 1919
// xl: boolean // > 1920
// xxl: boolean
</script>

<template>
	<v-app-bar
		class="header"
		:image="useSrc(headerImage)"
		:height="HEADER_HEIGHT"
		flat
	>
		<v-container class="header__logo mt-n8">
			<Nuxt-Link to="/" class="header__logo-link">
				<BaseImg
					:src="useSrc('/assets/img/desktop/logo.svg')"
					:cover="false"
					alt="logo"
				/>
			</Nuxt-Link>

			<v-spacer />

			<div>
				<SwitchTheme />
			</div>
		</v-container>
	</v-app-bar>
</template>

<style lang="scss" scoped>
.header {
	position: relative !important;
	z-index: 0 !important;

	&__logo {
		display: flex;
		align-items: center;
	}
	&__logo-link {
		width: 115px;
	}
}
</style>
