import React, { useContext} from 'react';
import { Box} from '@mui/material';
import Post from './Post';
import { PostsContext } from '../context/PostsContext'
function Posts() {

  const posts  = useContext(PostsContext)

  return(
    <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    }}>
      {posts.map(post => <Post {...post}/>)}
    </Box>
  );
}

export default Posts;
