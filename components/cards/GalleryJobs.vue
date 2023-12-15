<script setup lang="ts">
import data from '@/assets/data/data.json'
const API_KEY = useRuntimeConfig().API_KEY
// console.log('🚀🚀 ~ API_KEY:', API_KEY, process.env.API_KEY)
// const res = await useFetch(
// 	'https://corsproxy.io/?https://findwork.dev/api/jobs',
// 	{
// 		headers: {
// 			Authorization: `Token c6bef58abe2eded3348921b287e5f5f27daf73f9`,
// 		},
// 	},
// )
// console.log('🚀 ~ res:', res, res.data)
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
