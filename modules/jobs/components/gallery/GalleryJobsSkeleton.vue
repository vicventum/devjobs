<script lang="ts" setup>
interface Props {
	items?: number
}
const { items = 9 } = defineProps<Props>()
</script>

<template>
	<section class="gallery">
		<CardJobSkeleton v-for="job in items" :key="job" />
	</section>
</template>

<style scoped>
.gallery {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(min(260px, 100%), 1fr));
	column-gap: 32px;
	row-gap: 64px;
}
</style>
