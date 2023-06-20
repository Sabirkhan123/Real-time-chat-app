// import { doc, onSnapshot } from "firebase/firestore";
// import React, { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../context/AuthContext";
// import { ChatContext } from "../context/ChatContext";
// import { db } from "../firebase";

// const Chats = () => {
//   const [chats, setChats] = useState([]);

//   const { currentUser } = useContext(AuthContext);
//   const { dispatch } = useContext(ChatContext);

//   useEffect(() => {
//     const getChats = () => {
//       const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
//         setChats(doc.data());
//       });

//       return () => {
//         unsub();
//       };
//     };

//     currentUser.uid && getChats();
//   }, [currentUser.uid]);

//   const handleSelect = (u) => {
//     dispatch({ type: "CHANGE_USER", payload: u });
//   };

//   return (
//     <div className="chats">
//       {Object.entries(chats)?.sort((a,b)=>b[1].date - a[1].date).map((chat) => (
//         <div
//           className="userChat"
//           key={chat[0]}
//           onClick={() => handleSelect(chat[1].userInfo)}
//         >
//           <img src={chat[1].userInfo.photoURL} alt="" />
//           <div className="userChatInfo">
//             <span>{chat[1].userInfo.displayName}</span>
//             <p>{chat[1].lastMessage?.text}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };


// export default Chats


// // ================  DELETE AND AGAIN SHOW WHEN REFRESH  ========================

import { doc, onSnapshot, deleteDoc } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import { db } from "../firebase";

const Chats = () => {
  const [chats, setChats] = useState([]);

  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  useEffect(() => {
    const getChats = () => {
      
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        const data = doc.data();
        if (data) {
          const updatedChats = Object.keys(data).reduce((acc, uid) => {
            if (uid !== currentUser.uid && data[uid].userInfo) {
              acc[uid] = data[uid];
            }
            return acc;
          }, {});
          setChats(updatedChats);
        }
      });
  
      return () => {
        unsub();
      };
    };
  
    currentUser.uid && getChats();
  }, [currentUser.uid]);
  

  const handleSelect = (u) => {
    dispatch({ type: "CHANGE_USER", payload: u });
  };

  const handleDeleteUser = async (uid) => {
    // alert(uid)
    try {
      // Delete user from Firebase 'users' collection
      await deleteDoc(doc(db, "users", uid));
  
      // Delete user from Firebase 'userChats' subcollection
      await deleteDoc(doc(db, "users", currentUser.uid, "userChats", uid));
    
      // Delete user from sidebar
      setChats((prevChats) => {
        const updatedChats = { ...prevChats };
        delete updatedChats[uid];
        return updatedChats;
      });
  
      // Dispatch an action to handle user deletion in the ChatContext if necessary
      dispatch({ type: "DELETE_USER", payload: uid });
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };
  
 

  return (
    <div className="chats">
      {Object.entries(chats)
        .sort((a, b) => b[1].date - a[1].date)
        .map((chat) => (
          <div
          
            className="userChat"
            key={chat[0]}
            onClick={() => handleSelect(chat[1].userInfo)}
          >
          
            <img src={chat[1].userInfo.photoURL} alt="" />
            <div className="userChatInfo">
              <span>{chat[1].userInfo?.displayName}</span>
            
              <p>{chat[1].lastMessage?.text}</p>
              {chat[1].lastMessage?.img && (
                <img src={chat[1].lastMessage.img} alt="Attachment" />
              )}
              {chat[1].lastMessage?.fileURL && (
                <a href={chat[1].lastMessage?.fileURL}>Download File</a>
              )}
            </div>
            <button onClick={() => handleDeleteUser(chat[0])}>Remove</button>
            {/* <button onClick={() => handleDeleteUser()}>Delete</button> */}
          </div>
        ))}
    </div>
  );
};

export default Chats;






//******************  ONCE YOU DELETE YOU NEVER FIND AGAIN ****************************** */

// import { doc, onSnapshot, deleteDoc} from "firebase/firestore";
// import React, { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../context/AuthContext";
// import { ChatContext } from "../context/ChatContext";
// import { db } from "../firebase";

// const Chats = () => {
//   const [chats, setChats] = useState([]);
 
//   const { selectedUser, dispatch } = useContext(ChatContext);
//   const { currentUser } = useContext(AuthContext);
//   // const { dispatch } = useContext(ChatContext);

//   useEffect(() => {
//     const getChats = () => {
//       const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
//         const data = doc.data();
//         if (data) {
//           const updatedChats = Object.keys(data).reduce((acc, uid) => {
//             if (uid !== currentUser.uid && data[uid].userInfo) {
//               acc[uid] = data[uid];
//             }
//             return acc;
//           }, {});
//           setChats(updatedChats);
//         }
//       });

//       return () => {
//         unsub();
//       };
//     };

//     currentUser.uid && getChats();
//   }, [currentUser.uid]);

//   const handleSelect = (u) => {
//     dispatch({ type: "CHANGE_USER", payload: u });
//   };

//   const handleDeleteUser = async (uid) => {
//     try {
//       alert(uid)
//       // Delete user from Firebase 'users' collection
//       await deleteDoc(doc(db, "users", uid));
  
//       // Delete user's conversation from Firebase 'userChats' subcollection
//       await deleteDoc(doc(db, "userChats", currentUser.uid, "chats", uid));
    
//       // Remove the user from the chats state
//       setChats((prevChats) => {
//         const updatedChats = { ...prevChats };
//         delete updatedChats[uid];
//         return updatedChats;
//       });
  
//       // Close the conversation if the deleted user was currently selected
//       if (selectedUser && selectedUser.uid === uid) {
//         dispatch({ type: "CHANGE_USER", payload: null });
//       }
//     } catch (error) {
//       console.error("Error deleting user:", error);
//     }
//   };
  

//   return (
//     <div className="chats">
//       {Object.entries(chats)
//         .sort((a, b) => b[1].date - a[1].date)
//         .map((chat) => (
//           <div
//             className="userChat"
//             key={chat[0]}
//             onClick={() => handleSelect(chat[1].userInfo)}
//           >
//             <img src={chat[1].userInfo.photoURL} alt="" />
//             <div className="userChatInfo">
//               <span>{chat[1].userInfo.displayName}</span>
//               <p>{chat[1].lastMessage?.text}</p>
//               {chat[1].lastMessage?.img && (
//                 <img src={chat[1].lastMessage.img} alt="Attachment" />
//               )}
//               {chat[1].lastMessage?.fileURL && (
//                 <a href={chat[1].lastMessage.fileURL}>Download File</a>
//               )}
//             </div>
//             <button onClick={() => handleDeleteUser(chat[0])}>Remove</button>
//           </div>
//         ))}
//     </div>
//   );
// };

// export default Chats;






// // //--------------------------


