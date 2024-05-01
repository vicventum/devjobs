<script setup lang="ts"></script>

<template>
	<v-app data-testid="app">
		<LayoutHeader class="mb-n8" />
		<v-container class="container">
			<slot />
		</v-container>
	</v-app>
</template>

<style lang="scss" scoped>
.container {
	position: relative;
}
</style>
