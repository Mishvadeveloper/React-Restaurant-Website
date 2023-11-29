import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Typography } from '@mui/material'
import AboutPage from '../images/aboutpage.jpg'

const About = () => {
  return (
    <Layout>
      <div>
      <Box sx={{
        backgroundImage:`url(${AboutPage})`,
        backgroundSize: 'cover',
        height:'50vh',
        my:10,
        textAlign:'center',
        p:2,
        '& h4':{
          fontWeight:'bold',
          my:2,
          fontSize:'2rem',
          color:'lightblack',
          fontFamily: 'Rubik',
        },
        '& p':{
          textAlign: 'justify',
          color:'white',
          fontSize:'1.5rem',
        },
        '@media (max-width:600px)':{
          mt:0,
          '& p':{
            fontSize: '1rem'
          },
          '& h4':{
            fontSize:'1.5rem'
          }
        }
      }}>
        <Typography variant='h4' >
          We belive good food offer great smile!!!
        </Typography>
        <p>
        At My Restaurant , we create good memories by serving original-style deep-dish cusine using a recipe that has been passed down over generations. Our restaurant provides an authentic dining experience that is unique to the area.We believe it’s our responsibility to protect and preserve our oceans and marine life for generations to come!!!    
        </p>
        <br/>
        <p>
        We Stand For Something Good in everything we do: This means carefully sourced premium ingredients from like-minded purveyors we admire and love; thoughtful, well-crafted and responsible design for its place; and deep community support through donations, events and volunteering.Through a shared commitment to excellence, we are dedicated to the uncompromising quality of our food, service, people and profit, while taking exceptional care of our guests and staff.We will continuously strive to surpass our own accomplishments and be recognized as a leader in our industry.
        </p>
        <br/>
        <p>
        Our mission to Stand For Something Good expanded to include taking care of our team, sourcing premium ingredients from like-minded partners, designing our Shacks responsibly, supporting our communities through donations, events, and volunteering—and much more.”
        </p>
      </Box>
      </div>
    </Layout>
  )
}

export default About