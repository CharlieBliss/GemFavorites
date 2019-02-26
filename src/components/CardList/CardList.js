import PropTypes from 'prop-types'
import React from 'react'
import classnames from 'classnames'
import { RingLoader } from 'react-spinners'

import { Card } from '.'
import styles from './styles.css'

const CardList = React.memo(({
	cardList,
	active,
	loading,
	favorites,
	setFavorites,
	displayFavorites,
}) => {
	const cards = () => {
		if (loading) {
			return <RingLoader size={100} />
		}
		if (displayFavorites) {
			if (favorites.length) {
				return favorites.map(card => (
					<div className={classnames(styles.cardListItem)}>
						<Card
							title={card.title}
							body={card.body}
							url={card.url}
							favorites={favorites}
							setFavorites={setFavorites}
						/>
					</div>
				))
			}
			return (
				<div className={styles.noResults}>
					You don't have any favorites yet! Add some using the search tool.
				</div>
			)
		}
		if (cardList.length) {
			return cardList.map(card => (
				<div className={classnames(styles.cardListItem)}>
					<Card
						title={card.name}
						body={card.info}
						url={card.documentation_uri}
						favorites={favorites}
						setFavorites={setFavorites}
					/>
				</div>
			))
		}
		return (
			<div className={styles.noResults}>
				{
					active ? 'No Results Found'
						: 'Please enter a search term'
				}
			</div>
		)
	}

	return (
		<div className={classnames(styles.cardList, 'layout-column layout-gt-xs-row layout-align-space-around layout-wrap')}>
			{cards()}
		</div>
	)
})

export default CardList

CardList.propTypes = {
	cardList: PropTypes.array,
	active: PropTypes.bool,
	loading: PropTypes.bool,
}

CardList.defaultProps = {
	cardList: [],
	active: false,
	loading: false,
}
