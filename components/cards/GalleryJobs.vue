<script setup lang="ts">
// import data from '@/assets/data/data.json'
import type { JobData } from '@/types'

// let jobList: any
// ;(async () => {
// 	jobList = await jobsStore().fetchJobList()
// })()

const jobList = ref<JobData[]>(jobsStore().jobList)
// const jobList: any = []
</script>

<template>
	<div class="gallery">
		<section v-if="!jobList.length" class="gallery__no-data-message">
			<h2>No se han encontrado empleos disponibles</h2>
		</section>

		<template v-else>
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
		</template>
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
		text-align: center;
	}
}
</style>
