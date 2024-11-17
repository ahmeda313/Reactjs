import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider} from "react-router-dom"
import RootLayout from './routes/RootLayout'
import NewPost, {action as submitPostAction} from './routes/NewPost'
import {loader as postsLoader} from "./compopnents/PostList"
import PostDetails, {loader as postLoader} from './routes/PostDetails'


const route = createBrowserRouter([
  {
    path:"/", 
    element:<RootLayout/>, 
    children:[
    {
      path:"/",
      element:<App/>,
      loader:postsLoader,
      children:[
      {
        path:"create-post",
        element:<NewPost/>,
        action:submitPostAction
      },
      {
        path:"/:postId",
        element:<PostDetails/>,
        loader:postLoader
      }
    ]},
  ]}
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router={route}/>
  </React.StrictMode>
)
