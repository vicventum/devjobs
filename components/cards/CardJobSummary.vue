<script setup lang="ts">
import type { Color } from '~/types'

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
	<v-sheet class="card" tag="article">
		<div class="card__logo-container">
			<CardJobImg
				class="card__logo-img"
				:src="logo"
				:text="company"
				:color="color"
			/>
		</div>

		<div class="card__content px-10 py-4">
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
				<v-btn v-if="urlCompany" color="primary" variant="tonal">
					Company Site
				</v-btn>
			</div>
		</div>
	</v-sheet>
</template>

<style lang="scss" scoped>
.card {
	--card-height: 140px;

	display: grid;
	grid-template-columns: auto 1fr;
	height: var(--card-height);

	overflow: hidden;

	&__logo-container {
		width: var(--card-height);
		height: 100%;
		background-color: v-bind(color);

		display: flex;
		place-content: center;
		// border-top-left-radius: 4px;
		// border-bottom-left-radius: 4px;
	}

	&__content {
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
