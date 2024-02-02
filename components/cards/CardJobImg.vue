<script setup lang="ts">
import type { Color } from '@/types'
const { color, size = '100%' } = defineProps<{
	src?: string | null
	text: string
	color: Color
	size?: string
}>()

const bgColor = ref(color)
function setRandomColor() {
	bgColor.value = utilRandomColor()
}
</script>

<template>
	<div class="img elevation-1-">
		<!-- <BaseImg :src="useSrc(logo)" alt="logo" :cover="false" /> -->
		<BaseImg
			v-if="src"
			class="img-inner"
			:src="src"
			:initials-text="text"
			:alt="`${text} logo`"
			@error="setRandomColor"
		/>
		<BaseAvatar
			v-else
			:initials-text="text"
			background="transparent"
			color="rgb(var(--v-theme-light))"
		/>
	</div>
</template>

<style lang="scss" scoped>
.img {
	width: v-bind(size);
	height: v-bind(size);
	padding: 4px;

	display: flex;
	place-items: center;
	place-content: center;

	// background: rgb(var(--v-theme-surface-bright));
	background: v-bind(bgColor);

	&,
	&-inner {
		border-radius: 1rem;
	}
}
</style>
