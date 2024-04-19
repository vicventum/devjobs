<script setup lang="ts">
type Props = {
	relativeDate: string
	type: string | null
}

defineProps<Props>()
</script>

<template>
	<h3 class="job-time text-body-1 text-light-darken-4">
		{{ relativeDate }}
		<span v-if="type">
			<BaseSeparatorPoint />
			{{ type }}
		</span>
	</h3>
</template>

<style lang="scss" scoped></style>
