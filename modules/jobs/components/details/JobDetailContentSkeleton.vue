<template>
	<v-sheet class="skeleton" tag="main">
		<JobDetailContentWrapper>
			<template #job-data>
				<v-skeleton-loader type="subtitle, heading, subtitle" />
			</template>

			<template #button>
				<v-skeleton-loader type="button" />
			</template>

			<template #job-content>
				<v-skeleton-loader
					v-for="n in 3"
					:key="n"
					class="skeleton__content"
					type="paragraph"
				/>
			</template>
		</JobDetailContentWrapper>
	</v-sheet>
</template>

<style lang="scss" scoped>
@use '@/assets/sass/config/settings.scss' as *;
.skeleton {
	&:deep(.v-skeleton-loader__heading),
	&:deep(.v-skeleton-loader__text),
	&:deep(.v-skeleton-loader__button) {
		margin-left: 0;
	}
	&:deep(.v-skeleton-loader__heading) {
		margin-top: 0;
	}

	&:deep(.v-skeleton-loader__button) {
		@media #{$sm-and-down} {
			max-width: initial !important;
		}
	}
}
</style>
