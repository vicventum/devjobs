<script setup lang="ts">
const { initialsText = '' } = defineProps<{
	initialsText: string | undefined
}>()
</script>

<template>
	<v-avatar color="primary">
		<span class="text-h5">{{ useGetFirstLetter(initialsText) }}</span>
	</v-avatar>
</template>

<style lang="scss" scoped></style>
