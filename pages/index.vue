<script setup lang="ts">
// ;(async () => {
// 	await jobsStore().fetchJobList()
// })()
await jobsStore().fetchJobList()
const { isError } = jobsStore().jobList
</script>

<template>
	<div>
		<FormFilter class="filter" />
		<BaseErrorMessage
			v-if="isError"
			message="Ha ocurrido un error, inténtelo de nuevo o recargue la página"
		/>
		<GalleryJobs />
	</div>
</template>

<style lang="scss" scoped>
.filter {
	margin-bottom: 104px;
}
</style>
