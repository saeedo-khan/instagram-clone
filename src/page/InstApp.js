import React from 'react';
import Navbar from '../component/Navbar';
import Posts from '../component/Posts';
import '../styles/InstApp.css'
function InstApp({posts}) {
  console.log(posts)
  return(
    <div className='instApp'>
        <Navbar/>
        <Posts/>
    </div>
  );
}

export default InstApp;
