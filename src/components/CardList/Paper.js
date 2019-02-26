import PropTypes from 'prop-types'
import React from 'react'
import classnames from 'classnames'
import * as styles from './styles.css'

const Paper = ({
	white,
	shadow,
	children,
	className,
}) => (
	<div
		className={classnames(
			className,
			{
				[styles.paper]: true,
				[styles.white]: white,
				[styles.shadow]: shadow,
			},
		)}
	>
		{children}
	</div>
)

export default Paper

Paper.propTypes = {
	white: PropTypes.bool,
	shadow: PropTypes.bool,
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
}

Paper.defaultProps = {
	white: false,
	shadow: true,
	className: '',
}

Paper.propDoc = {
	white: 'The background can be white or transparent. Defaults to transparent',
	shadow: 'Has a box-shadow, giving the illusion of depth. Defaults to True',
	children: 'The contents of the Paper, can contain any other elements',

}
