import * as z from 'zod'

export const JobDataSchema = z.object({
	id: z.string(),
	role: z.string(),
	company_name: z.string(),
	company_num_employees: z.null(),
	employment_type: z.string(),
	location: z.string(),
	remote: z.boolean(),
	logo: z.string(),
	url: z.string(),
	text: z.string(),
	date_posted: z.coerce.date(),
	keywords: z.array(z.any()),
	source: z.string(),
})
export type JobDataResponse = z.infer<typeof JobDataSchema>
