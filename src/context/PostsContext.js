import React, { useState, createContext,useEffect } from 'react'
import  { db }  from '../firebase-config'
import { onSnapshot, collection } from '@firebase/firestore'

export const PostsContext = createContext();

export const PostsProvider = (props) => {
    const [posts, setPosts] = useState([])


  useEffect(() => {


    onSnapshot(collection(db, 'posts'), (snapshot) => {
        setPosts(snapshot.docs.map(doc => doc.data()))
    })


  },[])


  return (
    <PostsContext.Provider value={posts}>
        {props.children}
    </PostsContext.Provider>
  )
}



