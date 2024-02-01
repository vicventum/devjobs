<script lang="ts" setup>
definePageMeta({
	layout: false,
})

const route = useRoute()
console.log('🚀 ~ route:', route)
</script>

<template>
	<NuxtLayout name="detail">
		<CardJobSummary class="job-summary mb-8" color="#009688" />
		<CardJobContent class="job-content mb-8" />

		<template #footer>
			<LayoutJobDetailFooter />
		</template>
	</NuxtLayout>
</template>

<style scoped></style>
