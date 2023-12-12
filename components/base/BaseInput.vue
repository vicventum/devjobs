<script setup lang="ts"></script>

<template>
	<v-text-field
		class="input"
		variant="solo"
		density="comfortable"
		hide-details
		flat
	/>
</template>

<style lang="scss" scoped>
.input {
	&:deep(.v-icon__svg) {
		fill: rgb(var(--v-theme-primary)) !important;
	}
}
</style>
