import type { Color, JobDataResponse } from '@/modules/jobs/types'

export function utilFormatJobList(jobList: JobDataResponse[]) {
	const { DEFAULT_JOB_COLOR } = useConstants()

	return jobList.map((job) => ({
		id: job.id,
		logo: job.logo,
		title: job.role,
		company: job.company_name,
		type: job.employment_type,
		location: job.location,
		date: job.date_posted,
		color: job.logo ? DEFAULT_JOB_COLOR : utilRandomColor(),
		remote: job.remote,
	}))
}
