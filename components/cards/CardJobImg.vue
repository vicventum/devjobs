<script setup lang="ts">
import type { Color } from '@/types'
const {
	color,
	size = '100%',
	rounded = false,
} = defineProps<{
	src?: string | null
	text: string
	color: Color
	size?: string
	rounded?: boolean
	sizeAvatar?: string
	sizeAvatarText?: string
}>()

const bgColor = ref(color)
function setRandomColor() {
	bgColor.value = utilRandomColor()
}
</script>

<template>
	<div class="job-img elevation-1-" :class="{ 'job-img--rounded': rounded }">
		<!-- <BaseImg :src="useSrc(logo)" alt="logo" :cover="false" /> -->
		<BaseImg
			v-if="src"
			class="job-img__image"
			:class="{ 'job-img__image--rounded': rounded }"
			:src="src"
			:initials-text="text"
			:alt="`${text} logo`"
			:size-avatar="sizeAvatar"
			:size-avatar-text="sizeAvatarText"
			@error="setRandomColor"
		/>
		<BaseAvatar
			v-else
			class="job-img__avatar"
			:class="{ 'job-img__avatar--rounded': rounded }"
			:initials-text="text"
			background="transparent"
			color="rgb(var(--v-theme-light))"
			:size="sizeAvatar"
			:size-text="sizeAvatarText"
		/>
	</div>
</template>

<style lang="scss" scoped>
.job-img {
	width: v-bind(size);
	height: v-bind(size);
	padding: 4px;
	background: v-bind(bgColor);
	// background: rgb(var(--v-theme-surface-bright));

	&,
	&__image:deep(.v-img__error) {
		display: flex;
		place-items: center;
		place-content: center;
	}

	&--rounded,
	&__image--rounded {
		border-radius: 1rem;
	}
}
</style>
