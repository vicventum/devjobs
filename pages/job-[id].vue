<script lang="ts" setup>
import { useJob } from '@/modules/jobs/api/composables/use-job'

definePageMeta({
	layout: false,
})

const route = useRoute()
const jobId = route.params.id
const { jobDetail, isLoading, isError } = await useJob({ id: `${jobId}` })
console.log(
	'💖 ~ jobDetail, isLoading, isError:',
	jobDetail,
	jobDetail.value,
	isLoading.value,
	isError.value,
)
</script>

<template>
	<NuxtLayout name="detail">
		<JobDetailErrorHandler
			:is-loading="isLoading"
			:is-error="isError"
			:is-empty="!Object.keys({ ...jobDetail }).length"
		>
			<template v-if="jobDetail">
				<JobDetailSummary
					class="job-summary mb-8"
					:color="jobDetail.color"
					:company="jobDetail.company"
					:url-apply="jobDetail.urlApply"
					:url-company="jobDetail?.urlCompany"
					:logo="jobDetail.logo"
					:company-num-employees="jobDetail.companyNumEmployees"
				/>
				<JobDetailContent
					class="job-content mb-8"
					:company="jobDetail.company"
					:date="jobDetail.date"
					:keywords="jobDetail.keywords"
					:is-remote="jobDetail.remote"
					:source="jobDetail.source"
					:text="jobDetail.text"
					:title="jobDetail.title"
					:url-apply="jobDetail.urlApply"
					:location="jobDetail.location"
					:type="jobDetail.type"
				/>
			</template>
		</JobDetailErrorHandler>
		<template #footer>
			<LayoutJobDetailFooter
				v-if="jobDetail"
				:company="jobDetail.company"
				:title="jobDetail.title"
				:url-apply="jobDetail.urlApply"
			/>
		</template>
	</NuxtLayout>
</template>

<style scoped></style>
