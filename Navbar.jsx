import React, { useContext, useState } from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'
import { BsThreeDotsVertical } from 'react-icons/bs'

const Navbar = () => {
  const { currentUser } = useContext(AuthContext)
  const [logout, setlogout] = useState(false)

  const logOutHandle = () => {
    setlogout(!logout)
  }

  return (
    <div className='navbar'>
      {/* <span className='logo'>RealtimeChat</span> */}
      <div className={`user ${logout ? 'show' : ''}`}>
        <img src={currentUser.photoURL} alt="" />
        <span className="username">{currentUser.displayName}</span>
        <span><button style={{ display: logout ? 'block' : 'none' }}
          onClick={() => signOut(auth)}>Logout </button><BsThreeDotsVertical className='threeDot'
            onClick={logOutHandle} /></span>
      </div>
    </div>
  )
}

export default Navbar
