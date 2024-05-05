<script setup lang="ts">
import type { Color } from '@/modules/core/types'

type Props = {
	imageBgColor?: Color
}
const props = defineProps<Props>()
</script>

<template>
	<v-sheet class="summary" tag="article">
		<!--  v-if="smAndUp" -->
		<div class="summary__logo-container">
			<slot name="image" />
		</div>

		<div class="summary__content px-10 pb-4 pt-10 py-sm-4">
			<div class="summary__data">
				<slot name="data" />
			</div>
			<div class="summary__actions">
				<slot name="actions" />
			</div>
		</div>
	</v-sheet>
</template>

<style lang="scss" scoped>
@use '@/assets/sass/config/settings.scss' as *;

.summary {
	--summary-height: 140px;
	position: relative;

	@media #{$sm-and-up} {
		height: var(--summary-height);
		display: grid;
		grid-template-columns: auto 1fr;
	}

	@media #{$sm-and-up} {
		overflow: hidden;
	}

	&__logo-container {
		--logo-size: 50px;
		position: absolute;
		top: 0;
		left: 50%;
		transform: translateX(-50%) translateY(-50%);

		width: var(--logo-size);
		height: var(--logo-size);
		background-color: v-bind(imageBgColor);

		display: flex;
		place-content: center;
		border-radius: 1rem;
		// border-top-left-radius: 4px;
		// border-bottom-left-radius: 4px;

		@media #{$sm-and-up} {
			--logo-size: 100%;
			position: static;
			width: var(--summary-height);
			border-radius: initial;
			transform: none;
		}
	}

	&__content {
		height: 100%;
		display: flex;
		gap: 2rem;
		flex-direction: column;
		align-items: center;

		@media #{$sm-and-up} {
			justify-content: space-between;
			flex-direction: row;
			gap: 1rem;
		}
	}

	&__data {
		text-align: center;

		@media #{$sm-and-up} {
			text-align: revert;
		}
	}
}
</style>
