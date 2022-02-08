import React, { useState, createContext,useEffect } from 'react'
import  db  from '../firebase-config'
import { onSnapshot, collection } from '@firebase/firestore'

export const PostsContext = createContext();

export const PostsProvider = (props) => {
    const [posts, setPosts] = useState([])
    // const postsCollectionRef = collection(db, 'posts')


  useEffect(() => {

    // db.collection('posts').onSnapshot(snapshot => {
    //     setPosts(snapshot.docs.map(doc => doc.data()))
    // })

    onSnapshot(collection(db, 'posts'), (snapshot) => {
        setPosts(snapshot.docs.map(doc => doc.data()))
    })

    // try{
    //   const getPosts = async () => {
    //     const data = await getDocs(postsCollectionRef)
    //     setPosts(data.docs.map(doc => ({...doc.data(),id: doc.id})))
    //   }
    //   getPosts()
    // } catch(err) {
    //   console.log(err)
    // }

  },[])


  return (
    <PostsContext.Provider value={posts}>
        {props.children}
    </PostsContext.Provider>
  )
}