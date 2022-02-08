import React, { useState, useRef, useEffect } from 'react';
import { Avatar, Box, IconButton, InputBase, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MessageIcon from '@mui/icons-material/Message';
import Picker, { SKIN_TONE_MEDIUM_DARK } from 'emoji-picker-react';

const useStyles = makeStyles({
    wrapPost:{
        width: '614px',
        maxHeight: '806px',
        height: 'auto',
        margin: '1rem 0'
    },
    container:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '614px',
        height: '60px'
    },
    userInfo:{
        display: 'flex',
        alignItems: 'center',
        marginLeft: '2%'
    },
    image:{
        objectFit: 'cover',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        display: 'block',
    }
})

// let useClickOutside = handler => {

//     let domNode = React.useRef()
  
//     React.useEffect(() => {
//       let maybeHandler = e =>{
//         if(!domNode.current.contains(e.target)){
//           handler()
//         }
//       }
  
//       document.addEventListener('click', maybeHandler)
//       return()=>{
//         document.removeEventListener('click', maybeHandler)
//       }
//     })
//     return domNode
// }

function Post({caption, image, username}) {
    const classes = useStyles()

    const [showEmoji, setShowEmoji] = useState(false)
    const [value, setValue] = useState('')
    
    const ref = useRef()

    // Add emoji with text
    const onEmojiClick = (e, emojiObject) =>{
        setValue(prevInput => prevInput + emojiObject.emoji)
    }

    // click outside element for toggle

    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setShowEmoji(false);
        }
    };

    useEffect(() =>{
        document.addEventListener('click', handleClickOutside, true)
        return() => {
            document.removeEventListener('click', handleClickOutside, true)
        }
    },[])


    
  return (
    <Paper className={classes.wrapPost}>
    <Box className={classes.container}>
        <Box component='header' className={classes.userInfo}>
            <Avatar sx={{mr: 2, bgcolor:'red'}}>H</Avatar>
            <Typography>{username}</Typography>
        </Box>
        <Box>
            <IconButton sx={{
                mr:1,
                '&:hover':{
                    backgroundColor: 'transparent'
                }
            }}>
                <Box sx={{fontSize:10, color:'rgba(0,0,0,0.8)'}}>• • •</Box>
            </IconButton>
        </Box>
    </Box>


    <Box sx={{
        overflow: 'hidden',
        maxHeight: '708px',
        height: 'auto'
    }}>
        <Box>
            <img className={classes.image} src={image} alt="printer" />
        </Box>
    </Box>


    <Box className={classes.comments}>
        <Paper>

        <Box sx={{
            display:'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            flexDirection: 'column',
            ml:1
        }}>


            <Box> 
                <Box component='section'>
                    <IconButton size='large'>
                        <FavoriteIcon />
                    </IconButton>

                    <IconButton size='large'>
                        <MessageIcon />
                    </IconButton>
                </Box>

                <Box component='section'>
                    <Typography 
                    variant='caption'
                    sx={{wordBreak: 'break-all'}}
                    >Liked by 320</Typography>
                </Box>

                <Box component='section' sx={{mb: 1}}>
                    <Typography 
                    variant='caption' 
                    component='p'
                    sx={{wordBreak: 'break-all'}}
                    >
                    <Box component='span' sx={{
                        fontWeight: 'bold'
                    }}>{username}</Box> {caption} </Typography>
                    
                </Box>

                <Box>
                    <Typography 
                    variant='subtitle'
                    component='p'
                    sx={{color:'#707070', cursor: 'pointer'}}
                    >View all 3 comments</Typography>
                    
                    <Box>
                        <Typography 
                        variant='caption' 
                        component='p'
                        sx={{wordBreak: 'break-all'}}
                        >
                        <Box component='span' sx={{
                            fontWeight: 'bold',
                            cursor: 'pointer',
                        }}>saeedo0o</Box> nice shot mate i like it </Typography>
                    </Box>
                </Box>




            </Box>

            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                borderTop: '1px solid rgba(112, 112, 112, 0.1)',
                padding: '0.2rem 0',
                marginTop:'0.8rem'
            }}>
                <Box sx={{position: 'relative'}}>
                    <IconButton ref={ref}>
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

                <Box sx={{ml:1, width: '70%'}}> 
                    <InputBase
                    sx={{wordBreak: 'break-all'}}
                    placeholder='Add comments..'
                    onChange={(e)=> setValue(e.target.value)}
                    value={value}
                    fullWidth
                    />
                </Box>
                <Box sx={{marginLeft: 'auto', mr: 1,cursor: 'pointer'}}>Post</Box>
            </Box>

        </Box>

        </Paper>
    </Box>
    
</Paper>
  );
}

export default Post;
