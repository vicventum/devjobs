import * as z from 'zod'
import { JobDataSchema } from './JobData.response'

export const JobListSchema = z.object({
	count: z.number(),
	next: z.union([z.null(), z.string()]),
	previous: z.union([z.null(), z.string()]),
	results: z.array(JobDataSchema),
})
export type JobListResponse = z.infer<typeof JobListSchema>
