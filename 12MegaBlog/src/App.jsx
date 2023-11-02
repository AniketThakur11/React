import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from './appwrite/auth'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
// useDispatch is the combination to use react with redux

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
        } else {
          dispatch(logout())
        }
      })
      .finally(() => setLoading(false))
  }, [])
  return !loading ? (
    <div className='min -h-screen flex flex-wrap content-between bg-gray-300'>
      <div className='w-full block'>
        <Header />
        <main>
          {/* {outlet} */}
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App
