import React, { ChangeEvent, useState } from 'react'
import Greeting from './Greeting'
import { UserType } from './HW3'

type GreetingContainerPropsType = {
  users: UserType[]
  addUserCallback: (name: string) => void
}

const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
  users,
  addUserCallback,
}) => {
  // деструктуризация пропсов
  const [name, setName] = useState<string>('')
  const [error, setError] = useState<string | null>(null)

  const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
    const trimmedName = e.currentTarget.value.trim()

    if (trimmedName) {
      setName(trimmedName)
      setError(null)
    } else {
      setName('')
      setError('Name is required!')
    }
  }

  const addUser = () => {
    alert(`Hello ${name}!`)
    addUserCallback(name)
    setName('')
  }

  const addUserOnKeyPress = (e: { key: string }) => {
    if (e.key === 'Enter' && name) {
      addUser()
    }
  }

  const totalUsers = users.length // need to fix

  return (
    <Greeting
      name={name}
      setNameCallback={setNameCallback}
      addUser={addUser}
      addUserOnKeyPress={addUserOnKeyPress}
      error={error}
      totalUsers={totalUsers}
    />
  )
}

export default GreetingContainer
