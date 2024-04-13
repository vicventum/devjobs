// import type { JobData } from '@/types'

export interface JobDataDetail extends JobData {
	urlApply: string
	text: string
	keywords: string[]
	source: string
	companyNumEmployees: null | string
	urlCompany?: string
}
