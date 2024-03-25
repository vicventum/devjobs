import { useRoute } from 'vue-router'
import '@testing-library/jest-dom'
import {
	it,
	describe,
	expect,
	vi,
	beforeEach,
	beforeAll,
	// flushPromises,
	type Mock,
} from 'vitest'
import { flushPromises } from '@vue/test-utils'
import {
	mount,
	asyncMount,
	screen,
	userEvent,
} from '@/test-utils/custom-render'
import type { JobData, JobType } from '@/types'

// import JobsContainer from '@/test-utils/JobsContainer.vue'
// eslint-disable-next-line import/order
import JobsContainer from './JobsContainer.vue'

import useJobs from '@/composables/services/use-jobs'

import {
	generateJob,
	generateJobList,
} from '@/test-utils/factories/job-factory'
// const mockJobList: Mock = vi.hoisted(
// 	() => vi.fn().mockResolvedValue([{}, {}]),
// 	// vi.fn(),
// 	// generateJobList(),
// )
const mockJobList: Mock = vi.hoisted(() => vi.fn())
vi.mock('@/composables/services/use-jobs', () => ({
	default: mockJobList,

	// default: () => ({
	// 	jobList: mockJobList,
	// }),

	// {
	// 	// useJobs: () => ({
	// 	// jobList: [],
	// 	// jobList: mockJobList,
	// 	// getJobList: () => jobList,
	// 	// }),
	// },
}))
vi.mock('vue-router', () => ({
	useRoute: vi.fn(() => ({ query: { color: '#333333' } })),
}))

describe('When a user lands on page', () => {
	it('should render the jobs', async () => {
		const jobList: JobData[] = generateJobList()

		mockJobList.mockReturnValue({ jobList })
		// console.log(useJobs().jobList)

		asyncMount(JobsContainer)
		await flushPromises()
		screen.debug()
		const job = await screen.findByText(jobList[0].title)
		screen.debug(job)
		expect(job).toBeInTheDocument()
	})

	// describe('and there are no jobs to show', () => {
	// 	it('should display a message that no jobs have been found', async () => {
	// 		const jobList: JobData[] = []
	// 		mockJobList.mockReturnValue({ jobList })
	// 		asyncMount(JobsContainer)
	// 		await flushPromises()
	// 		const message = await screen.findByText(/no se han encontrado empleos/i)
	// 		screen.debug(message)
	// 		// expect(message).toBeInTheDocument()
	// 	})
	// })
})
