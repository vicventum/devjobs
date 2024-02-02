<template>
	<v-app data-testid="app">
		<LayoutHeader class="mb-n8" />
		<v-container class="container">
			<slot />
		</v-container>
		<v-sheet>
			<slot name="footer" />
		</v-sheet>
	</v-app>
</template>

<style scoped>
.container {
	position: relative;
	max-width: var(--job-detail-container-width);
}
</style>
