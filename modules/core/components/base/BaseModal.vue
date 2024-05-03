<script setup lang="ts">
const modal = defineModel<boolean>({ required: true })
</script>

<template>
	<v-dialog v-model="modal" class="modal" max-width="500px">
		<slot />
	</v-dialog>
</template>

<style lang="scss" scoped>
.modal {
	&:deep(.v-overlay__scrim) {
		background: rgb(var(--v-theme-on-surface-bright));
		opacity: 0.5;
	}
}
</style>
