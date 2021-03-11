import React from 'react'
import s from '../Hw5.module.css'

function Error404() {
    return (
        <div className={s.container}>
            <div className={s.number}>404</div>
            <div className={s.text}>Page not found!</div>
            <div className={s.smile}>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>
        </div>
    )
}

export default Error404
