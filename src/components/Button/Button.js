import PropTypes from 'prop-types'
import React from 'react'
import classnames from 'classnames'

import styles from './styles.css'

const Button = ({
	label,
	onClick,
	search,
	disabled,
}) => (
	<div>
		<button
			className={classnames(
				styles.button,
				{
					[styles.searchButton]: search,
					[styles.disabled]: disabled,
				},
			)}
			onClick={onClick}
			type="button"
			disabled={disabled}
		>
			{label}
		</button>
	</div>
)

export default Button

Button.propTypes = {
	label: PropTypes.string,
	onClick: PropTypes.func.isRequired,
	search: PropTypes.bool,
	disabled: PropTypes.bool,
}

Button.defaultProps = {
	label: 'Submit',
	search: false,
	disabled: false,
}
