import PropTypes from 'prop-types'
import React from 'react'
import classnames from 'classnames'
import { isFavorite, toggleFavorite } from '../../logic/favorites'

import { Paper, Button } from '..'
import styles from './styles.scss'


const Card = React.memo(({
	title,
	body,
	buttonLabel,
	url,
	favorites,
	setFavorites,
}) => {
	const handleClick = url => () => window.open(url)
	const toggle = () => toggleFavorite(title, body, url, favorites, setFavorites)
	return (
		<Paper
			white
			className={styles.card}
		>
			<div className={styles.content}>
				<div className={classnames(styles.title, 'layout-row layout-align-space-between-center')}>
					{title}
					<span onClick={toggle} className={styles.favorite}>
						{isFavorite(favorites, title) ? '♥' : '♡'}
					</span>
				</div>
				<div className={styles.body}>
					{body}
				</div>
				<Button
					label={buttonLabel}
					onClick={handleClick(url)}
				/>
			</div>
		</Paper>
	)
})

export default Card

Card.propTypes = {
	title: PropTypes.string,
	body: PropTypes.string,
	url: PropTypes.string,
	buttonLabel: PropTypes.string,
}

Card.defaultProps = {
	title: '',
	body: '',
	buttonLabel: 'Read More',
	url: '',
	setFavorites: () => {},
}

Card.propDoc = {
	title: 'Card Title',
	body: 'The main text content on the card',
	link: 'The card action, typically a link to a detail page',
}
