<script setup lang="ts">
// ;(async () => {
// 	await jobsStore().fetchJobList()
// })()
const isErrorLoadingJobs = ref(false)
try {
	await jobsStore().fetchJobList()
} catch (error) {
	isErrorLoadingJobs.value = true
	console.error('⚠ ~ Index error:', error)
}
</script>

<template>
	<div>
		<FormFilter class="filter" />
		<section v-if="isErrorLoadingJobs">
			<h2 class="text-center">
				Ha ocurrido un error, inténtelo de nuevo o recargue la página
			</h2>
		</section>
		<GalleryJobs />
	</div>
</template>

<style lang="scss" scoped>
.filter {
	margin-bottom: 104px;
}
</style>
