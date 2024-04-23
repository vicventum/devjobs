import type { Color, JobDataResponse } from '@/modules/jobs/types'

export function utilFormatJobList(jobList: JobDataResponse[]): JobData[] {
	// const { DEFAULT_JOB_COLOR } = useConstants()

	return jobList.map((job) => ({
		id: job.id,
		title: job.role,
		company: job.company_name,
		date: job.date_posted,
		// color: job.logo ? DEFAULT_JOB_COLOR : utilRandomColor(),
		color: utilRandomColor(),
		remote: job.remote,
		logo: job.logo ?? undefined,
		type: job.employment_type ?? undefined,
		location: job.location ?? undefined,
	}))
}
