<script setup lang="ts">
import type { Color } from '@/modules/jobs/types'

type Props = {
	src: string | null
	text: string
	color: Color
	size?: string
	rounded?: boolean
}
type Emits = {
	error: [fallbackColor: Color]
}

const { color, size = '100%', rounded = false } = defineProps<Props>()
const emit = defineEmits<Emits>()

const bgColor = ref(color)
const route = useRoute()
const fallbackColor = route.query.color as Color

function setRandomColor() {
	const randomColor = utilRandomColor()
	emit('error', randomColor)
	bgColor.value = fallbackColor ?? randomColor
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
			:alt="`${text} logo`"
			@error="setRandomColor"
		>
			<template #error>
				<slot name="error" />
			</template>
		</BaseImg>
		<slot v-else name="error" />
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
