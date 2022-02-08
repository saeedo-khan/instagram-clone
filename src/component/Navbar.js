import React, { useState } from 'react';
import { AppBar, Container, IconButton, Toolbar,Box, InputBase, Avatar } from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import instaLogo from '../imgs/735145cfe0a4.png'
import { makeStyles } from '@mui/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import CancelIcon from '@mui/icons-material/Cancel';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import NewPost from './NewPost';

const useStyles = makeStyles({
  logo:{
    display: 'block',
    width: '103px',
    height: '29px',
    objectFit: 'cover'
  },
  inputSearch:{
    background:'rgba(var(--bb2,239,239,239),1)',
    padding: '0 3px',
    width: '100%',
    height: '100%'
  },
  wrapIcon:{
    marginRight: '0.5rem'
  }
})


function Navbar() {
  const [isFocus, setIsFocus] = useState(false)
  const [newPost, setNewPost] = useState(false)
  const classes = useStyles()
  return(
    <div>
      <NewPost showOverlay={{newPost, setNewPost}} />
      <AppBar position='sticky' sx={{
        backgroundColor: 'rgba(var(--d87,255,255,255),1)'
      }}>
          <Toolbar variant='dense'>
            <Container sx={{
              width: '975px',
              height: '60px',
              display: 'flex',
              alignItems: 'center'
            }}>

              <Box sx={{
                display: 'flex',
                alignItems: 'center',
                height: '100%',
                width: '36%'
              }}>
                  <img src={instaLogo} alt='logo' className={classes.logo} />
              </Box>

              <Box sx={{
                width: '268px',
                minWidth: '125px',
                height:'36px',
                borderRadius: '3px',
                marginLeft: 'auto'
                }}>

                  <InputBase 
                  className={classes.inputSearch}
                  placeholder='Search'
                  onFocus={() => setIsFocus(true)}
                  onBlur={() => setIsFocus(false)}
                  startAdornment={ 
                  <InputAdornment position='start'>
                    <IconButton>
                      {isFocus? <CancelIcon /> : <SearchIcon /> } 
                    </IconButton>
                    </InputAdornment>
                  }

                />
              </Box>

              <Box sx={{
                marginLeft: 'auto'
              }}>
                  <IconButton className={classes.wrapIcon}>
                    <HomeOutlinedIcon />
                  </IconButton>

                  <IconButton className={classes.wrapIcon}>
                    <SendOutlinedIcon />
                  </IconButton>

                  <IconButton className={classes.wrapIcon} onClick={() => setNewPost(!newPost)}>
                    <AddBoxOutlinedIcon />
                  </IconButton>

                  <IconButton className={classes.wrapIcon}>
                    <FavoriteBorderOutlinedIcon />
                  </IconButton>

                  <IconButton className={classes.wrapIcon}>
                    <Avatar sx={{width: 30, height:30, fontSize: 12}}>H</Avatar>
                  </IconButton>
              </Box>

            </Container>
              
          </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
