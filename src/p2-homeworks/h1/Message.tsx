import React from 'react'
import styles from './Message.module.css'

export type MessageDataType = {
  avatar: string
  name: string
  message: string
  time: string
}

function Message(props: MessageDataType) {
  return (
    <div className={styles.message}>
      <img className={styles.avatar} src={props.avatar} alt={'avatar'} />

      <div className={styles.angle} />

      <div className={styles.content}>
        <div className={styles.name}>{props.name}</div>
        <div className={styles.text}>{props.message}</div>
        <div className={styles.time}>{props.time}</div>
      </div>
    </div>
  )
}

export default Message
