<script setup lang="ts">
type Props = {
	company: string
	date: Date
	keywords: string[]
	location: string | null
	isRemote: boolean
	source: string
	text: string
	title: string
	type: string | null
	urlApply: string
}
const props = defineProps<Props>()

const { toRelativeDate } = utilFormat()
const relativeDate = ref(toRelativeDate(props.date))
</script>

<template>
	<v-sheet class="pa-10" tag="main">
		<article class="card-info mb-10">
			<div class="card-info__content">
				<JobTime
					class="card-info__time mb-1"
					:relative-date="relativeDate"
					:type="type"
				/>
				<h1 class="text-h1 mb-2">{{ title }}</h1>

				<JobLocation class="mt-10" :location="location" :is-remote="isRemote" />
			</div>

			<div class="card-info__actions">
				<v-btn color="primary" :href="urlApply" target="_blank">
					Apply Now
				</v-btn>
			</div>
		</article>

		<article v-html="text" />
	</v-sheet>
</template>

<style lang="scss" scoped>
.card-info {
	display: flex;
	gap: 1rem;
	justify-content: space-between;
	align-items: center;
}
</style>
