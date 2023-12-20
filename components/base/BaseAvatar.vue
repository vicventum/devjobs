<script setup lang="ts">
const {
	initialsText = '',
	background = 'primary',
	color = undefined,
} = defineProps<{
	initialsText: string | undefined
	background?: string
	color?: string
}>()

const textColor = computed(() => {
	return color && `color: ${color}`
})
</script>

<template>
	<v-avatar class="avatar" :color="background">
		<span class="avatar__text text-h5 font-weight-bold">
			{{ useGetFirstLetter(initialsText) }}
		</span>
	</v-avatar>
</template>

<style lang="scss" scoped>
.avatar {
	&__text {
		color: v-bind(color);
	}
}
</style>
