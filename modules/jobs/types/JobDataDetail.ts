// import type { JobData } from '@/types'

export interface JobDataDetail extends JobData {
	urlApply: string
	text: string
	keywords: string[]
	source: string
	urlCompany?: string
	companyNumEmployees?: string
}
