<script lang="ts" setup></script>

<template>
	<JobDetailSummarySection class="skeleton">
		<template #image>
			<div class="skeleton__image-container">
				<v-skeleton-loader class="skeleton__image" type="image" />
			</div>
		</template>
		<v-skeleton-loader class="skeleton__content" type="heading" />
	</JobDetailSummarySection>
</template>

<style lang="scss" scoped>
.skeleton {
	&__image-container {
		width: 100%;
	}

	&__content {
		height: 100%;
	}
}
</style>
