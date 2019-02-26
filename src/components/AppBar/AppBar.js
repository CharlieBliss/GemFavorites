import PropTypes from 'prop-types'
import React, { useState } from 'react'
import classnames from 'classnames'
import { onScroll, handleSearch } from '../../logic/api'


import { Search, Button } from '..'
import styles from './styles.css'

const AppBar = React.memo(({
	gems,
	setGems,
	setActive,
	setLoading,
	displayFavorites,
	setDisplayFavorites,
}) => {
	const [search, setSearch] = useState('')
	const [page, setPage] = useState(1)
	const searchSettings = {
		search,
		page,
		setPage,
		setGems,
		setActive,
		setLoading,
		setDisplayFavorites,
		gems,
	}
	// Handles Initial search
	const handleClickSearch = () => handleSearch(searchSettings)
	const handleClickFavorite = () => setDisplayFavorites(!displayFavorites)
	window.onscroll = () => onScroll(searchSettings)
	return (
		<div
			className={classnames(
				styles.bar,
				'layout-row layout-xs-col layout-align-space-around-center flex-wrap',
			)}
		>
			<div className="flex-15">
				<Button
					label={displayFavorites ? 'Home' : 'Favorites'}
					onClick={handleClickFavorite}
					flat
				/>
			</div>
			<div className="flex-30">
				<Search
					value={search}
					onChange={setSearch}
					onEnterKey={handleClickSearch}
				/>
			</div>
			<div className={classnames(styles.searchAction, 'flex-15')}>
				<Button
					label="Search"
					onClick={handleClickSearch}
					search
					disabled={!search}
				/>
			</div>
		</div>
	)
})

AppBar.propTypes = {
	setGems: PropTypes.func.isRequired,
	setActive: PropTypes.func.isRequired,
	setLoading: PropTypes.func.isRequired,
}

AppBar.defaultProps = {
	gems: [],
}

export default AppBar
