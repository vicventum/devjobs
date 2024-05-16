<script setup lang="ts">
type Props = {
	placeholder: string
	prependInnerIcon?: string
	clearable?: boolean
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
		:clearable="clearable"
		variant="solo"
		density="comfortable"
		hide-details
		flat
	/>
</template>

<style lang="scss" scoped>
.input {
	&:deep(.v-field__input) {
		text-overflow: ellipsis;
	}
	&:deep(.v-icon__svg) {
		fill: rgb(var(--v-theme-primary)) !important;
	}
}
</style>
