<template>
	<v-app data-testid="app">
		<LayoutHeader class="mb-n14" />
		<v-container class="container">
			<slot />
		</v-container>
		<v-sheet class="footer">
			<slot name="footer" />
		</v-sheet>
	</v-app>
</template>

<style scoped>
.container {
	position: relative;
	max-width: var(--job-detail-container-width);
}
.footer {
	/*// ? Coloca el footer siempre abajo */
	margin-top: auto;
}
</style>
