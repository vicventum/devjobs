import * as z from 'zod'
import { JobDataSchema } from './JobData.response'

export const JobListSchema = z.object({
	count: z.number(),
	next: z.string(),
	previous: z.null(),
	results: z.array(JobDataSchema),
})
export type JobListResponse = z.infer<typeof JobListSchema>
