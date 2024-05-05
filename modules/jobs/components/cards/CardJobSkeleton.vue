<script setup lang="ts"></script>

<template>
	<CardJobWrapper class="skeleton">
		<template #img>
			<v-skeleton-loader class="skeleton__img" type="avatar" />
		</template>

		<template #content>
			<v-skeleton-loader type="paragraph" />
		</template>

		<template #footer>
			<v-skeleton-loader type="text" />
		</template>
	</CardJobWrapper>
</template>

<style lang="scss" scoped>
.skeleton {
	height: 240px;

	&__img {
		&,
		&:deep(.v-skeleton-loader__avatar) {
			border-radius: 1rem;
		}

		&:deep(.v-skeleton-loader__avatar) {
			--size: 50px;

			margin: 0;
			width: var(--size);
			max-width: var(--size);
			height: var(--size);
			max-height: var(--size);
		}
	}
	&:deep(.v-skeleton-loader__text) {
		margin-left: 0;
	}
}
</style>
