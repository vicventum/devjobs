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

defineProps<Props>()
const emit = defineEmits<Emits>()

function onSubmit(data: DataFilter) {
	emit('submit', data)
}
</script>

<template>
	<v-sheet class="form-container" rounded>
		<v-form class="form" @submit.prevent="onSubmit(dataFilter)">
			<div class="form__row pa-4">
				<BaseInput
					v-model="dataFilter.title"
					placeholder="Filter by title, companies, expertise..."
					prepend-inner-icon="$magnify"
					clearable
				/>
			</div>

			<v-divider vertical />

			<div class="form__row pa-4">
				<BaseInput
					v-model="dataFilter.location"
					placeholder="Filter by location..."
					prepend-inner-icon="$mapMarker"
					clearable
				/>
			</div>

			<v-divider vertical />

			<div class="form__row form__row--last pa-4">
				<BaseCheckbox v-model="dataFilter.isRemote" label="Remote Only" />

				<v-btn type="submit" :loading="isLoading" :disabled="isLoading">
					Search
				</v-btn>
			</div>
		</v-form>
	</v-sheet>
</template>

<style lang="scss" scoped>
@use '@/assets/sass/config/settings.scss' as *;

.form {
	display: grid;
	grid-template-columns: 1fr auto 1fr auto 1fr;

	@media #{$lg-and-up} {
		grid-template-columns: 40% auto 1fr auto 1fr;
	}

	&__row {
		display: flex;
		align-items: center;

		&--last {
			justify-content: space-between;
		}
	}
}
</style>
