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
