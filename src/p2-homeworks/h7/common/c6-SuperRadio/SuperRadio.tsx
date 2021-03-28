import React, { ChangeEvent, InputHTMLAttributes, DetailedHTMLProps } from 'react'
import s from '../../HW7.module.css'
type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
  options?: any[]
  onChangeOption?: (option: any) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
  {
    className,
    type, name,
    options, value,
    onChange, onChangeOption,
    ...restProps
  }
) => {
  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    onChangeOption && onChangeOption(e.target.value)
    onChange && onChange(e)
  }
  
  const mappedOptions: any[] = options ? options.map((o, i) => ( // map options with key
    <label className={s.label} key={name + '-' + i}>
      <input
        className={s.radio}
        type={'radio'}
        onChange={onChangeCallback}
        name={name}
        value={o}
        checked={value === o}
      />
      {o}
    </label>
  )) : []
  
  return (
    <>
      {mappedOptions}
    </>
  )
}

export default SuperRadio
