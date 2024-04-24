import type { Color } from '@/modules/core/types'

type JobType = 'contract' | 'full time' | undefined

interface JobData {
	id: string
	date: Date
	color: Color
	type: JobType
	title: string
	company: string
	remote: boolean
	logo?: string
	location?: string
	// company_num_employees: z.union([z.null(), z.string()]),
	// remote: z.boolean(),
	// url: z.string(),
	// text: z.string(),
	// keywords: z.array(z.string()),
	// source: z.string(),
}

export { type JobType, type JobData }
