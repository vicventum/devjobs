import * as z from 'zod'

export const EmploymentTypeSchema = z.enum(['contract', 'full time'])
export type EmploymentType = z.infer<typeof EmploymentTypeSchema>

// export const SourceSchema = z.enum([
// 	'Berlinstartupjobs',
// 	'Cryptocurrencyjobs',
// 	'Hn',
// 	'Remoteok',
// 	'Weworkremotely',
// ])
// export type Source = z.infer<typeof SourceSchema>

export const JobDataSchema = z.object({
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
	source: z.string(),
})
export type JobDataResponse = z.infer<typeof JobDataSchema>
