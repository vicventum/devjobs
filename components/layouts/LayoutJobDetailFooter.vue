<script setup lang="ts"></script>

<template>
	<footer class="footer pa-10">
		<div class="footer__content">
			<h2 class="footer__job-title text-h2 mb-2">Senior Software Enginier</h2>
			<h3 class="footer__job-company text-body-1 text-light-darken-4">
				So Digital Inc.
			</h3>
		</div>

		<div class="footer__actions">
			<v-btn color="primary">Apply Now</v-btn>
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
}
</style>
