import '@testing-library/jest-dom'
import { it, describe, expect, vi, beforeEach, beforeAll } from 'vitest'

import SwitchTheme from './SwitchTheme.vue'
import LayoutDefault from '@/layouts/default.vue'

import { mount, screen, userEvent } from '@/test/utils/custom-render'

// let appClasses: string
describe('SwitchTheme.vue', () => {
	it('should be in the light theme by default', () => {
		mount(LayoutDefault)
		// appClasses = document.querySelector('[data-testid="app"]').className
		const appContainer = screen.getByTestId('app')
		expect(appContainer).toHaveClass('v-theme--lightTheme')
	})

	it('should change to the light theme when you click on the switch twice', async () => {
		mount(LayoutDefault)
		// // @ts-ignore
		// wrapper.container.querySelector('[data-testid="app"]').className =
		// 	'v-application v-theme--lightTheme v-layout v-layout--full-height v-locale--is-ltr'
		const appContainer = screen.getByTestId('app')
		const switchComponent = screen.getByRole('switch')
		const user = userEvent.setup()
		await user.click(switchComponent)
		await user.click(switchComponent)

		expect(appContainer).toHaveClass('v-theme--lightTheme')
	})

	it('should change to the dark theme when you click on the switch', async () => {
		mount(LayoutDefault)
		const switchComponent = screen.getByRole('switch')
		const user = userEvent.setup()
		await user.click(switchComponent)
		const appContainer = screen.getByTestId('app')

		expect(appContainer).toHaveClass('v-theme--darkTheme')
	})
})
