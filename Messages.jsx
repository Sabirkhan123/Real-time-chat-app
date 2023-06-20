import React, { useContext, useEffect, useState } from 'react';
import Message from './Message';
import { ChatContext } from '../context/ChatContext';
import { onSnapshot, doc } from 'firebase/firestore';
import { db } from '../firebase';

const Messages = () => {
  const { data } = useContext(ChatContext);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(doc(db, 'chats', data.chatId), (doc) => {
      if (doc.exists()) {
        setMessages(doc.data().messages);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [data.chatId]);

  return (
    <div className='messages'>
      {messages.map((m) => (
        <Message message={m} key={m.id} />
        
      ))}
    </div>
  );
};

export default Messages;







//=====================update code=====================//









// import React, { useContext, useEffect, useRef, useState } from 'react';
// import Message from './Message';
// import { ChatContext } from '../context/ChatContext';
// import { onSnapshot, doc } from 'firebase/firestore';
// import { db } from '../firebase';

// const Messages = () => {
//   const { data } = useContext(ChatContext);
//   const [messages, setMessages] = useState([]);

//   useEffect(() => {
//     const unsubscribe = onSnapshot(doc(db, 'chats', data.chatId), (doc) => {
//       if (doc.exists()) {
//         setMessages(doc.data().messages);
//       }
//     });

//     return () => {
//       unsubscribe();
//     };
//   }, [data.chatId]);
//   const arr = []

//   const messagesByDate = messages.reduce((acc, curr) => {
//     const date = new Date(curr.date.seconds * 1000);
//     if (!acc[date]) {
//       acc[date] = [];
//     }
//     acc[date].push(curr);
//     return acc;
//   }, {});

//   return (
//     <div className='messages'>
//       {Object.keys(messagesByDate).map((date) => {
//         const day = new Date(date).toLocaleDateString('en-US');
//         const messagesOnDay = messagesByDate[date];

//         return (
//           <div key={date}>
//             <strong>{day}</strong>
//             <ul>
//               {messagesOnDay.map((message) => (
//                 <li key={message.id}>
//                   <Message message={message} />
//                 </li>
//               ))}
//             </ul>
//           </div>
//         );
//       })}
//     </div>
//   );
// }; 

// export default Messages;



