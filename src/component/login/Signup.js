import React, {  useState } from 'react';
import { Button, Box, FormControl, TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';
import logo from '../../imgs/44c3aac.png'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";




const useStyles = makeStyles({
    textField:{
        '& p':{
            color: 'red'
        }
    }
})

const Signup = () => {

 
  const initialVal = {username: '', email: '', password: ''}
  const [formValues, setFormValues] = useState(initialVal)

  const register = () => {
    console.log('cliked')
  }

  const handleChange = e => {
    const { name, value } = e.target;
    setFormValues({...formValues, [name]: value})
    console.log(formValues)
  }

  const classes = useStyles()

  return (
    
        <Box
        sx={{
            width: '900px',
            bgcolor: 'white',
            padding: '2rem 0',
            borderRadius: '10px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
        }}>

            <Box sx={{
                textAlign: 'center',
                mb: 5
            }}>
                <img src={logo} alt='logo'/>
            </Box>
            
            
            <FormControl sx={{
                display: 'flex',
                alignItems:'center',
                justifyContent: 'center',
            }}>
                
            <TextField
            sx={{
                width: '70%',
                mb:2
            }}
                helperText="Please enter your email"
                label="Email"
                required
                value={formValues.email}
                onChange={handleChange}
                name="email"
                // FormHelperTextProps={{
                //     color: name? 'red !important' : 'black'
                //   }}
                />

            <TextField
            sx={{
                width: '70%',
                mb:2
            }}
                helperText="Please enter your name"
                label="Username"
                required
                name='username'
                value={formValues.username}
                onChange={handleChange}
                />

            <TextField
            sx={{
                width: '70%',
                mb:2
            }}
                helperText="Please enter your password"
                label="Password"
                type='password'
                required
                name='password'
                value={formValues.password}
                onChange={handleChange}
                />
            <TextField
            sx={{
                width: '70%',
                mb:2
            }}
                helperText="Please enter your password"
                label="Repeat Password"
                type='password'
                required
                />

                <Button 
                sx={{width: '50%', margin: '2rem 0 1rem 0'}}
                variant='contained' 
                color='primary'
                onClick={register}
                >SignUp</Button>

            </FormControl>
        </Box>
  );
};

export default Signup;
