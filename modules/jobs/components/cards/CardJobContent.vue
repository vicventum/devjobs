<script setup lang="ts">
type Props = {
	company: string
	date: Date
	keywords: string[]
	location: string | null
	remote: boolean
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
				<h4 class="text-body-1 text-light-darken-4 mb-1">
					{{ relativeDate }}
					<span v-if="type">
						<BaseSeparatorPoint />
						{{ type }}
					</span>
				</h4>
				<h1 class="text-h1 mb-2">{{ title }}</h1>
				<h3 class="card-info__location text-h4 text-primary">{{ location }}</h3>
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
