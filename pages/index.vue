<script setup lang="ts">
// ;(async () => {
// 	await jobsStore().fetchJobList()
// })()
const { isError, isLoading } = toRefs(jobsStore().jobList)
// const jobList = jobsStore().jobList
// console.log('🟢 ~ isLoading:', jobList.isLoading.value)
watch(
	() => isLoading.value,
	() => {
		console.log('🟢🟢 isLoading:', isLoading.value)
	},
	{
		immediate: true,
	},
)

await jobsStore().fetchJobList()
// let isLoad = ref(false)
async function loadMoreJobs() {
	await jobsStore().loadMoreJobs()
	// const BASE_PATH = `/jobs/?page=${7}`
	// const { data, error, pending } = await useMyFetch(
	// 	BASE_PATH,
	// 	// {
	// 	// 	lazy: true,
	// 	// },
	// )
	// isLoad = toRef(pending)
	// watch(
	// 	() => pending.value,
	// 	() => {
	// 		console.log('🟠 ~ pending:', pending.value, isLoad.value)
	// 		// isLoad.value = pending.value
	// 	},
	// 	{
	// 		immediate: true,
	// 	},
	// )
}
</script>

<template>
	<div>
		<FormFilter class="filter" />
		<BaseErrorMessage
			v-if="isError"
			message="An error has occurred, please try again or reload the page"
		/>
		<GalleryJobs />

		<footer class="pa-4 d-flex justify-center my-16">
			{{ isLoading }}
			<v-btn :loading="isLoading" color="primary" @click="loadMoreJobs">
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
