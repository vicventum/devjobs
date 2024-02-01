<script setup lang="ts">
import type { JobData } from '@/types'

interface Props {
	jobList: JobData[]
}
defineProps<Props>()

const router = useRouter()

function goToPage(id: string) {
	router.push({ name: 'job-id', params: { id } })
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
					@click="goToPage(job.id)"
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
