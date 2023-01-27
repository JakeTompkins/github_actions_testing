import main from '../src'

describe('main', () => {
	test('Returns, "Hell, world!"', () => {
		expect(main()).toBe('Hello, world!')
	})
})
