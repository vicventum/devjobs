<script setup lang="ts">
type Props = {
	isError: Boolean
	isLoading: Boolean
	isEmpty: Boolean
	errorMessage?: String
	loadingMessage?: String
	emptyMessage?: String
}

const {
	errorMessage = 'An error has occurred, please try again or reload the page',
	loadingMessage = 'Loading...',
	emptyMessage = 'There are no data to display',
	isError,
	isLoading,
	isEmpty,
} = defineProps<Props>()
console.log('💛 ~ isEmpty, isLoading, isError:', isEmpty, isLoading, isError)

const slots = useSlots()

const hasLoader = computed(() => !!slots.loader)
</script>

<template>
	<div>
		<template v-if="isError">
			<h2 class="text-center mt-6" data-testid="error-message">
				{{ errorMessage }}
			</h2>
		</template>
		<template v-else-if="isLoading && isEmpty">
			<h2 v-if="!hasLoader" class="text-center mt-6">
				{{ loadingMessage }}
			</h2>
			<slot v-else name="loader" />
		</template>
		<template v-else-if="isEmpty">
			<h2 class="text-center mt-6" data-testid="no-tasks-message">
				{{ emptyMessage }}
			</h2>
		</template>

		<div v-else>
			<slot />
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
