<script lang="ts" setup>
import useJob from '@/composables/services/use-job'

definePageMeta({
	layout: false,
})

const route = useRoute()
const { jobDetail, isLoading, isError } = useJob({ id: `${route.params.id}` })
console.log('🚀 ~ jobDetail:', jobDetail, route.params)
</script>

<template>
	<NuxtLayout name="detail">
		<template v-if="jobDetail">
			<CardJobSummary
				class="job-summary mb-8"
				:color="jobDetail.color"
				:logo="jobDetail.logo"
				:company="jobDetail.company"
				:company-num-employees="jobDetail.companyNumEmployees"
				:url-apply="jobDetail.urlApply"
				:url-company="jobDetail?.urlCompany"
			/>
			<CardJobContent class="job-content mb-8" />
		</template>
		<template #footer>
			<LayoutJobDetailFooter />
		</template>
	</NuxtLayout>
</template>

<style scoped></style>
