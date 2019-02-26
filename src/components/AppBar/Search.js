import PropTypes from 'prop-types'
import React from 'react'

import styles from './styles.css'

const Search = React.memo(({ value, onChange, onEnterKey }) => (
	<div className={styles.bar}>
		<input
			className={styles.search}
			type="text"
			onChange={(e) => {
				e.preventDefault()
				onChange(e.target.value)
			}}
			// Handles enterkeypress for search
			onKeyPress={(e) => {
				if (e.key === 'Enter' && value) {
					e.preventDefault()
					onEnterKey()
				}
			}}
			value={value}
			placeholder="Search"
		/>
	</div>
))

export default Search

Search.propTypes = {
	value: PropTypes.string,
	onChange: PropTypes.func.isRequired,
	onEnterKey: PropTypes.func.isRequired,
}

Search.defaultProps = {
	value: '',
}
