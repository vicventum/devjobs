<script setup lang="ts">
import type { Color } from '@/types'

const props = defineProps<{
	logo: string | null
	date: Date
	type: string | null
	title: string
	company: string
	location: string | null
	color: Color
}>()

const { toRelativeDate } = utilFormat()
const relativeDate = ref(toRelativeDate(props.date))
</script>

<template>
	<v-sheet class="card px-8 pt-12 pb-8" tag="article">
		<CardJobImg class="card__img" :src="logo" :text="company" :color="color" />

		<div class="card__content">
			<h3 class="card__time text-body-1 text-light-darken-4 mb-3">
				{{ relativeDate }}
				<span v-if="type">
					<span class="card__separator-point">•</span>
					{{ type }}
				</span>
			</h3>
			<h2 class="card__title text-h3 mb-3">{{ title }}</h2>
			<h3 class="card__company text-body-1 text-light-darken-4">
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
	cursor: pointer;

	transition-property: box-shadow, filter;
	transition-duration: 0.1s;
	transition-timing-function: ease-out;

	&:hover {
		filter: drop-shadow(0px 0px 1px rgb(var(--v-theme-primary)));
		// transform: scale(1.01);
	}

	&__img {
		position: absolute;
		left: 32px;
		top: -25px;
	}

	&__separator-point {
		margin: 0 8px;
		display: inline-block;
		transform: scale(2);
	}
}
</style>
