<script setup lang="ts">
type Props = {
	placeholder: string
	prependInnerIcon: string
}
defineProps<Props>()

const modelValue = defineModel<string>()
</script>

<template>
	<v-text-field
		v-model="modelValue"
		class="input"
		:placeholder="placeholder"
		:prepend-inner-icon="prependInnerIcon"
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
