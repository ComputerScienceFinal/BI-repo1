import React from 'react'
import { useEffect, useState } from "react"
import { useLocation } from 'react-router-dom'

const NavToF = ({children}) => {
    const location = useLocation();

    const [showNav, setShowNav] = useState(false)

    useEffect(() => 
    {
        console.log('this is here', location)
        if(location.pathname === '/login' || location.pathname === '/welcome'){
            setShowNav(false)
        }
        else {
            setShowNav(true)
        }
    }, [location])


  return (
    <div>{showNav && children}</div>
  )
}

export default NavToF