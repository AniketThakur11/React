import './App.css'
import UserContextProvider from './Context/UserContextProvider'
import Login from './components/LOgin'
import Profile from './components/Profile'

function App() {


  return (
    <UserContextProvider>
      <h1>Mini-Context</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
