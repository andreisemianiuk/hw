import React from 'react'
import 'rc-slider/assets/index.css'

const Slider = require('rc-slider')
const createSliderWithTooltip = Slider.createSliderWithTooltip
const Range = createSliderWithTooltip(Slider.Range)

type SuperDoubleRangePropsType = {
  onChangeRange?: (value: [number, number]) => void
  value?: [number, number]
  min: number
  max: number
  step: number | null
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = ({
  onChangeRange,
  value,
  min,
  max,
  step,
}) => {
  // сделать самому, можно подключать библиотеки

  return (
    <>
      <Range
        onChange={onChangeRange}
        value={value}
        min={min}
        max={max}
        step={step}
      />
    </>
  )
}

export default SuperDoubleRange
