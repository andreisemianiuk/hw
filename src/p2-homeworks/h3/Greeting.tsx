import React, { ChangeEvent } from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
  name: string // need to fix any
  setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
  addUser: () => void // need to fix any
  addUserOnKeyPress: (e: { key: string }) => void
  error: string | null // need to fix any
  totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
  { name, setNameCallback, addUser, addUserOnKeyPress, error, totalUsers } // деструктуризация пропсов
) => {
  const errorClass = error ? s.error : '' // need to fix with (?:)

  return (
    <div className={s.main}>
      <input
        value={name}
        onKeyPress={addUserOnKeyPress}
        onChange={setNameCallback}
        onBlur={setNameCallback}
        className={`${s.inputClass} ${errorClass}`}
      />
      <button className={s.btn} onClick={addUser} disabled={!name}>
        add
      </button>
      <span className={s.usersCount}>Members count: {totalUsers}</span>
      <div className={s.errorMessage}>{error ? error : null}</div>
    </div>
  )
}

export default Greeting
