<script setup lang="ts">
type Props = {
	prependIcon: string
	appendIcon: string
}
defineProps<Props>()

const modelValue = defineModel<boolean>({ default: false })
</script>

<template>
	<v-switch
		v-model="modelValue"
		:prepend-icon="prependIcon"
		:append-icon="appendIcon"
		hide-details
		inset
	/>
</template>

<style lang="scss" scoped></style>
