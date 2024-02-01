/* import '@testing-library/jest-dom'
import {
	it,
	describe,
	expect,
	vi,
	beforeEach,
	beforeAll,
	type Mock,
} from 'vitest'
import { flushPromises } from '@vue/test-utils'
import {
	mount,
	asyncMount,
	screen,
	userEvent,
	waitFor,
} from '@/test-utils/custom-render'
import type { JobData, JobType } from '@/types'

// import Index from '@/test-utils/WrapperIndex.vue'
// eslint-disable-next-line import/order
import Index from './index.vue'

import { useJobs } from '@/composables/services/use-jobs'

import {
	generateJob,
	generateJobList,
} from '@/test-utils/factories/job-factory'

const mockJobList: Mock = vi.fn()
vi.mock('@/composables/services/use-jobs', () => ({
	useJobs: () => ({
		getJobList: mockJobList,
		// getJobList: () => jobList,
	}),
}))

describe('When a user lands on page', () => {
	it('should render the jobs', async () => {
		const jobList: JobData[] = generateJobList()
		mockJobList.mockResolvedValue(jobList)

		asyncMount(Index)
		await flushPromises()

		const job = await screen.findByText(jobList[0].title)
		// screen.debug(job)
		expect(job).toBeInTheDocument()
	})

	describe('and there are no jobs to show', () => {
		it('should display a message that no jobs have been found', async () => {
			const jobList: JobData[] = []
			mockJobList.mockResolvedValue(jobList)

			asyncMount(Index)
			await flushPromises()

			const message = await screen.findByText(/no se han encontrado empleos/i)
			screen.debug(message)
			expect(message).toBeInTheDocument()
		})
	})
})
 */
