import type { Color, JobDataResponse } from '@/modules/jobs/types'

export function utilFormatJob(
	job: JobDataResponse,
	color?: Color,
): JobDataDetail {
	// const { DEFAULT_JOB_COLOR } = useConstants()
	const customColor = color ?? utilRandomColor()

	return {
		id: job.id,
		logo: job.logo,
		title: job.role,
		company: job.company_name,
		type: job.employment_type,
		location: job.location,
		date: job.date_posted,
		// color: job.logo ? DEFAULT_JOB_COLOR : customColor,
		color: customColor,
		remote: job.remote,
		urlApply: job.url,
		text: job.text,
		keywords: job.keywords,
		source: job.source,
		companyNumEmployees: job.company_num_employees,
		urlCompany: undefined,
	}
}
