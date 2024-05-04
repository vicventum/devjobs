<script setup lang="ts">
import * as utilFormat from '@/modules/core/utils/util-format'

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

const relativeDate = ref(utilFormat.toRelativeDate(props.date))
</script>

<template>
	<JobDetailContentWrapper>
		<template #job-data>
			<JobTime
				class="detail-info__time mb-1"
				:relative-date="relativeDate"
				:type="type"
			/>
			<h1 class="text-h1 mb-2">{{ title }}</h1>

			<JobLocation :location="location" :is-remote="isRemote" />
		</template>

		<template #button>
			<v-btn
				class="detail-info__apply-btn"
				color="primary"
				:href="urlApply"
				target="_blank"
			>
				Apply Now
			</v-btn>
		</template>

		<template #job-content>
			<article class="detail-content" v-html="text" />
		</template>
	</JobDetailContentWrapper>
</template>

<style lang="scss" scoped>
@use '@/assets/sass/config/settings.scss' as *;

.detail-info {
	display: flex;
	flex-direction: column;
	gap: 1rem;
	justify-content: space-between;

	@media #{$sm-and-up} {
		flex-direction: row;
		align-items: center;
	}

	&__apply-btn {
		width: 100%;

		@media #{$sm-and-up} {
			width: initial;
		}
	}
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
