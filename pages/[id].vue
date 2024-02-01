<script lang="ts" setup>
definePageMeta({
	layout: false,
})

const route = useRoute()
console.log('🚀 ~ route:', route)
</script>

<template>
	<NuxtLayout name="detail">
		<CardJobSummary color="#009688" />

		<template #footer> footer </template>
	</NuxtLayout>
</template>

<style></style>
