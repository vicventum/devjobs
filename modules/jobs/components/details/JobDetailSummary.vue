<script setup lang="ts">
import { useDisplay } from 'vuetify'
import type { Color } from '@/modules/core/types'

type Props = {
	color: Color
	company: string
	urlApply: string
	urlCompany?: string
	logo?: string
	companyNumEmployees?: string
}
const { color } = defineProps<Props>()

const route = useRoute()
const fallbackColor = route.query.color as Color
const finalColor = ref(fallbackColor ?? color)

const { smAndUp } = useDisplay()

const isImgRounded = computed(() => (smAndUp.value ? undefined : true))
const avatarSize = computed(() => (smAndUp.value ? '100%' : '50px'))
const avatarTextSize = computed(() => (smAndUp.value ? '3.5rem' : undefined))
</script>

<template>
	<JobDetailSummaryWrapper :image-bg-color="finalColor">
		<template #image>
			<JobImg
				class="card__logo-img"
				:src="logo"
				:text="company"
				:color="finalColor"
				:rounded="isImgRounded"
			>
				<template #error>
					<BaseAvatar
						:text="company"
						:size="avatarSize"
						:size-text="avatarTextSize"
						background="transparent"
						color="rgb(var(--v-theme-light))"
					/>
				</template>
			</JobImg>
		</template>

		<template #data>
			<h2 class="text-h2 mb-2">{{ company }}</h2>
			<h3
				v-if="companyNumEmployees"
				class="card__number-employees text-body-1 text-light-darken-4"
			>
				<v-icon
					class="card__number-employees-icon"
					icon="$officeBuilding"
					size="small"
				/>
				{{ companyNumEmployees }} employees
			</h3>
			<!-- <h3 class="text-body-1 text-light-darken-4">{{ urlCompany }}</h3> -->
		</template>
		<template #actions>
			<v-btn color="primary" variant="tonal" :disabled="!urlCompany">
				Company Site
			</v-btn>
		</template>
	</JobDetailSummaryWrapper>
</template>

<style lang="scss" scoped>
.card {
	&__number-employees {
		display: flex;
		align-items: center;
		gap: 0.25rem;

		&-icon {
			margin-left: -3px;
		}
	}
}
</style>
