import '@testing-library/jest-dom'
import { it, describe, vi, beforeEach } from 'vitest'
import { cleanup } from '@testing-library/vue'

import BaseSwitchTheme from './BaseSwitchTheme.vue'
import LayoutDefault from '@/layouts/default.vue'

import { mount, screen, userEvent } from '@/test-utils/custom-render'
// import userEvent from '@testing-library/user-event'
beforeEach(() => {
	mount(LayoutDefault)
})

describe('BaseSwitchTheme.vue', () => {
	// afterEach(() => {
	// 	cleanup()
	// })

	it('should be in the light theme by default', () => {
		// mount(LayoutDefault)
		const appContainer = screen.getByTestId('app')
		expect(appContainer).toHaveClass('v-theme--lightTheme')
	})

	it('should change to the dark theme when you click on the switch', async () => {
		// mount(LayoutDefault)
		// mount(BaseSwitchTheme)

		const switchComponent = screen.getAllByRole('switch')
		// screen.debug(switchComponent)
		const user = userEvent.setup()
		await user.click(switchComponent[0])
		const appContainer = screen.getByTestId('app')
		screen.debug(appContainer)

		expect(appContainer).toHaveClass('v-theme--darkTheme')
	})

	it('should change to the light theme when you click on the switch twice', async () => {
		// mount(LayoutDefault)
		// mount(BaseSwitchTheme)

		const appContainer = screen.getByTestId('app')
		screen.debug(appContainer)
		const switchComponent = screen.getAllByRole('switch')
		// screen.debug(switchComponent)
		const user = userEvent.setup()
		await user.click(switchComponent[0])
		// screen.debug(appContainer)
		await user.click(switchComponent[0])
		// screen.debug(appContainer)

		expect(appContainer).toHaveClass('v-theme--lightTheme')
	})
})
