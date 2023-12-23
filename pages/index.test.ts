import '@testing-library/jest-dom'
import { it, describe, expect, vi, beforeEach, beforeAll } from 'vitest'
import { mount, screen, userEvent } from '@/test-utils/custom-render'
import type { JobData, JobType } from '@/types'

// eslint-disable-next-line import/order
import Index from './index.vue'

import { useJobs } from '@/composables/services/use-jobs'

import {
	generateJob,
	generateJobList,
} from '@/test-utils/factories/job-factory'

// vi.mock('@/composables/services/use-jobs', () => ({
// 	getJobList: vi.fn(),
// }))
vi.mock('@/composables/services/use-jobs', () => ({
	useJobs: () => {
		return { getJobList: () => vi.fn() }
	},
	// getJobList: () => 'mocked value 2',
}))

// let appClasses: string
describe('When a user lands on page', () => {
	it('should render the jobs', () => {
		const jobList: JobData[] = generateJobList()

		// @ts-ignore
		useJobs().getJobList().mockResolvedValueOnce(jobList)

		mount(Index)
		console.log('🚀 ~ it ~ jobList:', jobList, useJobs().getJobList())
		// useJobs().getJobList()
	})
})
