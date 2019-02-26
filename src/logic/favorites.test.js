import { toggleFavorite, getFavoritesList, isFavorite } from './favorites'
import { CONTAINS_TEST, NOT_CONTAINS_TEST } from '../__mocks__/__mock__favorites'

beforeEach(() => localStorage.clear())

describe('Is Favorite', () => {

	test('Returns true if favorite', () => {
		expect(isFavorite(CONTAINS_TEST, 'Test')).toBeTruthy()
	})

	test('Returns false if not favorite', () => {
		expect(isFavorite(NOT_CONTAINS_TEST, 'Test')).toBeFalsy()
	})
})

describe('Get Favorites', () => {

	test('Returns a full list of favorites', () => {
		expect(getFavoritesList(CONTAINS_TEST, { title: 'Test' })).toEqual([])
		toggleFavorite('Test', 'Test Body', 'https://google.com', [], () => {})
		expect(getFavoritesList(CONTAINS_TEST, { title: 'Test' })).toEqual(CONTAINS_TEST)
	})
})

describe('Toggle Favorites', () => {

	test('Adds favorite to list', () => {
		expect(toggleFavorite('Test', 'Test Body', 'https://google.com', [], () => {})).toEqual(CONTAINS_TEST)
	})

	test('Adds favorites to storage', () => {
		toggleFavorite('Test', 'Body', 'google.com', [], () => {})
		expect(localStorage.getItem('favorites')).not.toContain('Title')
		toggleFavorite('Title', 'Body', 'google.com', [], () => {})
		expect(localStorage.getItem('favorites')).toContain('Title')
	})

	test('Removes favorite from list', () => {
		expect(toggleFavorite('Test', 'Test Body', 'https://google.com', CONTAINS_TEST, () => {})).toEqual([])
	})

	test('Removes Favorites from storage', () => {
		toggleFavorite('Test', 'Body', 'google.com', [], () => {})
		expect(localStorage.getItem('favorites')).toContain('Test')
		toggleFavorite('Test', 'Body', 'google.com', CONTAINS_TEST, () => {})
		expect(localStorage.getItem('favorites')).not.toContain('Test')
	})
})

