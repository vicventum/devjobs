<script setup lang="ts">
import { useSrc } from '@/modules/core/composables/use-src'

const HEADER_HEIGHT = 161
</script>

<template>
	<v-app-bar
		class="header"
		:image="useSrc('/assets/img/desktop/bg-pattern-header.svg')"
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
