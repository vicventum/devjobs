<script setup lang="ts">
import type { DataFilter } from '@/types'
import useJobs from '@/composables/services/use-jobs'

const {
	jobList,
	isLoading,
	isError,
	currentPage,
	isFinalPage,
	getPage,
	getDataFilter,
} = useJobs()

const errorMessage = computed(() => {
	if (isError)
		return 'An error has occurred, please try again or reload the page'
	if (!jobList.value.length) return 'No available jobs found'
})

function submitDataFilter(dataFilter: DataFilter) {
	getDataFilter(dataFilter)
}
</script>

<template>
	<div>
		<ClientOnly>
			<FormFilter
				class="filter"
				:is-loading="isLoading"
				@submit="submitDataFilter"
			/>

			<GallerySkeleton v-if="isLoading && !jobList.length" />
			<BaseErrorMessage
				v-else-if="isError || !jobList.length"
				:message="errorMessage"
			/>
			<GalleryJobs v-else :job-list="jobList" />
			<GallerySkeleton
				v-if="isLoading && jobList.length"
				class="my-16"
				:items="3"
			/>

			<footer class="pa-4 d-flex justify-center my-16">
				<!-- <v-btn :loading="pending" color="primary" @click="loadMoreJobs"> -->
				<v-btn
					:loading="isLoading"
					:disabled="isLoading || isFinalPage"
					color="primary"
					@click="getPage(currentPage + 1)"
				>
					Load More
				</v-btn>
			</footer>
		</ClientOnly>
	</div>
</template>

<style lang="scss" scoped>
.filter {
	margin-bottom: 104px;
}
</style>
