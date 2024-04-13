<script setup lang="ts">
type Props = {
	message?: string
}
const { message = 'Ha ocurrido un error' } = defineProps<Props>()
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
