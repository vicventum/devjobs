<script setup lang="ts">
import useJobs from '~/composables/services/use-jobs'

/// / ;(async () => {
/// / 	await jobsStore().fetchJobList()
/// / })()
// const { isError, isLoading } = toRefs(jobsStore().jobList)
// // const jobList = jobsStore().jobList
// // console.log('🟢 ~ isLoading:', jobList.isLoading.value)
// watch(
// 	() => isLoading.value,
// 	() => {
// 		console.log('🟢🟢 isLoading:', isLoading.value)
// 	},
// 	{
// 		immediate: true,
// 	},
// )

// await jobsStore().fetchJobList()
// // let isLoad = ref(false)
// async function loadMoreJobs() {
// 	await jobsStore().loadMoreJobs()
// 	// const BASE_PATH = `/jobs/?page=${7}`
// 	// const { data, error, pending } = await useMyFetch(
// 	// 	BASE_PATH,
// 	// 	// {
// 	// 	// 	lazy: true,
// 	// 	// },
// 	// )
// 	// isLoad = toRef(pending)
// 	// watch(
// 	// 	() => pending.value,
// 	// 	() => {
// 	// 		console.log('🟠 ~ pending:', pending.value, isLoad.value)
// 	// 		// isLoad.value = pending.value
// 	// 	},
// 	// 	{
// 	// 		immediate: true,
// 	// 	},
// 	// )
// }

// const jobApi = useJobsApi()
// const resp = jobApi('/jobs/')
// const resp = jobApijobs/')
// console.services('🚀 ~ resp)
const { jobList, isLoading, currentPage, isError, error } = useJobs()
console.log(
	'🚀 ~ data, pending:',
	jobList.value,
	isLoading.value,
	currentPage.value,
	isError,
)

const errorMessage = computed(() => {
	if (isError)
		return 'An error has occurred, please try again or reload the page'
	if (!jobList.value.length) return 'No available jobs found'
})
</script>

<template>
	<div>
		<FormFilter class="filter" />

		<GallerySkeleton v-if="isLoading" />

		<BaseErrorMessage
			v-else-if="error || !jobList.length"
			:message="errorMessage"
		/>

		<GalleryJobs v-else :job-list="jobList" />

		<footer class="pa-4 d-flex justify-center my-16">
			<!-- <v-btn :loading="pending" color="primary" @click="loadMoreJobs"> -->
			<v-btn :loading="isLoading" color="primary">
				Load More {{ isLoading }}
			</v-btn>
		</footer>
	</div>
</template>

<style lang="scss" scoped>
.filter {
	margin-bottom: 104px;
}
</style>
