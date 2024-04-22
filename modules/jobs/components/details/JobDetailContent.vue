<script setup lang="ts">
type Props = {
	date: Date
	isRemote: boolean
	text: string
	title: string
	urlApply: string
	type?: string
	location?: string
}
const props = defineProps<Props>()

const { toRelativeDate } = utilFormat()
const relativeDate = ref(toRelativeDate(props.date))
</script>

<template>
	<v-sheet class="pa-10" tag="main">
		<article class="detail-info mb-10">
			<div class="detail-info__content">
				<JobTime
					class="detail-info__time mb-1"
					:relative-date="relativeDate"
					:type="type"
				/>
				<h1 class="text-h1 mb-2">{{ title }}</h1>

				<JobLocation :location="location" :is-remote="isRemote" />
			</div>

			<div class="detail-info__actions">
				<v-btn color="primary" :href="urlApply" target="_blank">
					Apply Now
				</v-btn>
			</div>
		</article>

		<article class="detail-content" v-html="text" />
	</v-sheet>
</template>

<style lang="scss" scoped>
.detail-info {
	display: flex;
	gap: 1rem;
	justify-content: space-between;
	align-items: center;
}

.detail-content {
	&:deep(h1, h2, h3) {
		margin-top: 1.5rem;
		margin-bottom: 1rem;
	}
	&:deep(li) {
		margin-bottom: 0.3rem !important;
	}
	&:deep(p) {
		margin-bottom: 0.5rem !important;
	}
	&:deep(br) {
		display: block;
		margin-top: 0.5rem !important;
		margin-bottom: 0.5rem !important;
	}
}
</style>
