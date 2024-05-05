<script setup lang="ts">
type Props = {
	isLoading: boolean
}
type Emits = {
	submit: []
}
defineProps<Props>()
const emit = defineEmits<Emits>()

const modal = defineModel<boolean>('modal', { required: true })
const location = defineModel<string>('location', { required: true })
const isRemote = defineModel<boolean>('isRemote', { required: true })

function onSubmit() {
	emit('submit')
}
</script>

<template>
	<BaseModal v-model="modal">
		<v-sheet class="modal" rounded>
			<v-form @submit.prevent="onSubmit">
				<BaseInput
					v-model="location"
					class="pa-4"
					placeholder="Filter by location..."
					prepend-inner-icon="$mapMarker"
				/>

				<v-divider />

				<div class="modal__content pt-4 pb-6 px-6">
					<BaseCheckbox v-model="isRemote" label="Remote Only" />
					<v-btn type="submit" :loading="isLoading" :disabled="isLoading">
						Search
					</v-btn>
				</div>
			</v-form>
		</v-sheet>
	</BaseModal>
</template>

<style lang="scss" scoped>
.modal {
	&__content {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
}
</style>
