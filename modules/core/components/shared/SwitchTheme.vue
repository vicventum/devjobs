<script setup lang="ts">
import { useTheme } from 'vuetify'
const theme = useTheme()
// console.log('🚀 ~ theme:', theme)

const isDarkTheme = ref<boolean>(false)
watch(
	() => isDarkTheme.value,
	() => {
		theme.global.name.value = theme.global.current.value.dark
			? 'lightTheme'
			: 'darkTheme'
	},
)
</script>

<template>
	<BaseSwitch
		v-model="isDarkTheme"
		class="switch"
		role="switch"
		prepend-icon="$whiteBalanceSunny"
		append-icon="$weatherNight"
	/>
</template>

<style lang="scss" scoped>
.switch {
	&:deep(.v-icon) {
		color: rgb(var(--v-theme-light));
	}
}
</style>
