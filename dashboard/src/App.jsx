import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginButton from './components/LoginButton.jsx'
import UserBadge from './components/UserBadge.jsx'
import LogoutButton from './components/LogoutButton.jsx'


function App() {

  return (
    <>
      <LoginButton />
      <LogoutButton />
      <UserBadge />
    </>
  )
}

export default App
