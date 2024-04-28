<script setup lang="ts">
import type { Color } from '@/modules/core/types'
// import { useConstants } from '@/modules/core/constants/use-constants'
import { DEFAULT_JOB_COLOR } from '@/modules/core/constants'
import * as utilFormat from '@/modules/core/utils/util-format'

type Props = {
	id: string
	color: Color
	date: Date
	title: string
	company: string
	isRemote: boolean
	type?: string
	location?: string
	logo?: string
}
type Emits = {
	'error-loading-image': [id: string]
}
const { id, color, logo, date } = defineProps<Props>()
const emit = defineEmits<Emits>()

const relativeDate = ref(utilFormat.toRelativeDate(date))

// const { DEFAULT_JOB_COLOR } = useConstants()
const finalColor = ref(logo ? DEFAULT_JOB_COLOR : color)

function setOriginalColor() {
	emit('error-loading-image', id)
	finalColor.value = color
}
</script>

<template>
	<v-sheet class="card px-8 pt-12 pb-8" tag="article">
		<JobImg
			class="card__img"
			:src="logo"
			:text="company"
			:color="finalColor"
			size="50px"
			rounded
			@error="setOriginalColor"
		>
			<template #error>
				<BaseAvatar
					:text="company"
					size="50px"
					background="transparent"
					color="rgb(var(--v-theme-light))"
				/>
			</template>
		</JobImg>

		<CardJobContent
			:relative-date="relativeDate"
			:type="type"
			:title="title"
			:company="company"
		/>

		<JobLocation class="mt-10" :location="location" :is-remote="isRemote" />
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

	&__img {
		position: absolute;
		left: 32px;
		top: -25px;
	}
}
</style>
