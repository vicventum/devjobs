<script setup lang="ts">
type Props = {
	isError: Boolean
	isLoading: Boolean
	isEmpty: Boolean
	errorMessage?: String
	loadingMessage?: String
	emptyMessage?: String
}

defineProps<Props>()
</script>

<template>
	<div>
		<ErrorHandler
			:is-loading="isLoading"
			:is-error="isError"
			:is-empty="isEmpty"
		>
			<template #loader>
				<div>
					<JobDetailSummarySkeleton class="mb-8" />
					<JobDetailContentSkeleton class="mb-8" />
				</div>
			</template>

			<slot />
		</ErrorHandler>
	</div>
</template>

<style lang="scss" scoped></style>
