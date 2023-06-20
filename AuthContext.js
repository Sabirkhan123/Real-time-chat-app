import { onAuthStateChanged } from "firebase/auth";
import {auth} from "../firebase";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext()

export const AuthContextProvider = ({children}) =>{
    const [currentUser, setCurrentUser] = useState({});

    useEffect(()=>{
        const unsub = onAuthStateChanged(auth, (user) =>{
            setCurrentUser(user);
        });
       return () =>{
        unsub();
       }

    },[]);
    

    return (
   <AuthContext.Provider value={{currentUser}}>
    {children}
   </AuthContext.Provider>
    );
};



//====================================================================


// import { createContext, useEffect, useState } from 'react';
// import { auth, usersRef } from '../firebase';
// import { database } from '../firebase';


// export const AuthContext = createContext();

// export const AuthContextProvider = ({ children }) => {
//   const [currentUser, setCurrentUser] = useState(null);

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((user) => {
//       setCurrentUser(user);
//     });

//     return () => {
//       unsubscribe();
//     };
//   }, []);
//   const usersRef = database.ref('users');
//   useEffect(() => {
//     if (currentUser) {
//       // Update user's online status when logged in
//       usersRef(currentUser.uid).update({ online: true });
//     }

//     return () => {
//       if (currentUser) {
//         // Update user's online status when logged out
//         usersRef.child(currentUser.uid).update({ online: false });
//       }
//     };
//   }, [currentUser]);

//   return (
//     <AuthContext.Provider value={{ currentUser }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

