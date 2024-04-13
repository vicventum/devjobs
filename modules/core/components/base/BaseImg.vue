<script setup lang="ts">
type Props = {
	initialsText?: string
	sizeAvatar?: string
	sizeAvatarText?: string
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
	<v-img class="img" height="100" @error="errorLoadingImg">
		<template #placeholder>
			<div class="d-flex align-center justify-center fill-height">
				<v-progress-circular color="light-darken-2" indeterminate />
			</div>
		</template>
		<template #error>
			<!-- <v-img class="mx-auto" src="https://picsum.photos/40/40?image=232" /> -->
			<div v-if="initialsText" class="d-flex justify-center align-center">
				<BaseAvatar
					:initials-text="initialsText"
					background="transparent"
					color="rgb(var(--v-theme-light))"
					:size="sizeAvatar"
					:size-text="sizeAvatarText"
				/>
			</div>
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
