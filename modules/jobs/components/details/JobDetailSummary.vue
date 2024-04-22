<script setup lang="ts">
// import type { Color } from '~/types'

type Props = {
	color: Color
	company: string
	urlApply: string
	urlCompany?: string
	logo?: string
	companyNumEmployees?: string
}
const props = defineProps<Props>()

const route = useRoute()
const fallbackColor = route.query.color as Color
const finalColor = ref(fallbackColor ?? props.color)
</script>

<template>
	<JobDetailSummarySection :image-bg-color="finalColor">
		<template #image>
			<JobImg
				class="card__logo-img"
				:src="logo"
				:text="company"
				:color="finalColor"
			>
				<template #error>
					<BaseAvatar
						:text="company"
						size="100%"
						size-text="3.5rem"
						background="transparent"
						color="rgb(var(--v-theme-light))"
					/>
				</template>
			</JobImg>
		</template>

		<template #default>
			<div class="card__content">
				<div>
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
				</div>
				<div>
					<v-btn color="primary" variant="tonal" :disabled="!urlCompany">
						Company Site
					</v-btn>
				</div>
			</div>
		</template>
	</JobDetailSummarySection>
</template>

<style lang="scss" scoped>
.card {
	&__content {
		height: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

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
