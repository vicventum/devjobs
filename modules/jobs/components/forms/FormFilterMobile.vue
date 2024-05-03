<script setup lang="ts">
import type { DataFilter } from '@/modules/jobs/types'

const dataFilter = defineModel<DataFilter>({
	default: {
		title: '',
		location: '',
		isRemote: false,
	},
})
type Props = {
	isLoading: boolean
}
type Emits = {
	submit: [dataFilter: DataFilter]
}
const { isLoading } = defineProps<Props>()
const emit = defineEmits<Emits>()

const modal = ref<boolean>(false)

watch(
	() => isLoading,
	(isLoading) => {
		if (!isLoading) modal.value = false
	},
)

function openModal() {
	modal.value = true
}

function onSubmit() {
	emit('submit', dataFilter.value)
	// modal.value = false
}
</script>

<template>
	<v-sheet class="form-container pa-4" rounded>
		<v-form class="form" @submit.prevent="onSubmit">
			<BaseInput
				v-model="dataFilter.title"
				placeholder="Filter by title, companies, expertise..."
			/>
			<v-btn
				class="form__filter-icon"
				icon="$filter"
				variant="plain"
				color="light-darken-4"
				size="small"
				@click="openModal"
			/>
			<v-btn
				class="form__submit-button"
				type="submit"
				icon="$magnify"
				size="small"
				:loading="isLoading"
				:disabled="isLoading"
			/>
		</v-form>

		<FormFilterMobileModal
			v-model:modal="modal"
			v-model:location="dataFilter.location"
			v-model:is-remote="dataFilter.isRemote"
			:is-loading="isLoading"
			@submit="onSubmit"
		/>
	</v-sheet>
</template>

<style lang="scss" scoped>
@use '@/assets/sass/config/settings.scss' as *;

.form {
	display: grid;
	grid-template-columns: 1fr auto auto;
	align-items: center;
	gap: 0.5rem;

	&__submit-button {
		border-radius: 4px;
	}

	&__row {
		display: flex;

		&--last {
			justify-content: space-between;
		}
	}
}
</style>
