<script setup lang="ts">
type Props = {
	color: string
}
const props = defineProps<Props>()
</script>

<template>
	<v-sheet class="card" tag="article">
		<div class="card__logo-square">
			{{ color }}
		</div>

		<div class="card__content pa-10">
			<div>
				<h2 class="text-h2">Scoot</h2>
				<h3 class="text-body-1 text-light-darken-4">scoot.com</h3>
			</div>

			<div>
				<v-btn color="primary" variant="tonal">Company Site</v-btn>
			</div>
		</div>
	</v-sheet>
</template>

<style lang="scss" scoped>
.card {
	--card-height: 140px;

	display: grid;
	grid-template-columns: auto 1fr;
	height: var(--card-height);

	// outline: 1px solid red;

	&__logo-square {
		width: var(--card-height);
		height: 100%;
		background-color: v-bind(color);
	}

	&__content {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
}
</style>
