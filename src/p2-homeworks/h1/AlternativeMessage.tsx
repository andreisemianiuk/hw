import React, { ChangeEvent, useState } from 'react'
import styles from './Message.module.css'
import Message, { MessageDataType } from './Message'
import ava from './images/1.jpg'

function AlternativeMessage() {
  let [arr, setArr] = useState<MessageDataType[]>([
    {
      avatar: ava,
      name: 'Andrei',
      message: 'I\'ve done homework!',
      time: new Date().toLocaleTimeString()
    }
  ])
  let [value, setValue] = useState<string>('')
  
  const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    let text = e.currentTarget.value
    setValue(text)
  }
  
  const onClickHandler = () => {
    setArr([
      ...arr,
      {
        avatar: ava,
        name: 'Andrei',
        message: value,
        time: new Date().toLocaleTimeString()
      }
    ])
    setValue('')
  }
  
  return (
    <div>
      {arr.map((i) => (
        <Message
          avatar={i.avatar}
          name={i.name}
          message={i.message}
          time={i.time}
        />
      ))}
      <div className={styles.input}>
        <textarea
          className={styles.textarea}
          value={value}
          onChange={onChangeHandler}
          placeholder={'Enter message'}
        />
        <div>
          <button className={styles.btn} onClick={onClickHandler}>
            Add
          </button>
        </div>
      </div>
    </div>
  )
}

export default AlternativeMessage
