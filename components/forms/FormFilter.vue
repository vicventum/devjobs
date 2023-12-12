<script setup lang="ts"></script>

<template>
	<v-sheet class="form-container" rounded>
		<v-form class="form">
			<div class="d-flex align-center pa-4">
				<BaseInput
					placeholder="Filter by title, companies, expertise..."
					prepend-inner-icon="$mapMarker"
				/>
			</div>

			<v-divider vertical />

			<div class="d-flex align-center pa-4">
				<BaseInput
					placeholder="Filter by location..."
					prepend-inner-icon="$magnify"
				/>
			</div>

			<v-divider vertical />

			<div class="d-flex justify-space-between align-center pa-4">
				<BaseCheckbox label="Full Time Only" />
				<v-btn>Search</v-btn>
			</div>
		</v-form>
	</v-sheet>
</template>

<style scoped>
.form {
	display: grid;
	grid-template-columns: 40% auto 1fr auto 1fr;
}
</style>
