// import type { Color } from '@/types'

export type JobType = 'contract' | 'full time' | undefined

export interface JobData {
	id: string
	title: string
	company: string
	type: JobType
	date: Date
	color: Color
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
