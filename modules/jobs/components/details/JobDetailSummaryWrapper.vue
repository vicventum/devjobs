<script setup lang="ts">
import type { Color } from '@/modules/core/types'

type Props = {
	imageBgColor?: Color
}
const props = defineProps<Props>()
</script>

<template>
	<v-sheet class="summary" tag="article">
		<div class="summary__logo-container">
			<slot name="image" />
		</div>

		<div class="summary__content px-10 py-4">
			<slot />
		</div>
	</v-sheet>
</template>

<style lang="scss" scoped>
.summary {
	--summary-height: 140px;

	display: grid;
	grid-template-columns: auto 1fr auto;
	height: var(--summary-height);

	overflow: hidden;

	&__logo-container {
		width: var(--summary-height);
		height: 100%;
		background-color: v-bind(imageBgColor);

		display: flex;
		place-content: center;
		// border-top-left-radius: 4px;
		// border-bottom-left-radius: 4px;
	}
}
</style>
