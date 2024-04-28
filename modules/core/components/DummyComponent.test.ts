import '@testing-library/jest-dom'
import { it, describe } from 'vitest'
import DummyComponent from './DummyComponent.vue'
import { mount, screen } from '@/test/utils/custom-render'
// import userEvent from '@testing-library/user-event'

describe('DummyComponent.vue', () => {
	it('should test', () => {
		mount(DummyComponent)
		// const store = useCartStore()
		const message = screen.getByRole('button')
		// screen.debug(message)
		// screen.debug()
	})
})
