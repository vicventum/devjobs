import * as z from 'zod'

export const EmploymentTypeSchema = z.enum(['contract', 'full time'])
export type EmploymentType = z.infer<typeof EmploymentTypeSchema>

export const SourceSchema = z.enum([
	'Berlinstartupjobs',
	'Cryptocurrencyjobs',
	'Hn',
	'Remoteok',
	'Weworkremotely',
])

export type Source = z.infer<typeof SourceSchema>

export const ResultSchema = z.object({
	id: z.string(),
	role: z.string(),
	company_name: z.string(),
	company_num_employees: z.union([z.null(), z.string()]),
	employment_type: z.union([EmploymentTypeSchema, z.null()]),
	location: z.union([z.null(), z.string()]),
	remote: z.boolean(),
	logo: z.union([z.null(), z.string()]),
	url: z.string(),
	text: z.string(),
	date_posted: z.coerce.date(),
	keywords: z.array(z.string()),
	source: SourceSchema,
})
export type Result = z.infer<typeof ResultSchema>

export const JobListSchema = z.object({
	count: z.number(),
	next: z.string(),
	previous: z.null(),
	results: z.array(ResultSchema),
})
export type JobListResponse = z.infer<typeof JobListSchema>
