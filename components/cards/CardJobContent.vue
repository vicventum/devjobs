<script setup lang="ts"></script>

<template>
	<v-sheet class="pa-10" tag="main">
		<article class="card-info">
			<div class="card-info__content">
				<h4 class="text-body-1 text-light-darken-4 mb-1">
					<!-- {{ relativeDate }} -->
					1w ago
					<span v-if="true">
						<BaseSeparatorPoint />
						Part Time
					</span>
				</h4>
				<h1 class="text-h1 mb-2">Senior Software Enginier</h1>
				<h3 class="card-info__location text-h4 text-primary">United Kingdom</h3>
			</div>

			<div class="card-info__actions">
				<v-btn color="primary">Apply Now</v-btn>
			</div>
		</article>
	</v-sheet>
</template>

<style lang="scss" scoped>
.card-info {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
</style>
