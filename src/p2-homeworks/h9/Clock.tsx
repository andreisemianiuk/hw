import React, { useState } from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './H9.module.css'

function Clock() {
  const [timerId, setTimerId] = useState<number>(0)
  const [date, setDate] = useState<Date>(new Date())
  const [show, setShow] = useState<boolean>(false)
  
  const stop = () => {
    clearInterval(timerId)
  }
  const start = () => {
    stop()
    const id: number = window.setInterval(() => {
      setDate(new Date())
    }, 1000)
    setTimerId(id)
  }
  
  const onMouseEnter = () => {
    setShow(true)
  }
  const onMouseLeave = () => {
    setShow(false)
  }
  
  const fixDate = (num: number) => {
    if (num < 10) {
      return `0${num}`
    }
    return num
  }
  
  const stringTime = `${fixDate(date.getHours())}:${fixDate(date.getMinutes())}:${fixDate(date.getSeconds())}`
  const stringDate = `${fixDate(date.getDate())}.${fixDate(date.getMonth()+1)}.${date.getFullYear()}`
  
  return (
    <div className={s.container}>
      <div
        className={s.time}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {stringTime}
      </div>
      <div className={s.dateWrapper}>
        {show && (
          <div className={s.date}>
            {stringDate}
          </div>
        )}
      </div>
      <SuperButton onClick={start}>start</SuperButton>
      <SuperButton onClick={stop}>stop</SuperButton>
    
    </div>
  )
}

export default Clock
