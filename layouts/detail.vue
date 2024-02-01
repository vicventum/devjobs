<template>
	<v-app data-testid="app">
		<LayoutHeader class="mb-n8" />
		<v-container class="container">
			<slot />
		</v-container>
		<footer>
			<slot name="footer" />
		</footer>
	</v-app>
</template>

<style scoped>
.container {
	position: relative;
	max-width: 730px;
}
</style>
