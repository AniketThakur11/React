import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { AuthLayout, Login } from './components/index.js'


import AddPost from './Pages/AddPost.jsx'
import Signup from './Pages/Signup.jsx'
import EditPost from './Pages/EditPost.jsx'
import Home from './Pages/Home.jsx'
import Post from './Pages/Post.jsx'

import AllPosts from './Pages/AllPosts.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={
        <Home />
      } />
      <Route path='/login' element={
        <AuthLayout authentication={false}>
          <Login />
        </AuthLayout>
      } />
      <Route path='/signup' element={
        <AuthLayout authentication={false}>
          <Signup />
        </AuthLayout>
      } />
      <Route path='/all-posts' element={
        <AuthLayout authentication>
          {" "}
          <AllPosts />
        </AuthLayout>
      } />
      <Route path='/add-post' element={
        <AuthLayout authentication>
          {" "}
          <AddPost />
        </AuthLayout>
      } />
      <Route path='/edit-post/:slug' element={
        <AuthLayout authentication>
          {" "}
          <EditPost />
        </AuthLayout>
      } />
      <Route path='/post/:slug' element={
        <Post />
      } />

    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)

