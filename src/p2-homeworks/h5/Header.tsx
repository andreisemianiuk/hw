import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import s from './Hw5.module.css'


function Header() {
  const [open, setOpen] = useState(false)
  
  const showMenu = () => {
    setOpen(true)
  }
  const hideMenu = () => {
    setOpen(false)
  }
  
  
  return (
    <div className={open ? s.wrapperIsNavOpen : s.wrapper} onMouseOver={showMenu} onMouseOut={hideMenu}>
      <div className={s.nav}>
        <div className={s.icon}>menu</div>
        <div className={s.navBody}>
          <NavLink className={s.link} activeClassName={s.activeLink} to={'/pre-junior'}>pre-junior</NavLink>
          <NavLink className={s.link} activeClassName={s.activeLink} to={'/junior'}>junior</NavLink>
          <NavLink className={s.link} activeClassName={s.activeLink} to={'/advanced-junior'}>junior+</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Header
