export const isFavorite = (favorites, title) => favorites.some(favorite => favorite.title === title)

export const getFavoritesList = () => {
	const favorites = localStorage.getItem('favorites')
	return favorites ? JSON.parse(favorites) : []
}

export const toggleFavorite = (title, body, url, favorites, setFavorites) => {
	const newFavorites =
		isFavorite(favorites, title) ?
			favorites.filter(favorite => favorite.title !== title) :
			[
				...favorites,
				{
					title,
					body,
					url,
				},
			]

	setFavorites(newFavorites)
	localStorage.setItem('favorites', JSON.stringify(newFavorites))
	return newFavorites
}
