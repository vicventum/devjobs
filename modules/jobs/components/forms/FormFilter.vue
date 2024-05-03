<script setup lang="ts">
import { useDisplay } from 'vuetify'
import type { DataFilter } from '@/modules/jobs/types'

type Props = {
	isLoading: boolean
}
type Emits = {
	submit: [dataFilter: DataFilter]
}
defineProps<Props>()
const emit = defineEmits<Emits>()

const dataFilter = reactive<DataFilter>({
	title: '',
	location: '',
	isRemote: false,
})

function onSubmit(data: DataFilter) {
	emit('submit', data)
}

const { smAndDown } = useDisplay()
</script>

<template>
	<FormFilterMobile
		v-if="smAndDown"
		v-model="dataFilter"
		:is-loading="isLoading"
		@submit="onSubmit"
	/>
	<FormFilterDesktop
		v-else
		v-model="dataFilter"
		:is-loading="isLoading"
		@submit="onSubmit"
	/>
</template>

<style lang="scss" scoped></style>
