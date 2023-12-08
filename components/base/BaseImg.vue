<script setup>
// import { useAttrs } from 'vue'
// const attrs = useAttrs()
</script>

<template>
	<v-img>
		<template #placeholder>
			<div class="d-flex align-center justify-center fill-height">
				<v-progress-circular color="light-darken-2" indeterminate />
			</div>
		</template>
	</v-img>
</template>

<style lang="scss" scoped></style>
