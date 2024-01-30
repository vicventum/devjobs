<script lang="ts" setup></script>

<template>
	<section class="gallery">
		<v-skeleton-loader
			v-for="job in 9"
			:key="job"
			type="avatar, text, paragraph"
			height="220px"
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
