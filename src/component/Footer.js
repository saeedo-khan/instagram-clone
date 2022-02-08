import React from 'react';
import { makeStyles } from '@mui/styles';
import { Container,Box, Select, MenuItem } from '@mui/material';

const useStyles = makeStyles({
    list:{
        display: 'block',
        listStyleType:'none',
        margin: '0 auto',
        textAlign: 'center',
        maxWidth: '700px',
        width:'100%',
        ['@media(max-width:689px)']:{
            
        },
        '& > li':{
            fontSize: '12px',
            display: 'inline-block',
            color:'rgba(var(--f52,142,142,142),1)',
            cursor: 'pointer',
            margin: '0 0.5rem'
        }
    }
})

function Footer() {
    const classes = useStyles()
  return(
    <Box sx={{width: '100%', maxWidth: '935px'}}>
        <Container>
            <ul 
            className={classes.list}
            >
                <li>Meta</li>
                <li>About</li>
                <li>Blog</li>
                <li>Jobs</li>
                <li>Help</li>
                <li>API</li>
                <li>Privacy</li>
                <li>Terms</li>
                <li>Top Accounts</li>
                <li>Hashtags</li>
                <li>Location</li>
                <li>Instagram Lite</li>
            </ul>

            <ul 
            className={classes.list}
            style={{ marginTop: '0.7rem'}}
            >
                <li>Beauty</li>
                <li>Dance</li>
                <li>Fitness</li>
                <li>Food &amp; Drink</li>
                <li>Home &amp; Garden</li>
                <li>Music</li>
                <li>Visual Arts</li>
            </ul>

            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mt: 1,
                fontSize: '12px',
                color: 'rgba(var(--f52,142,142,142),1)',
                paddingY: 1
            }}>
                <Box sx={{
                    mr: 1
                }}>
                    <Select
                    value='En'
                    variant='standard'
                    sx={{
                        fontSize: '12px',
                        color: 'rgba(var(--f52,142,142,142),1)'
                    }}
                    >
                        <MenuItem value='En'>English</MenuItem>
                        <MenuItem value='Ar'>Arabic</MenuItem>
                        <MenuItem value='Fr'>France</MenuItem>
                    </Select>
                </Box>
                <Box>© 2022 Instagram from Meta</Box>
            </Box>
        </Container>
    </Box>
  );
}

export default Footer;
