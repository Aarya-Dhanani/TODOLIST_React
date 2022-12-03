import React from 'react'
import PropTypes from 'prop-types'

export default function Header (props) {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1">{props.title}</span>
                </div>
            </nav>
        </div>
    )
}
Header.defaultProps = {
    title:"title here"
}
Header.propTypes = {
    title: PropTypes.string
}