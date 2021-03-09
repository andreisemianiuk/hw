import React from 'react'
import { AffairType } from './HW2'
import s from './Affairs.module.css'

type AffairPropsType = {
  affair: AffairType
  deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
  const deleteCallback = (id: number) => {
    props.deleteAffairCallback(id)
  }

  return (
    <div className={s.affair}>
      <span className={s.name}>{props.affair.name}</span>
      <span
        className={`${s.priority} ${
          props.affair.priority === 'high'
            ? s.red
            : props.affair.priority === 'middle'
            ? s.orange
            : s.green
        }`}
      >
        [{props.affair.priority}]
      </span>
      <button
        className={s.btn}
        onClick={() => deleteCallback(props.affair._id)}
      >
        X
      </button>
    </div>
  )
}

export default Affair
