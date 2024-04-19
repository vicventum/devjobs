<script setup lang="ts">
type Props = {
	relativeDate: string
	type: string | null
	title: string
	company: string
}

defineProps<Props>()
</script>

<template>
	<div class="job-content">
		<JobTime
			class="job-content__time mb-3"
			:relative-date="relativeDate"
			:type="type"
		/>
		<h2 class="job-content__title text-h3 mb-3">{{ title }}</h2>
		<h3 class="job-content__company text-body-1 text-light-darken-4">
			{{ company }}
		</h3>
	</div>
</template>

<style lang="scss" scoped>
.job-content {
	&__title {
		overflow: hidden;
	}
}
</style>
