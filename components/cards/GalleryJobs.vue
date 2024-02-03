<script setup lang="ts">
import type { JobData, Color } from '@/types'

interface Props {
	jobList: JobData[]
}
defineProps<Props>()

const router = useRouter()
const fallbackColor = ref('')

function setFallbackColor(color: Color) {
	fallbackColor.value = color
}

function goToPage(data: { id: string; color: string }) {
	const { id, color } = data
	const finalColor = fallbackColor.value ?? color
	router.push({ name: 'job-id', params: { id }, query: { color: finalColor } })
	// router.push(`/${id}`)
}
</script>

<template>
	<div class="gallery">
		<ClientOnly>
			<template v-if="jobList.length">
				<CardJob
					v-for="job in jobList"
					:key="job.id"
					class="gallery__card"
					:logo="job.logo"
					:date="job.date"
					:type="job.type"
					:title="job.title"
					:company="job.company"
					:location="job.location"
					:color="job.color"
					:remote="job.remote"
					@error-loading-img="setFallbackColor"
					@click="goToPage({ id: job.id, color: job.color })"
				/>
			</template>
		</ClientOnly>
	</div>
</template>

<style lang="scss" scoped>
.gallery {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	column-gap: 32px;
	row-gap: 64px;

	&__no-data-message {
		grid-column: 1/-1;
	}
}
</style>
