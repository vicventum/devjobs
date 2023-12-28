<script setup lang="ts">
const { message = 'Ha ocurrido un error' } = defineProps<{
	message: string
}>()
</script>

<template>
	<section class="message">
		<h2>{{ message }}</h2>
	</section>
</template>

<style lang="scss" scoped>
.message {
	text-align: center;
}
</style>
