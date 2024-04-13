<script setup lang="ts">
// import useSrc from '@/composables/use-src'
</script>

<template>
	<v-app-bar
		class="header position-relative"
		image="@/assets/img/desktop/bg-pattern-header.svg"
		height="161"
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
				<SwitchTheme />
			</div>
		</v-container>
	</v-app-bar>
</template>

<style lang="scss" scoped>
.header {
	z-index: 0 !important;
}
</style>
