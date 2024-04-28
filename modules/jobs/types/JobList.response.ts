import * as z from 'zod'
import { JobDataSchema } from './JobData.response'

const JobListSchema = z.object({
	count: z.number(),
	// count: z.array(JobDataSchema),
	next: z.union([z.null(), z.string()]),
	previous: z.union([z.null(), z.string()]),
	results: z.array(JobDataSchema),
})
type JobListResponse = z.infer<typeof JobListSchema>

export { type JobListResponse, JobListSchema }
