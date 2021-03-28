import React, { useState } from 'react'
import { homeWorkReducer } from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './HW8.module.css'

export type UserType = {
  _id: number
  name: string
  age: number
}

const initialPeople = [
  { _id: 0, name: 'Кот', age: 3 },
  { _id: 1, name: 'Александр', age: 66 },
  { _id: 2, name: 'Коля', age: 16 },
  { _id: 3, name: 'Виктор', age: 44 },
  { _id: 4, name: 'Дмитрий', age: 40 },
  { _id: 5, name: 'Ирина', age: 55 }
] as UserType[]

export type PeopleType = typeof initialPeople

function HW8() {
  const [people, setPeople] = useState<PeopleType>(initialPeople)
  
  const finalPeople = people.map((p: UserType) => (
    <div className={s.user} key={p._id}>
      <span>{p.name}</span>
      <span>{p.age}</span>
    </div>
  ))
  
  const sortUp = () => setPeople(homeWorkReducer(initialPeople, { type: 'sort', payload: 'up' }))
  
  return (
    <div>
      <hr />
      homeworks 8
      
      {/*should work (должно работать)*/}
      {finalPeople}
      <div className={s.buttonsWrapper}>
        <div><SuperButton onClick={sortUp}>sort up</SuperButton></div>
        <div><SuperButton onClick={sortUp}>sort down</SuperButton></div>
        <div><SuperButton onClick={sortUp}>check 18</SuperButton></div>
      </div>
      <hr />
      {/*для личного творчества, могу проверить*/}
      {/*<AlternativePeople/>*/}
      <hr />
    </div>
  )
}

export default HW8
