import React from 'react'
import InstApp from './page/InstApp';
import LoginPage from './page/LoginPage';
import CssBaseline from '@mui/material/CssBaseline';
import { PostsProvider } from './context/PostsContext';

function App() {



  return (
    <PostsProvider>
    <div className="App" style={{minHeight: '100vh'}}>
        <CssBaseline />
          {/* <LoginPage /> */}
        <InstApp/>
    </div>
    </PostsProvider>
  );
}

export default App;
