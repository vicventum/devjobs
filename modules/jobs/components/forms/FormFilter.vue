<script setup lang="ts">
/* 
import { useField, useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as zod from 'zod'

const validationSchema = toTypedSchema(
	zod.object({
		email: zod
			.string()
			.min(1, { message: 'This is required' })
			.email({ message: 'Must be a valid email' }),
		password: zod
			.string()
			.min(1, { message: 'This is required' })
			.min(8, { message: 'Too short' }),
	}),
)
const { handleSubmit, errors } = useForm({
	validationSchema,
})

const data = reactive({
	email: useField('email').value,
	password: useField('password').value,
})

watch(data, (value) => console.log('🚀 ~ value:', value))
const onSubmit = handleSubmit((values) => {
	console.log('🚀 ~ onSubmit ~ values:', values)
}) 
*/

// type Props = {
// 	inputTitle: string
// 	inputLocation: string
// 	inputRemote: boolean
// }

// const { inputTitle } = defineProps<Props>()
// const title = ref(inputTitle)

// import type { DataFilter } from '@/types'

type Props = {
	isLoading: boolean
}
type Emits = {
	submit: [dataFilter: DataFilter]
}

const dataFilter = reactive<DataFilter>({
	title: '',
	location: '',
	isRemote: false,
})

defineProps<Props>()
const emit = defineEmits<Emits>()

function onSubmit(data: DataFilter) {
	emit('submit', data)
}
</script>

<template>
	<v-sheet class="form-container" rounded>
		<v-form class="form" @submit.prevent="onSubmit(dataFilter)">
			<div class="d-flex align-center pa-4">
				<BaseInput
					v-model="dataFilter.title"
					placeholder="Filter by title, companies, expertise..."
					prepend-inner-icon="$mapMarker"
				/>
			</div>

			<v-divider vertical />

			<div class="d-flex align-center pa-4">
				<BaseInput
					v-model="dataFilter.location"
					placeholder="Filter by location..."
					prepend-inner-icon="$magnify"
				/>
			</div>

			<v-divider vertical />

			<div class="d-flex justify-space-between align-center pa-4">
				<BaseCheckbox v-model="dataFilter.isRemote" label="Remote Only" />

				<v-btn type="submit" :loading="isLoading" :disabled="isLoading">
					Search
				</v-btn>
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
