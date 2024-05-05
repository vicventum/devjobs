<script lang="ts" setup></script>

<template>
	<JobDetailSummaryWrapper class="skeleton">
		<template #image>
			<div class="skeleton__image">
				<v-skeleton-loader type="image" />
			</div>
		</template>

		<template #data>
			<div class="skeleton__data">
				<v-skeleton-loader type="heading, subtitle" width="180px" />
			</div>
		</template>

		<template #actions>
			<div class="skeleton__actions">
				<v-skeleton-loader type="button" width="160px" max-width="initial" />
			</div>
		</template>
	</JobDetailSummaryWrapper>
</template>

<style lang="scss" scoped>
@use '@/assets/sass/config/settings.scss' as *;

.skeleton {
	&:deep(.v-skeleton-loader__heading),
	&:deep(.v-skeleton-loader__text),
	&:deep(.v-skeleton-loader__button) {
		margin-left: 0;
		margin-right: 0;
	}

	&__image {
		&:deep(.v-skeleton-loader),
		&:deep(.v-skeleton-loader__image) {
			border-radius: 1rem;

			@media #{$sm-and-up} {
				border-radius: initial;
			}
		}
		&:deep(.v-skeleton-loader__image) {
			--img-size: 50px;

			margin: 0;
			width: var(--img-size);
			max-width: var(--img-size);
			height: var(--img-size);
			max-height: var(--img-size);

			@media #{$sm-and-up} {
				--img-size: 150px;
			}
		}
	}
	&__data {
		&:deep(.v-skeleton-loader__heading) {
			@media #{$xs-only} {
				margin-top: 0;
			}
		}
		&:deep(.v-skeleton-loader__subtitle) {
			max-width: initial;
		}
	}
	&__actions {
		&:deep(.v-skeleton-loader__button) {
			max-width: initial;
			margin-top: 0;
			margin-bottom: 0;
		}
	}
}
</style>
