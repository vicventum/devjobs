<template>
	<NuxtLayout>
		<v-app>
			<!-- <NuxtWelcome /> -->
			<!-- <NuxtPage /> -->
			<v-icon icon="$themeLightDark" />
			<v-btn color="success">{{ store.message }}</v-btn>
			<p>pitooooooooooooooodfsaooooooo</p>
			<v-card class="mx-auto" max-width="344" :color="'indigo'">
				<v-card-item>
					<div>
						<div class="text-overline mb-1">oli</div>
						<div class="text-h6 mb-1">Headline</div>
						<div class="text-caption">
							Greyhound divisely hello coldly fonwderfully
						</div>
					</div>
				</v-card-item>

				<v-card-actions>
					<v-btn> Button </v-btn>
				</v-card-actions>
			</v-card>
		</v-app>
	</NuxtLayout>
</template>

<script lang="ts" setup>
const store = dummyStore()
// const variable = ref<string>('Victor')
// function name(name: string) {
// 	const a = variable.value + name
// }
// name('victor')
</script>

<style lang="scss">
p {
	// font-family: Poppins;
}
</style>
