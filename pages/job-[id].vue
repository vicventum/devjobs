<script lang="ts" setup>
// import useJob from '@/composables/services/use-job'

definePageMeta({
	layout: false,
})

const route = useRoute()
const jobId = route.params.id
const { jobDetail, isLoading, isError } = useJob({ id: `${jobId}` })
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
					:logo="jobDetail.logo || undefined"
					:company-num-employees="jobDetail.companyNumEmployees || undefined"
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
					:location="jobDetail.location || undefined"
					:type="jobDetail.type || undefined"
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
