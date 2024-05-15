import * as z from 'zod'
import { JobDataSchema } from './JobData.response'

const JobListSchema = z.array(JobDataSchema)

type JobListResponse = z.infer<typeof JobListSchema>

export { type JobListResponse, JobListSchema }
