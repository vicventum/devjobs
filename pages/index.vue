<script setup lang="ts">
await jobsStore().fetchJobList()
</script>

<template>
	<div>
		<FormFilter class="filter" />
		<GalleryJobs />
	</div>
</template>

<style lang="scss" scoped>
.filter {
	margin-bottom: 104px;
}
</style>
