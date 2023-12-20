import type { HexadecimalColor } from '@/types'

type JobType = 'contract' | 'full time' | null

export interface JobData {
	id: string
	logo: string | null
	title: string
	company: string
	type: JobType
	location: string | null
	date: Date
	color: HexadecimalColor

	// company_num_employees: z.union([z.null(), z.string()]),
	// remote: z.boolean(),
	// url: z.string(),
	// text: z.string(),
	// keywords: z.array(z.string()),
	// source: z.string(),
}
