"use client"
import { Box,Heading,Text,Image } from '@chakra-ui/react';

export default function Videos(){
    return(
      <div  className="md:max-xl:flex">
     <><Heading textAlign='center' backgroundColor="gray.800" fontFamily="Roboto" color='white' alignItems="center" padding='10' margin="0 auto">Videos</Heading><Box
        as='iframe'
        src='https://www.youtube.com/embed/m4g0zd4E_bo'
        width="417"
        height="480"
        text-align='center' 
        alignContent="center"
        margin="50"
        padding='10'
     
   
        sx={{
          aspectRatio: '16/9'
        }} />
        
        <Box
        as='iframe'
      
        src='https://www.youtube.com/embed/TWpX1SVjrtU?list=PL4lZMpZtayiETLN0rpE9JH155EEShtt3m'
        width="417"
        height="480"
        alignContent="center"
        margin="50"
        padding='10'
        sx={{
          aspectRatio: '16/9'
        }} />
        <Heading textAlign='center' backgroundColor="gray.800" fontFamily="Roboto" color='white' alignItems="center" padding='10' margin="0 auto">Sucess Stories</Heading><Box
        as='iframe'
        src='https://www.youtube.com/embed/kMRVJAsMjBg'
        width="417"
        height="480"
     
        alignContent="center"
        margin="50"
      
        sx={{
          aspectRatio: '16/9'
        }} />
        <Box
        as='iframe'
       
        src='https://www.youtube.com/embed/TS6WdZebsNU'
        width="417"
        height="480"
       
        alignContent="center"
        margin="50"
       
        sx={{
          aspectRatio: '16/9'
        }} />

        
        <Heading textAlign='center' backgroundColor="gray.800" fontFamily="Roboto" color='white'  alignItems="center" padding='10' margin="10 auto">Strategic Partners</Heading>
        <Image 
        alignItems='center'
        margin='19'
        float= 'left'
        width= '33.33%'
        padding= '5px'
        src='https://www.piaic.org/static/media/panacloudfootericon.130c4779.png'
       
        />
          <Image 
        alignItems='center'
        margin='19'
        float= 'left'
        width= '33.33%'
        padding= '5px'
        src='https://iconape.com/wp-content/files/pd/194086/svg/194086.svg'
       
        />
       

        </>
    </div>
    )
}

