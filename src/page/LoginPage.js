import React, { useEffect, useState } from 'react';
import { Box, Paper, Button, IconButton, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import FacebookIcon from '@mui/icons-material/Facebook';
import BackgroundHeader from "../imgs/43cc71bb1b43.png"
import instagramLetter from "../imgs/44c3aac.png"
import phoneImg1 from '../imgs/0a2d3016f375.jpg';
import phoneImg2 from '../imgs/6f03eb85463c.jpg';
import phoneImg3 from '../imgs/d6bf0c928b5a.jpg';
import appstore from '../imgs/app-store.png';
import googleplay from '../imgs/googleplay.png'
import '../styles/LoginPage.css'
import Footer from '../component/Footer';

const useStyles = makeStyles({
    section:{
        display: 'flex',
        alignItems:'center',
        justifyContent: 'center',
        flexDirection: 'column',
        overflow:'hidden',
        minHeight: '100vh',
        backgroundColor: 'rgba(var(--b3f,250,250,250),1)'
    },
    LoginContainer:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        backgroundColor: 'inherit',
        maxWidth: '935px',
        width: '100%',
        margin: '32px auto 0',
        paddingBottom: '100px'
    },
    imgSide:{
        background: `url(${BackgroundHeader})`,
        height: '600px',
        width: '450px',
        display: 'block',
        ['@media(max-width:875px)']:{
            display:'none'
        }
    },
    innerImgs:{
        display: 'flex',
        position: 'relative',
        margin: '99px 0 0 151px',
    },
    phoneImg:{
        height: '427px',
        width: '240px',
        position: 'absolute',
        left: '0',
        top: '0',
        opacity: '0',
        visibility: 'hidden',
        transition: 'all 1.5s ease'
    },
    switched:{
        opacity: '1',
        visibility: 'visible'
    },
    instaLetter: {
        display: 'block',
        width: '150px',
        height: '55px',
        objectFit: 'cover',
        margin: '0 auto',
        marginTop: '1rem',
        ['@media(max-width:450px)']:{
            zIndex: '10',
            visibility: 'visible',
            marginTop: '0'
        }
    },
    container:{
        width: '350px',
        height: '381px',
        padding: '10px 0',
        margin: '0 0 10px',
        ['@media(max-width:450px)']:{
            zIndex: '-1',
            visibility: 'hidden',
            padding: '0'
        }
    },
    formLogin:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '300px',
        margin: '0 auto',
        ['@media(max-width:450px)']:{
            zIndex: '10',
            visibility: 'visible'
        }
    },
    signIn:{
        width: '268px',
        height: '38px',
        margin: '0.5rem',
        outline: 'none'
    },
    floatLabel:{

    },
    passForm:{
        width: '25ch',
        textAlign: 'center',
        display: 'block',
        
    },
    password:{
        width: '268px',
        height: '38px',
        margin: '0.5rem',
        fontSize: '16px'
    },
    line:{
        width: '80px',
        height: '1px',
        display: 'block',
        position: 'relative',
        background: 'rgba(var(--b38,219,219,219),1)'
    },
    store:{
        width: '138px',
        height: '40px',
        display: 'inline-block',
        objectFit: 'cover',
        cursor: 'pointer',
        '&:first-of-type':{
            marginRight:'0.5rem'
        }
    }
})



function LoginPage() {
    const classes = useStyles()
    const images = [phoneImg1, phoneImg2, phoneImg3]
    const [showimgs, setShowimgs] = useState(0)
    const [isDisable, setIsDisable] = useState(true)
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')


    const handleData = e => {
        if(name.length && password.length){
            setIsDisable(false)
        }
    }


    useEffect(() => {
        
        setTimeout(() => {
            if(showimgs >= images.length-1){
                setShowimgs(0)

            }else{
                setShowimgs(showimgs + 1)
            }
            
        }, 5000)
        

    },[showimgs])

    


  return (
    <section className={classes.section}>
        <main>
            <article className={classes.LoginContainer}>
                <Box className={classes.imgSide}>
                    <Box className={classes.innerImgs}>
                        <img className={`${showimgs === 0? classes.switched : ''} ${classes.phoneImg}`} src={phoneImg1} alt="imgs1" />
                        <img className={` ${showimgs === 1? classes.switched : ''} ${classes.phoneImg}`} src={phoneImg2} alt="imgs2" />
                        <img className={` ${showimgs === 2? classes.switched : ''} ${classes.phoneImg}`} src={phoneImg3} alt="imgs3" />
                        {/* ${isSwitched && classes.switched} */}
                    </Box>
                </Box>

                <Box sx={{
                    mt: 5,
                    ['@media(max-width:450px)']:{
                        mt:0
                    }
                }}>
                    <Paper className={classes.container}>
                        <img src={instagramLetter} alt='instagram' className={classes.instaLetter}/>
                        <form className={classes.formLogin}
                        
                        >

                            <label className='label_login'>
                                <input 
                                placeholder="" 
                                className='input_login'
                                required
                                onChange={(e) => setName(e.target.value)}
                                />
                                <span className='text__label'>Phone number, email or usernames</span>
                            </label>


                            <label className='label_pass'>
                                <input 
                                type='password' 
                                placeholder="" 
                                className='input_pass'
                                required
                                onChange={(e) => setPassword(e.target.value)}
                                />
                                <span className='text__label'>Password</span>
                            </label>

                            <Button 
                            variant="contained"
                            color='primary'
                            size='small'
                            fullWidth
                            disabled
                            sx={{mt: 1, fontSize: '12px', width: '268px'}}
                            >Log in</Button>

                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                mt: 2
                            }}>
                                <Box className={classes.line}
                                sx={{mr: 2}}
                                ></Box>
                                <Box sx={{
                                    color: ' rgba(var(--f52,142,142,142),1)',
                                    fontSize: '12px'
                                }}>OR</Box>
                                <Box className={classes.line} 
                                sx={{ ml: 2}}
                                ></Box>
                            </Box>

                            <Button 
                            size='small'
                            sx={{
                                mt: 1,
                                '&:hover':{
                                    background: 'none'
                                }
                            }}
                            >
                                <IconButton sx={{color: '#385185'}}>
                                    <FacebookIcon />
                                </IconButton>
                                <Typography 
                                variant='body2' 
                                component='p' 
                                sx={{
                                    color:'#385185',
                                    fontSize: '13px',
                                    fontWeight: '600',
                                    textTransform: 'capitalize'
                                }}>Log in with facebook</Typography>
                            </Button>

                            <Box mt={1}>
                                <Typography variant='caption' 
                                component='p'
                                color='#385185'
                                sx={{cursor: 'pointer'}}
                                >Forgot password?</Typography>
                            </Box>
                        </form>
                    </Paper>

                    <Paper sx={{
                        ['@media(max-width:450px)']:{
                            zIndex: '-1',
                            visibility: 'hidden'
                        }
                    }}>
                        <Box sx={{
                            width: '350px',
                            height: '63px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            ['@media(max-width:450px)']:{
                                zIndex: '10',
                                visibility: 'visible',
                                margin: '1rem 0'
                            }
                        }}>
                            <Typography 
                            variant='subtitle2'
                            component='p'
                            >Don't have an account? <span style={{color: '#1565C0', cursor: 'pointer'}}>Sign up</span> </Typography>
                        </Box>
                    </Paper>

                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'space-around',
                        width: '350px',
                        height: '102px'
                    }}>
                        <Box sx={{mt: 1}}>
                            <Typography
                                variant='body2'
                                component='p'
                                sx={{fontWeight:'100'}}
                            >Get the app.</Typography>
                        </Box>
                        <Box sx={{mt: 1}}>
                            <img className={classes.store} src={appstore} alt='appstore' />
                            <img className={classes.store} src={googleplay} alt='googleplay' />
                        </Box>
                    </Box>

                </Box>
            </article>
        </main>

        <footer style={{paddingBottom: '2rem'}}>
            <Footer />
        </footer> 

    </section>
  );
}

export default LoginPage;
