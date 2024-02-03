<script setup lang="ts">
const {
	initialsText = '',
	background = 'primary',
	color = undefined,
	size = '40px',
	sizeText = 'var(--h2-size)',
} = defineProps<{
	initialsText: string | undefined
	background?: string
	color?: string
	size?: string
	sizeText?: string
}>()

const textColor = computed(() => {
	return color && `color: ${color}`
})
</script>

<template>
	<v-avatar class="avatar" :color="background" :size="size">
		<span class="avatar__text font-weight-bold">
			{{ utilGetFirstLetter(initialsText) }}
		</span>
	</v-avatar>
</template>

<style lang="scss" scoped>
.avatar {
	&__text {
		color: v-bind(color);
		font-size: v-bind(sizeText);
	}
}
</style>
