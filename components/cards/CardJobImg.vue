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
}>()

const bgColor = ref(color)
function setRandomColor() {
	bgColor.value = utilRandomColor()
}
</script>

<template>
	<div class="job-img elevation-1-">
		<!-- <BaseImg :src="useSrc(logo)" alt="logo" :cover="false" /> -->
		<BaseImg
			v-if="src"
			class="job-img__image"
			:class="{ 'job-img__image--rounded': rounded }"
			:src="src"
			:initials-text="text"
			:alt="`${text} logo`"
			@error="setRandomColor"
		/>
		<BaseAvatar
			v-else
			class="job-img__avatar"
			:class="{ 'job-img__avatar--rounded': rounded }"
			:initials-text="text"
			background="transparent"
			color="rgb(var(--v-theme-light))"
		/>
	</div>
</template>

<style lang="scss" scoped>
.job-img {
	width: v-bind(size);
	height: v-bind(size);
	padding: 4px;

	display: flex;
	place-items: center;
	place-content: center;

	// background: rgb(var(--v-theme-surface-bright));
	background: v-bind(bgColor);

	&__avatar--rounded,
	&__image--rounded {
		border-radius: 1rem;
	}
}
</style>
