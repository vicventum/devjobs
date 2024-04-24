<script setup lang="ts">
import { utilGetFirstLetter } from '@/modules/core/utils/util-get-first-letter'

type Props = {
	text: string
	background?: string
	color?: string
	size?: string
	sizeText?: string
}
const {
	background = 'primary',
	size = '40px',
	sizeText = 'var(--h2-size)',
} = defineProps<Props>()

// const textColor = computed(() => color && `color: ${color}`)
</script>

<template>
	<v-avatar class="avatar" :color="background" :size="size">
		<span class="avatar__text font-weight-bold">
			{{ utilGetFirstLetter(text) }}
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
