<script setup lang="ts">
import useSrc from '@/composables/use-src'
</script>

<template>
	<v-app-bar
		class="position-relative"
		image="@/assets/img/desktop/bg-pattern-header.svg"
		height="161"
		position="static"
		flat
	>
		<v-container class="d-flex align-center mt-n8">
			<Nuxt-Link to="/" style="width: 115px">
				<BaseImg
					:src="useSrc('/assets/img/desktop/logo.svg')"
					alt="logo"
					:cover="false"
				/>
			</Nuxt-Link>

			<v-spacer />

			<div>
				<BaseSwitchTheme />
			</div>
		</v-container>
	</v-app-bar>
	<!-- pito -->
</template>

<style lang="scss" scoped></style>
