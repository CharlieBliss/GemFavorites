import 'isomorphic-fetch'
import qs from 'qs'

export async function hitNewsApi(query, page = 1) {
	const queries = qs.stringify({
		query,
		page,
	})
	const requestUrl = `http://localhost:3000/api/v1/search.json?${queries}`
	const response = await fetch(requestUrl)
	if (response.status === 200) {
		return response.json()
	}
	throw new Error('No Results Found')
}


// Handles Initial search
export const handleSearch = async ({
	search,
	sort,
	setPage,
	setGems,
	setActive,
	setLoading,
	setDisplayFavorites,
}) => {
	const results = await hitNewsApi(search, sort)
	setActive(true)
	setLoading(true)
	setDisplayFavorites(false)
	setPage(1)
	setGems(results)
	setLoading(false)
}

// Handles auto-scroll
export const onScroll = async ({
	search,
	page,
	setPage,
	gems,
	setGems,
}) => {
	if (
		window.innerHeight + document.documentElement.scrollTop
			=== document.documentElement.offsetHeight
	) {
		const nextPage = page + 1
		const results = await hitNewsApi(search, nextPage)
		setPage(nextPage)
		setGems(gems.concat(results))
	}
}
