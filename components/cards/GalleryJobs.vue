<script setup lang="ts">
// import data from '@/assets/data/data.json'
import type { JobData } from '@/types'
const jobList: JobData[] = jobsStore().jobList
</script>

<template>
	<div class="gallery">
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
		<!-- :logo="job.logo" -->
	</div>
</template>

<style lang="scss" scoped>
.gallery {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	column-gap: 32px;
	row-gap: 64px;
}
</style>
