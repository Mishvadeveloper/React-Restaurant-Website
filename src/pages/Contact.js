import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Table, TableContainer, Typography, Paper, TableHead, TableRow, TableCell, TableBody } from '@mui/material'
import SupportAgentIcon from '@mui/icons-material/SupportAgent'
import MailIcon from '@mui/icons-material/Mail'
import CallIcon from '@mui/icons-material/Call'
import ContactImage from '../images/contactimage.jpg'
const Contact = () => {
  return (
    <Layout>
      <Box sx={{backgroundImage: `url(${ContactImage})`, backgroundSize:'cover', height:'50wh',backgroundRepeat:'no-repeat', backgroundPosition:'center'  }}>
       <Box sx={{my:10, ml:10, '& h4':{fontWeight:'bold', mb:2, textAlign:'center'}, '@media (max-width:600px)':{ textAlign:'center', ml:3}  }}>

        <Typography variant='h4'>
          CONTACT US
        </Typography>
        
        <p style={{fontSize:'3rem', fontWeight:'bold', fontFamily:'serif', textAlign:'center'}} >
            We are here for you!!
        </p>

       </Box>

      <Box sx={{my:5, width: '600px', m:'auto auto 50px auto' ,  '@media (max-width:600px)':{
        width: '300px',

      }}}>
        <TableContainer component={Paper} sx={{backgroundColor:'transparent', border:'none'}}>
          <Table aria-label='contact table'>
            <TableHead>
              <TableRow >
               <TableCell sx={{color:'black'}} align='center'> Contact Details </TableCell>     
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell> 
                  <SupportAgentIcon sx={{color:'red', pt:1 }} /> 1800-00-000 (tollfree) 
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell> 
                  <MailIcon sx={{color:'skyblue', pt:1 }} /> helpMyrest@gmail.com 
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell> 
                  <CallIcon sx={{color:'skyblue', pt:1 }} /> +91 1238988023 
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      </Box>
    </Layout>
  )
}

export default Contact