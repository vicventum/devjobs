<script setup lang="ts">
type Props = {
	label: string
}
defineProps<Props>()

const modelValue = defineModel<boolean>()
</script>

<template>
	<v-checkbox
		v-model="modelValue"
		:label="label"
		color="primary"
		base-color="primary"
		hide-details
	/>
</template>

<style lang="scss" scoped></style>
