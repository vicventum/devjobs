<script setup lang="ts">
const props = defineProps<{
	logo: string
	date: string
	type: string
	title: string
	company: string
	location: string
}>()
</script>

<template>
	<v-sheet class="card px-8 pt-12 pb-8" tag="article">
		<div class="card__img">
			<BaseImg :src="useSrc(logo)" alt="logo" :cover="false" />
		</div>

		<div class="card__content">
			<h3 class="card__time text-body-1 text-light-darken-3 mb-3">
				{{ date }} . {{ type }}
			</h3>
			<h2 class="card__title text-h3 mb-3">{{ title }}</h2>
			<h3 class="card__company text-body-1 text-light-darken-3">
				{{ company }}
			</h3>
		</div>

		<footer class="card__actions mt-10">
			<h4 class="card__location text-h4 text-primary">{{ location }}</h4>
		</footer>
	</v-sheet>
</template>

<style lang="scss">
.card {
	position: relative;

	&__img {
		position: absolute;
		left: 32px;
		top: -25px;
		width: 50px;
		height: 50px;
		padding: 4px;

		display: flex;
		place-items: center;

		background: rgb(var(--v-theme-primary));

		border-radius: 1rem;
	}

	&__time {
		// @extend .text-h1 !optional;
	}
}
</style>
