<script setup lang="ts">
import type { HexadecimalColor } from '@/types'

const props = defineProps<{
	logo: string | null
	date: Date
	type: string | null
	title: string
	company: string
	location: string | null
	color: HexadecimalColor
}>()
</script>

<template>
	<v-sheet class="card px-8 pt-12 pb-8" tag="article">
		<CardJobImg class="card__img" :src="logo" :text="company" :color="color" />

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
	}
}
</style>
