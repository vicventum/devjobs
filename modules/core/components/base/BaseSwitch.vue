<script setup lang="ts">
import { defineModel } from 'vue'
const modelValue = defineModel<boolean>({ default: false })
</script>

<template>
	<!-- v-model="model" -->
	<v-switch v-model="modelValue" hide-details inset />
</template>

<style lang="scss" scoped></style>
