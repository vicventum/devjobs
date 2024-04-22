<script setup lang="ts">
type Props = {
	src: string
	alt: string
}

// const { src = 'https://picsum.photos/40/40?image=232' } = defineProps<{
defineProps<Props>()
const emits = defineEmits(['error'])

const isErrorLoading = ref<boolean>(false)

function errorLoadingImg(): void {
	emits('error')
	isErrorLoading.value = true
}
</script>

<template>
	<v-img
		class="img"
		height="140"
		:src="src"
		:alt="alt"
		@error="errorLoadingImg"
	>
		<template #placeholder>
			<div class="d-flex align-center justify-center fill-height">
				<v-progress-circular color="light-darken-2" indeterminate />
			</div>
		</template>
		<template #error>
			<!-- <v-img class="mx-auto" src="https://picsum.photos/40/40?image=232" /> -->
			<slot name="error" />
		</template>
	</v-img>
</template>

<style lang="scss" scoped>
.img {
	/// ! DESTACADO: Se hacía para que funcionara el slot `#error`, pero lo que se necesita realmente es establecer una altura al elemento `v-img`(así se sobreescriba al final)
	// &:deep(.v-img__error) {
	// 	position: relative !important;
	// }
}
</style>
