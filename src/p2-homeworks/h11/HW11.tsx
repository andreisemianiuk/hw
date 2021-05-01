import React, { useState } from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import s from './common/c7-SuperRange/SuperRange.module.css'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

function HW11() {
  const [value1, setValue1] = useState(0)
  const [value2, setValue2] = useState(100)

  const changeRange = (value: number) => {
    setValue1(value)
  }
  const changeDoubleRange = (value: [number, number]) => {
    setValue1(value[0])
    setValue2(value[1])
  }

  return (
    <div>
      <hr />
      homeworks 11
      {/*should work (должно работать)*/}
      <div className={s.container}>
        <div className={s.value}>{value1}</div>
        <SuperRange
          onChangeRange={changeRange}
          value={value1}
          // сделать так чтоб value1 изменялось
        />
      </div>
      <div className={s.container}>
        <div className={s.value}>{value1}</div>
        <SuperDoubleRange
          onChangeRange={changeDoubleRange}
          value={[value1, value2]}
          min={0}
          max={100}
          step={1}
          // сделать так чтоб value1 и value2 изменялось
        />
        <div className={s.value}>{value2}</div>
      </div>
      <hr />
      {/*для личного творчества, могу проверить*/}
      {/*<AlternativeSuperRange/>*/}
      {/*<AlternativeSuperDoubleRange/>*/}
      <hr />
    </div>
  )
}

export default HW11
