import './App.css'
import LoginButton from './components/LoginButton.jsx'
import UserBadge from './components/UserBadge.jsx'
import LogoutButton from './components/LogoutButton.jsx'
import Navbar from './components/NavBar.jsx'


function App() {

  return (
    <>
      <Navbar />
      <LoginButton />
      <LogoutButton />
      <UserBadge />
    </>
  )
}

export default App
