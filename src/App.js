import React from 'react'
import InstApp from './page/InstApp';
import LoginPage from './page/LoginPage';
import { PostsProvider } from './context/PostsContext';
import {  Route, Routes } from 'react-router-dom';

function App() {



  return (
    <PostsProvider>
    <div className="App" style={{minHeight: '100vh'}}>
      <Routes>
        <Route exact path='/' element={<LoginPage />}/>
        <Route exact path='/home' element={<InstApp />} />
      </Routes>
    </div>
    </PostsProvider>
  );
}

export default App;
