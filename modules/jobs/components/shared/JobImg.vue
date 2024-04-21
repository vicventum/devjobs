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
	error: []
}

const { size = '100%', rounded = false } = defineProps<Props>()
const emit = defineEmits<Emits>()

function errorLoadingImage() {
	emit('error')
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
			@error="errorLoadingImage"
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
	background: v-bind(color);
	// padding: 4px;
	// background: rgb(var(--v-theme-surface-bright));

	&,
	&__image:deep(.v-img__error) {
		display: flex;
		place-items: center;
		place-content: center;
	}

	&__image {
		// border: 1px solid v-bind(color);
	}

	&--rounded,
	&__image--rounded {
		border-radius: 1rem;
	}
}
</style>
