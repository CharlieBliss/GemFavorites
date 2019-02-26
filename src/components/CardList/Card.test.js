import React from 'react'
import { render, fireEvent } from 'react-testing-library'
import { CONTAINS_TEST, NOT_CONTAINS_TEST } from '../../__mocks__/__mock__favorites'
import Card from './Card'


// This is one of the more component logic heavy components so I'll write some tests for this one,
// normally a testing suite would be more comprehensive than this


test('Has the correct symbol when included in favorites', () => {
	const { getByText } = render(
		<Card
			title="Test"
			body="Test Body"
			url="https://google.com"
			favorites={CONTAINS_TEST}
			setFavorites={() => {}}
		/>,
	)
	const heart = getByText(/♥/g)
	expect(heart).toBeTruthy()
})

describe('Not included in favorites', () => {
	const { getByText } = render(
		<Card
			title="Test"
			body="Test Body"
			url="https://google.com"
			favorites={NOT_CONTAINS_TEST}
			setFavorites={() => {}}
		/>,
	)
	const emptyHeart = getByText(/♡/)

	test('Has the correct symbol when not included in favorites', () => {
		expect(emptyHeart).toBeTruthy()
	})

	test('Adds a new Favorite to the favorites list when a card is clicked', () => {
		fireEvent.click(emptyHeart)
		const heart = getByText(/♥/)
		expect(heart).toBeTruthy()
		expect(localStorage.getItem('favorites')).toContain('Test Body')
	})
})


