<script lang="ts" setup>
const cartStore = dummyStore()
</script>

<template>
	<div>
		<h1 role="heading">Hi</h1>
		<v-btn color="success" role="button">{{ cartStore.message }}</v-btn>
	</div>
</template>

<style lang="scss" scoped></style>
