import React from 'react'
// import Message from './Message'
import AlternativeMessage from './AlternativeMessage'

// const messageData = {
//   avatar:
//     'http://abali.ru/wp-content/uploads/2014/02/gerb_belarus_1991_pogona-241x300.png',
//   name: 'Andrei',
//   message: "I've done homework from Ignat)",
//   time: new Date().toLocaleTimeString(),
// }

function HW1() {
  return (
    <div>
      <hr />
      homeworks 1{/*should work (должно работать)*/}
      {/*<Message*/}
      {/*  avatar={messageData.avatar}*/}
      {/*  name={messageData.name}*/}
      {/*  message={messageData.message}*/}
      {/*  time={messageData.time}*/}
      {/*/>*/}
      <hr />
      {/*для личного творчества, могу проверить*/}
      <AlternativeMessage />
      <hr />
    </div>
  )
}

export default HW1
