import React, { useState, useRef, useEffect } from 'react';
import { Avatar, Box, IconButton, InputBase, Paper, Stack, Typography, Modal, Divider, TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MessageIcon from '@mui/icons-material/Message';
import Picker, { SKIN_TONE_MEDIUM_DARK } from 'emoji-picker-react';
import Comments from './Comments';

const useStyles = makeStyles({
    wrapPost:{
        width: '614px',
        margin: '1% 0',
        display: 'block',
        boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'
    },
    container:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '614px',
        height: '60px',
        padding: '2% 0'
    },
    userInfo:{
        display: 'flex',
        alignItems: 'center',
        marginLeft: '2%'
    },
    imageConfig:{
        objectFit: 'cover',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        display: 'block',
    },
    overlay: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalImg:{//879
        // height: '100%',
        // overflow: 'hidden',
        // width: '60%',
        // background: 'black',
        // display: 'flex',
        // alignItems: 'center',
        position: 'relative',
        aspectRatio: 'auto 1/1',
        background: 'black',
        display:'flex',
        alignItems: 'center',
        '& img':{
            maxWidth: '100%',
            display: 'block',
        },
        ['@media(max-width:1000px)']:{
            '& img':{
                height:'100%'
            }
        }
    },
    modalComments:{
        width: '40%',
        ['@media(max-width:1000px)']:{
            width: '100%'
        },

        // ['@media(max-width:740px)']:{
        // }
        
    }
})

function Post({caption, image, username}) {

    const classes = useStyles()

    const [showEmoji, setShowEmoji] = useState(false)
    const [modalEmoji, setModalEmoji] = useState(false)
    const [value, setValue] = useState('')
    const [open, setOpen] = useState(false)


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
    <>
    <Modal
    open={open}
    className={classes.overlay}
    onClose={()=> setOpen(false)}
    >
        <Box sx={{
            backgroundColor: 'white',
            maxwidth: '1340px',
            width: '80vw',
            height: '45vw',
            display: 'flex',
            borderRadius: '15px',
            overflow: 'hidden',
            ['@media(max-width:1000px)']:{
                flexDirection: 'column',
                height: '100%',
                overflowY: 'scroll',
                borderRadius: '0',
            },
            ['@media(max-width:740px)']:{
                width: '95%',
            }
        }}>
            <Box className={classes.modalImg}>
                <img src={image} alt='img'/>
            </Box>
            
            <Box className={classes.modalComments}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    paddingY: 2,
                    paddingX: 1,
                    height: '5vw',
                    ['@media(max-width:1000px)']:{
                        paddingY: 4
                    }
                }}>
                    <Box sx={{pr: 2, flex: '0 1 5%'}}>
                    <Avatar variant='circular'>
                        L
                    </Avatar>
                    </Box>
                    
                    <Box sx={{cursor: 'default', fontSize: 14, flex: '0 1 15%'}}>{username}</Box>
                    <Box sx={{marginLeft: 'auto', pr: 1, fontSize: 13, cursor: 'pointer'}}>• • •</Box>
                </Box>

                <Divider />

                {/* comments section */}

                <Box sx={{
                    height: '30vw',
                    overflowY: 'scroll',
                    ['@media(max-width:1000px)']:{
                        height: '300px',
                        overflowY: 'scroll'
                    }
                }}>
                    <Stack>
                        <Comments name={username}/>
                        <Comments name={username}/>
                        <Comments name={username}/>
                        <Comments name={username}/>
                    </Stack>
                </Box>

                

                {/* footer */}
                <Box sx={{
                    width: '95%',
                    ['@media(max-width:1000px)']:{
                        height: '60px',
                        padding: 1
                    }
                }}>
                    <Box sx={{
                        width: '100%',
                        display: 'flex',
                        ['@media(max-width:1000px)']:{
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-start'
                        }
                        
                     }}>
                        <Box sx={{
                            flex: '0 1 10%',
                            position: 'relative',
                            ['@media(max-width:1000px)']:{
                                flex: '0 1 10%',
                                position: 'relative',
                            }
                            }}>
                        <IconButton ref={ref}>
                            <EmojiEmotionsIcon onClick={()=> setModalEmoji(!modalEmoji)}/>
                            <Box sx={{
                                position: 'absolute',
                                bottom: '45px',
                                left: '10px',
                                ['@media(max-width:1000px)']:{
                                    position: 'absolute',
                                    left: '50%',
                                    bottom: '45px',
                                    zIndex: '10'
                                }
                            }}>
                                <Picker
                                onEmojiClick={onEmojiClick}
                                disableAutoFocus={true}
                                skinTone={SKIN_TONE_MEDIUM_DARK}
                                groupNames={{smileys_people: 'PEOPLE'}}
                                native
                                pickerStyle={{
                                    display: modalEmoji? 'flex': 'none'
                                }}
                                />
                            </Box>
                        </IconButton>
                        </Box>

                        <Box sx={{
                            flex: '0 1 80%',
                            ['@media(max-width:1000px)']:{
                                flex: '0 1 80%'
                            }
                        }}>
                            <TextField 
                            variant='standard' 
                            sx={{wordBreak: 'break-all'}}
                            placeholder='Add comments..'
                            onChange={(e)=> setValue(e.target.value)}
                            value={value}
                            fullWidth        
                            />
                        </Box>

                        <Box sx={{cursor: 'pointer', marginLeft: 'auto', pr: 1}}>Post</Box>
                    </Box>
                </Box>
                
            </Box>
            
        </Box>
    </Modal>

    <Stack className={classes.wrapPost}>
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
            <img className={classes.imageConfig} src={image} alt="img" />
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
                    onClick={() => setOpen(true)}
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
    
</Stack>
</>
  );
}

export default Post;
