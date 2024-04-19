<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'
// import type { JobData, Color } from '@/types'

type Props = {
	jobList: JobData[]
}
defineProps<Props>()

function goToPage(data: { id: string; color: string }): RouteLocationRaw {
	const { id, color } = data
	return {
		name: 'job-id',
		params: { id },
		query: { color },
	}
	// router.push({ name: 'job-id', params: { id }, query: { color: finalColor } })
	// router.push(`/${id}`)
}
</script>

<template>
	<div class="gallery">
		<ClientOnly>
			<template v-if="jobList.length">
				<NuxtLink
					v-for="job in jobList"
					:key="job.id"
					class="gallery__link"
					:to="goToPage({ id: job.id, color: job.color })"
				>
					<!-- v-for="job in jobList"
			:key="job.id" -->
					<CardJob
						class="gallery__card"
						:logo="job.logo"
						:date="job.date"
						:type="job.type"
						:title="job.title"
						:company="job.company"
						:location="job.location"
						:color="job.color"
						:is-remote="job.remote"
					/>
				</NuxtLink>
			</template>
		</ClientOnly>
	</div>
</template>

<style lang="scss" scoped>
.gallery {
	display: grid;
	// * DESTACADO: Esto se debe a que 1fr se trata de la distribución del espacio disponible (!). Esto se rompe tan pronto como el contenido supera el tamaño de la pista
	// ? El `minmax` es para obligar a que el contenido de una columna no puede ser más grande que una sección del grid
	grid-template-columns: repeat(3, minmax(0, 1fr));
	column-gap: 32px;
	row-gap: 64px;

	&__no-data-message {
		grid-column: 1/-1;
	}

	&__link {
		text-decoration: none;
	}
	&__card {
		height: 100%;
	}
}
</style>
