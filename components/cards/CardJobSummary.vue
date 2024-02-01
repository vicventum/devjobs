<script setup lang="ts">
type Props = {
	color: string
}
const props = defineProps<Props>()
</script>

<template>
	<article class="card">
		<div class="card__logo-square">
			{{ color }}
		</div>

		<div></div>
	</article>
</template>

<style lang="scss" scoped>
.card {
	--card-height: 140px;

	// display: grid;
	// grid-template-columns: repeat();
	height: var(--card-height);
	outline: 1px solid red;

	&__logo-square {
		width: var(--card-height);
		height: 100%;
		background-color: v-bind(color);
	}
}
</style>
