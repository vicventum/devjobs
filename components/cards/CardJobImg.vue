<script setup lang="ts">
defineProps<{
	src: string | null
	text: string
}>()
</script>

<template>
	<div class="img">
		<!-- <BaseImg :src="useSrc(logo)" alt="logo" :cover="false" /> -->
		<BaseImg
			v-if="src"
			class="img-inner"
			:src="src"
			:initials-text="text"
			:alt="`${text} logo`"
		/>
		<BaseAvatar v-else :initials-text="text" />
	</div>
</template>

<style lang="scss" scoped>
.img {
	width: 50px;
	height: 50px;
	padding: 4px;

	display: flex;
	place-items: center;

	background: rgb(var(--v-theme-surface-bright));

	&,
	&-inner {
		border-radius: 1rem;
	}
}
</style>
