import React from 'react'
import { Box, Avatar, IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const Comments = ({username}) => {

  return (
    <Box sx={{
            display: 'flex',
            paddingY:2,
            paddingX:1,
            width: '100%'
        }}>
        <Box sx={{mr:2, cursor: 'pointer'}}>
            <Avatar>O</Avatar>
        </Box>

        <Box sx={{
            display: 'inline-block',
            width: '50ch',
            ['@media(max-width:900px)']:{
                width: '75%'
            }
        }}>
            <Box sx={{cursor:'pointer', mr: 1, display: 'inline-flex'}}>{username}</Box>
            <Box component='span' fontSize={13} 
            sx={{
                cursor: 'text',
                wordBreak: 'break-all'
            }}
            >ابطلانت شخستمر ئع استمر ئع استمر يابئع استمر يابطلئع استمر يابطلئع استمر يابطلئع استمر يابطلطل شخص رائع استمر يتمر ئع استمر ئع استمر يابئع استمر يابطلئع استمر يابطلئع استمر يابطلئع استمر يابطلطل شخص رائع استمر يتمر ئع استمر ئع استمر يابئع استمر يابطلئع استمر يابطلئع استمر يابطلئع استمر يابطلطل شخص رائع استمر يابطل</Box> 
        </Box>


        <Box sx={{marginLeft: 'auto', display: 'flex', alignItems: 'flex-start'}}>
            <IconButton>
                <EditIcon sx={{fontSize: 15}} />
            </IconButton>

            <IconButton>
                <DeleteIcon sx={{fontSize: 15}} />
            </IconButton>
        </Box>
    </Box>
    
  )
}

export default Comments