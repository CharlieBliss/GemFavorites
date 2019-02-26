import React, { useState } from 'react'
import 'react-material-layout/dist/react-material-class-layout.min.css'
import { getFavoritesList } from './logic/favorites'
import { CardList, AppBar } from './components'
import styles from './base.css'


const App = React.memo(() => {

	const [gems, setGems] = useState([])
	const [loading, setLoading] = useState(false)
	const [active, setActive] = useState(false)
	const [favorites, setFavorites] = useState(getFavoritesList())
	const [displayFavorites, setDisplayFavorites] = useState(false)

	return (
		<div>
			<AppBar
				setGems={setGems}
				gems={gems}
				setActive={setActive}
				setLoading={setLoading}
				setDisplayFavorites={setDisplayFavorites}
			/>
			<div className={styles.content}>
				<CardList
					cardList={gems}
					active={active}
					loading={loading}
					favorites={favorites}
					setFavorites={setFavorites}
					displayFavorites={displayFavorites}
				/>
			</div>
		</div>
	)
})

export default App
