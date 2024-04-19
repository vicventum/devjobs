<template>
	<v-sheet class="skeleton pa-10" tag="main">
		<article class="skeleton-info mb-10">
			<div class="skeleton-info__content">
				<v-skeleton-loader type="subtitle, heading" />
			</div>

			<div class="skeleton-info__actions">
				<v-skeleton-loader type="button" />
			</div>
		</article>

		<v-skeleton-loader
			v-for="n in 2"
			:key="n"
			class="skeleton__content"
			type="paragraph"
		/>
	</v-sheet>
</template>

<style lang="scss" scoped>
.skeleton-info {
	display: grid;
	grid-template-columns: 1fr 15%;
}
</style>
