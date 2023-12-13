<script setup lang="ts">
import data from '@/assets/data/data.json'
</script>

<template>
	<div class="gallery">
		<CardJob
			v-for="job in data"
			:key="job.id"
			class="gallery__card"
			logo="/assets/img/desktop/logo.svg"
			:date="job.postedAt"
			:type="job.contract"
			:title="job.position"
			:company="job.company"
			:location="job.location"
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
