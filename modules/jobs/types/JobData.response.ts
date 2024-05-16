import * as z from 'zod'

const EmploymentTypeSchema = z.enum(['contract', 'full time'])
type EmploymentType = z.infer<typeof EmploymentTypeSchema>

const JobDataSchema = z.object({
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
	url_company: z.union([z.null(), z.string()]),
})
type JobDataResponse = z.infer<typeof JobDataSchema>

export {
	type EmploymentType,
	type JobDataResponse,
	EmploymentTypeSchema,
	JobDataSchema,
}
