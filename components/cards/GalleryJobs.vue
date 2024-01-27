<script setup lang="ts">
// import data from '@/assets/data/data.json'
import type { JobData } from '@/types'

// let jobList: any
// ;(async () => {
// 	jobList = await jobsStore().fetchJobList()
// })()

// const jobList = ref<JobData[] | null>(jobsStore().jobList)
const { data: jobList, isError, isLoading } = toRefs(jobsStore().jobList)
watch(
	() => isLoading,
	() => {
		// console.log('🚀 ~ isLoading:', isLoading)
	},
	{
		immediate: true,
	},
)
// const jobList: any = []
</script>

<template>
	<div class="gallery">
		<template v-if="isLoading">
			<!-- {{ isLoading }} -->
			<!-- <v-skeleton-loader
				v-for="job in 9"
				:key="job"
				type="avatar, text, paragraph"
				height="220px"
			/> -->
		</template>

		<BaseErrorMessage
			v-if="!jobList?.length && !isError && !isLoading"
			class="gallery__no-data-message"
			message="No available jobs found"
		/>

		<!-- <template v-else>
			<CardJob
				v-for="job in jobList"
				:key="job.id"
				class="gallery__card"
				:logo="job.logo"
				:date="job.date"
				:type="job.type"
				:title="job.title"
				:company="job.company"
				:location="job.location"
				:color="job.color"
			/>
		</template> -->
	</div>
</template>

<style lang="scss" scoped>
.gallery {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	column-gap: 32px;
	row-gap: 64px;

	&__no-data-message {
		grid-column: 1/-1;
	}
}
</style>
