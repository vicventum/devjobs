<script setup lang="ts"></script>

<template>
	<v-sheet class="card px-8 pt-12 pb-8" tag="article">
		<div class="card__img">
			<slot name="img" />
		</div>

		<div class="card__content">
			<slot name="content" />
		</div>

		<div class="card__footer mt-10">
			<slot name="footer" />
		</div>
	</v-sheet>
</template>

<style lang="scss" scoped>
.card {
	position: relative;
	cursor: pointer;

	transition-property: box-shadow, filter;
	transition-duration: 0.1s;
	transition-timing-function: ease-out;

	&:hover {
		filter: drop-shadow(0px 0px 1px rgb(var(--v-theme-primary)));
		// transform: scale(1.01);
	}

	// ? Aplica estilos a slot en sí
	// &__img:deep(> *) {
	&__img {
		position: absolute;
		left: 32px;
		top: -25px;
	}
}
</style>
