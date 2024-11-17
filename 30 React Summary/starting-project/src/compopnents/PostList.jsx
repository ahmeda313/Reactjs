import { Suspense } from "react"
import Post from "./Post"
import classes from "./PostsList.module.css"


import { useLoaderData, Await, defer } from "react-router-dom"

export default function PostList(){

    const {posts} = useLoaderData()

    return (
        <Suspense fallback={<p style={{textAlign:"center"}}>Loading...</p>}>
        <Await resolve={posts}>
            {(posts)=>(         
        <>
        {posts?.length>0 &&       
        <ul className={classes.posts}>
            {posts.map(i=><Post key={i.id} id={i.id} author={i.author} title={i.text}/>)}
        </ul>}

        {posts?.length===0 &&
        <div style={{textAlign:"center", color:"white"}}>
            <h1>No posts yet</h1>
            <p>add some posts</p>
        </div>
        }</>)}
        </Await>
        </Suspense>
    )
}

export async function loader(){
    const res = await fetch("http://localhost:8080/posts")
    const data = await res.json()
  
    return defer({posts:data.posts})
  }