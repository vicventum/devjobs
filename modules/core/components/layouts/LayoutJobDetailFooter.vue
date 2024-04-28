<script setup lang="ts">
type Props = {
	company: string
	title: string
	urlApply: string
}
const props = defineProps<Props>()
</script>

<template>
	<footer class="footer pa-10">
		<div class="footer__content">
			<h2 class="footer__job-title text-h2 mb-2">{{ title }}</h2>
			<h3 class="footer__job-company text-body-1 text-light-darken-4">
				{{ company }}
			</h3>
		</div>

		<div class="footer__actions">
			<v-btn v-if="urlApply" color="primary" :href="urlApply" target="_blank">
				Apply Now
			</v-btn>
		</div>
	</footer>
</template>

<style lang="scss" scoped>
.footer {
	max-width: var(--job-detail-container-width);
	margin-left: auto;
	margin-right: auto;

	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 1rem;
}
</style>
