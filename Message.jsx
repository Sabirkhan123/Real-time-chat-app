import React, { useContext, useEffect, useRef, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { ChatContext } from '../context/ChatContext';
import { arrayRemove, doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';


const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);
  const messageRef = useRef();
  const [showButton, setShowButton] = useState(false);


  const date = new Date(message.date.seconds * 1000)
  const formattedTime = date.toLocaleTimeString();
const formattedDate = date.toLocaleDateString('en-US');


  useEffect(() => {
    messageRef.current?.scrollIntoView({ behavior: 'smooth' });
    

  }, [message]);

  const handleDelete = async () => {
    if (currentUser.uid === message.senderId) {
      await updateDoc(doc(db, 'chats', data.chatId), {
        messages: arrayRemove(message),
        
      });
    } else {
      const filteredMessages = data.messages.filter((m) => m.id !== message.id);
      await updateDoc(doc(db, 'chats', data.chatId), {
        messages: filteredMessages,
      });
    }
  };

  const handleContextMenu = (event) => {
    event.preventDefault();
    setShowButton(true);
  };

  return (
    <div
      ref={messageRef}
      className={`message ${message.senderId === currentUser.uid && 'owner'}`}
      onContextMenu={handleContextMenu}
    >

      <div className='messageInfo'>
        <img
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt=''
        />
        <span>{formattedTime}</span>
        <span>{formattedDate}</span>
      </div>
      <div className='messageContent'>
        <p>{message.text}</p>
        {message.img && <img src={message.img} alt='' />}
        {currentUser.uid === message.senderId && showButton && (
          // <button onClick={handleDelete}>Delete</button>
          <button onClick={handleDelete}><i className="fa-sharp fa-solid fa-trash fa-xl"></i></button>
          
        )}
      </div>
    </div>
  );
};

export default Message;












