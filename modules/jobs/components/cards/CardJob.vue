<script setup lang="ts">
// import type { Color } from '@/types'

type Props = {
	logo: string | null
	date: Date
	type: string | null
	title: string
	company: string
	location: string | null
	color: Color
	isRemote: boolean
}
type Emits = {
	errorLoadingImg: [fallbackColor: Color]
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const { toRelativeDate } = utilFormat()
const relativeDate = ref(toRelativeDate(props.date))
</script>

<template>
	<v-sheet class="card px-8 pt-12 pb-8" tag="article">
		<JobImg
			class="card__img"
			:src="logo"
			:text="company"
			:color="color"
			size="50px"
			rounded
			@error="(fallbackColor) => emit('errorLoadingImg', fallbackColor)"
		/>

		<CardJobContent
			:relative-date="relativeDate"
			:type="type"
			:title="title"
			:company="company"
		/>

		<JobLocation class="mt-10" :location="location" :is-remote="isRemote" />
	</v-sheet>
</template>

<style lang="scss" scoped>
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
}
</style>
