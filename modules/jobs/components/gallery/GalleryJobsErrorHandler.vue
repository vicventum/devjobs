<script setup lang="ts">
type Props = {
	isError: boolean
	isLoading: boolean
	isEmpty: boolean
	errorMessage?: string
	loadingMessage?: string
	emptyMessage?: string
}

defineProps<Props>()
</script>

<template>
	<div>
		<ErrorHandler
			:is-loading="isLoading"
			:is-error="isError"
			:is-empty="isEmpty"
			:error-message="errorMessage"
			:loading-message="loadingMessage"
			:empty-message="emptyMessage"
		>
			<template #loader>
				<GalleryJobsSkeleton />
			</template>

			<slot />

			<GalleryJobsSkeleton
				v-if="isLoading && !isEmpty"
				class="my-16"
				:items="3"
			/>
		</ErrorHandler>
	</div>
</template>

<style lang="scss" scoped></style>
