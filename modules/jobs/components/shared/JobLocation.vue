<script setup lang="ts">
type Props = {
	isRemote: boolean
	location?: string
}

defineProps<Props>()
</script>

<template>
	<footer class="job-location">
		<h4 v-if="location" class="job-location__place text-h4 text-primary">
			{{ location }}
		</h4>

		<v-divider v-if="location && isRemote" class="mx-4" vertical />

		<h4 v-if="isRemote" class="job-location__remote text-h4 text-success">
			Remote
		</h4>
	</footer>
</template>

<style lang="scss" scoped>
.job-location {
	display: flex;
	align-items: center;
}
</style>
