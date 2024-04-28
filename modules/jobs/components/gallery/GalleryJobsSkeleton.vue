<script lang="ts" setup>
interface Props {
	items?: number
}
const { items = 9 } = defineProps<Props>()
</script>

<template>
	<section class="gallery">
		<v-skeleton-loader
			v-for="job in items"
			:key="job"
			type="avatar, text, paragraph"
			height="270px"
		/>
	</section>
</template>

<style scoped>
.gallery {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	column-gap: 32px;
	row-gap: 64px;
}
</style>
