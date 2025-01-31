import PropTypes from 'prop-types'
import React from 'react'
import Button from './Button'
import { useLocation } from 'react-router-dom'

const Header = ({ title, onAdd, showAdd }) => {
    const onClick = (e) => {
        console.log("Hello")
    }

    const location = useLocation()

  return (
    <header className="header">
        <h1>{title}</h1>
        {location.pathname === "/" && <Button color={showAdd ? "red" : "green"} text={showAdd ? "Close" : "Add"} onClick={onAdd}/>}
    </header>
  )
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

Header.defaultProps = {
    title: "Task Tracker",
}

export default Header
