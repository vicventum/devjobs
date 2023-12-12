<script setup lang="ts">
// import LayoutHeader from '@/components/layouts/LayoutHeader.vue'
// import LayoutHeader from '../components/layouts/LayoutHeader.vue'
</script>

<template>
	<v-app data-testid="app">
		<LayoutHeader class="mb-n8" />
		<v-container class="position-relative">
			<slot />
		</v-container>
	</v-app>
</template>

<style lang="scss" scoped></style>
