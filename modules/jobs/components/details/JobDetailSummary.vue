<script setup lang="ts">
// import type { Color } from '~/types'

type Props = {
	color: Color
	logo: string | null
	company: string
	urlApply: string
	urlCompany?: string
	companyNumEmployees: string | null
}
const props = defineProps<Props>()
</script>

<template>
	<JobDetailSummarySection :image-bg-color="color">
		<template #image>
			<JobImg
				class="card__logo-img"
				:src="logo"
				:text="company"
				:color="color"
				size-avatar="100%"
				size-avatar-text="3.5rem"
			/>
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
