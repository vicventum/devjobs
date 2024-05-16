<script setup lang="ts">
import { useTheme } from 'vuetify'
const theme = useTheme()
const toastTheme = computed(() =>
	theme.global.current.value.dark ? 'dark' : 'light',
)
</script>

<template>
	<Toaster :theme="toastTheme" richColors />
</template>

<style lang="scss" scoped></style>
