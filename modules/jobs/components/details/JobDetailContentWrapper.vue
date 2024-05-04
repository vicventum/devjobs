<script setup lang="ts"></script>

<template>
	<v-sheet class="pa-8 pa-sm-10" tag="main">
		<article class="wrapper-info mb-10">
			<div class="wrapper-info__content">
				<slot name="job-data" />
			</div>

			<div class="wrapper-info__actions mt-10 mt-sm-0">
				<slot name="button" />
			</div>
		</article>

		<div class="wrapper-content">
			<slot name="job-content" />
		</div>
	</v-sheet>
</template>

<style lang="scss" scoped>
@use '@/assets/sass/config/settings.scss' as *;

.wrapper-info {
	display: flex;
	flex-direction: column;
	gap: 1rem;
	justify-content: space-between;

	@media #{$sm-and-up} {
		flex-direction: row;
		align-items: center;
	}

	&__content {
		width: 100%;
	}

	&__apply-btn {
		width: 100%;

		@media #{$sm-and-up} {
			width: initial;
		}
	}
}

.wrapper-content {
	overflow-x: overlay;

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
