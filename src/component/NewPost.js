import React, { useState, useRef, useEffect } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Button from '@mui/material/Button';
import { Box, Typography, Input, IconButton } from '@mui/material';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import Picker, { SKIN_TONE_MEDIUM_DARK } from 'emoji-picker-react';
import { addDoc, collection } from 'firebase/firestore';
import db from '../firebase-config';


//  Reusable clickoutside hook
let useClickOutside = handler => {

  let domNode = useRef()

  useEffect(() => {
    let maybeHandler = e =>{
      if(domNode.current && !domNode.current.contains(e.target)){
        handler()
      }
    }

    document.addEventListener('mousedown', maybeHandler)
    return()=>{
      document.removeEventListener('mousedown', maybeHandler)
    }
  })
  return domNode
}


export default function NewPost({showOverlay}) {

  const [picture, setPicture] = useState(null);
  const [imgData, setImgData] = useState(null);
  const [value, setValue] = useState('')
  const [showEmoji, setShowEmoji] = useState(false)

  const { newPost, setNewPost} = showOverlay




// show emoji beside the text 
const onEmojiClick = (e, emojiObject) =>{
  setValue(prevInput => prevInput + emojiObject.emoji)
}

  const handleClose = () => {
    setNewPost(false);
  };


  // Preview uploaded image
  const onChangePic = e => {
    if(e.target.files[0]){
      setPicture(e.target.files[0])
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        setImgData(reader.result)
      });
      reader.readAsDataURL(e.target.files[0])
    }
  }


  // Click outside the element with ref
  const domNode = useClickOutside(()=> { setShowEmoji(false) })
  const formToggle = useClickOutside(() => { setNewPost(false) })

  async function addData(){
    await addDoc(collection(db, 'posts'), {caption: value, image:imgData })
  }
  




  return (
    <div>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={newPost}
      >
        <Box sx={{
          position: 'absolute',
          right: '20px',
          top: '10px',
          fontSize: 25,
          cursor: 'pointer'
        }}
        onClick={handleClose}
        >
          X
        </Box>

        <form ref={formToggle}>
          <Box sx={{
            width: '708px',
            height: '751px',
            maxHeight: '751px',
            bgcolor: 'rgba(255,255,255,1)',
            borderRadius: '10px',
            overflowY: 'scroll'
          }}>

            <Box sx={{
              padding: '0.5rem 0',
              borderBottom: '1px solid rgba(0,0,0,0.1)',
              display: 'flex',
              alignItems: 'center',
              marginBottom: '3rem'
            }}>
              <Box sx={{
                flex: '1',
                textAlign: 'center'
              }}>
              <Typography variant='h6' component='h2' sx={{
                color:'black', 
                fontWeight: '500',
              }}>Create New Post</Typography>
              </Box>

                <Box sx={{
                  mr:1
                }}>
                <Button variant='contained'
                onClick={()=> addData}
                 sx={{
                  display: 'block',
                  textTransform: 'capitalize'
                }}>Post</Button>
                </Box>

            </Box>
            
            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              height: '100%'
             }}>

                <Box sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>

                  <Box sx={{
                    width:'650px',
                    height:'auto',
                    border: '1px solid rgba(0,0,0,0.1)',
                    padding: '1rem',
                    textAlign: 'center',
                    marginBottom: '1rem',
                    overflowY: 'auto',
                    maxHeight: '600px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                      <img src={imgData} 
                      width='500' 
                      height='auto'
                      style={{display: 'block'}}
                      />
                  </Box>
                  <Box mt={1} mb={1}>
                  <Typography variant='h5' color='primary'>Add Photo and Video Here</Typography>
                  </Box>

                <label >
                  <Input type='file' placeholder='Select' onChange={onChangePic}/>
                </label>
                </Box>

                <Box sx={{
                textAlign: 'center',
                width: '80%',
                margin: '0 auto',
                marginTop: '1rem'
              }}>

                <textarea 
                type='text' 
                placeholder='Write a caption..'
                resize='none'
                onChange={(e)=> setValue(e.target.value)}
                value={value}
                style={{
                  width: '70%',
                  wordBreak: 'break-all',
                  resize: 'none',
                  padding: '0.5rem',
                  minHeight: '60px',
                  fontSize: '14px',
                  fontFamily: 'sans-serif',
                  marginTop: '1rem'
                }}
                />

                <IconButton ref={domNode} >
                  <EmojiEmotionsIcon onClick={()=> setShowEmoji(!showEmoji)}/>
                  <Box sx={{
                      position: 'absolute',
                      right: '15px',
                      bottom: '45px'
                  }}>
                      <Picker
                      onEmojiClick={onEmojiClick}
                      disableAutoFocus={true}
                      skinTone={SKIN_TONE_MEDIUM_DARK}
                      groupNames={{smileys_people: 'PEOPLE'}}
                      native
                      pickerStyle={{
                          display: showEmoji? 'flex': 'none'
                      }}
                      />
                    </Box>
              </IconButton>
                
              </Box>
            </Box>


              
          </Box>
        </form>
        
      </Backdrop>
    </div>
  );
}