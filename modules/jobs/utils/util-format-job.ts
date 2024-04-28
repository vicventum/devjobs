import type { Color } from '@/modules/core/types'
import type { JobDataResponse, JobDataDetail } from '@/modules/jobs/types'
// import { useConstants } from '@/modules/core/composables/use-constants'
import { utilRandomColor } from '@/modules/jobs/utils/util-random-color'

export function utilFormatJob(
	job: JobDataResponse,
	color?: Color,
): JobDataDetail {
	// const { DEFAULT_JOB_COLOR } = useConstants()
	const customColor = color ?? utilRandomColor()

	return {
		id: job.id,
		title: job.role,
		company: job.company_name,
		date: job.date_posted,
		// color: job.logo ? DEFAULT_JOB_COLOR : customColor,
		color: customColor,
		remote: job.remote,
		urlApply: job.url,
		text: job.text,
		keywords: job.keywords,
		source: job.source,
		companyNumEmployees: job.company_num_employees ?? undefined,
		logo: job.logo ?? undefined,
		type: job.employment_type ?? undefined,
		location: job.location ?? undefined,
		urlCompany: undefined,
	}
}
