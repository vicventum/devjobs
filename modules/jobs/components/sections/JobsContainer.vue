<script setup lang="ts">
import type { DataFilter } from '@/modules/jobs/types'
import { useJobs } from '@/modules/jobs/api/composables/use-jobs'

const {
	jobList,
	isLoading,
	isError,
	error,
	currentPage,
	isFinalPage,
	getPage,
	getDataFilter,
} = await useJobs()

const errorMessage = computed(() => {
	console.log('🚀 ~ errorMessage ~ error.value:', { error: error.value })
	// if (isError) return 'An error has occurred, please try again or reload the page'
	if (isError ?? !jobList.value.length) return 'No available jobs found'
})

function submitDataFilter(dataFilter: DataFilter) {
	getDataFilter(dataFilter)
}
</script>

<template>
	<div>
		<FormFilter
			class="filter"
			:is-loading="isLoading"
			@submit="submitDataFilter"
		/>

		<GalleryJobsErrorHandler
			:is-loading="isLoading"
			:is-error="isError"
			:is-empty="!jobList.length"
			:error-message="errorMessage"
		>
			<GalleryJobs :job-list="jobList" />
		</GalleryJobsErrorHandler>

		<!-- <v-btn :loading="pending" color="primary" @click="loadMoreJobs"> -->
		<footer class="actions pa-4 my-16">
			<v-btn
				:loading="isLoading"
				:disabled="isLoading || isFinalPage || isError"
				color="primary"
				@click="getPage(currentPage + 1)"
			>
				Load More
			</v-btn>
		</footer>
	</div>
</template>

<style lang="scss" scoped>
.filter {
	margin-bottom: 104px;
}
.actions {
	display: flex;
	justify-content: center;
}
</style>
