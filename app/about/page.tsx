
"use client"
import { Carousel, LeftButton, RightButton } from "chakra-ui-carousel";
import {Link,Avatar, AvatarBadge, AvatarGroup,Image, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Wrap, WrapItem} from '@chakra-ui/react';
import Footer from "@/components/Footer";
import President from "@/components/President"




export default function About() {
  return (
    <div  className="md:max-xl:flex">
    <link rel="shortcut icon" href="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/PIAIC_Logo.svg/1200px-PIAIC_Logo.svg.png" type="image/x-icon" />
    <Breadcrumb backgroundColor='gray.800' color='white' fontFamily="poppins" alignItems="right" alignContent="end">
  
  <Image margin="5" width="10" src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/PIAIC_Logo.svg/1200px-PIAIC_Logo.svg.png'/>
  <BreadcrumbItem className="py-2 my-3" >

   <BreadcrumbLink margin="5" fontFamily="poppins" fontSize="30" href='/'>Home</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem  isCurrentPage>
    <BreadcrumbLink margin="5" fontFamily="poppins" fontSize="30" href='/about'>About</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem>
    <BreadcrumbLink className='hover:sky-700' margin="5" fontFamily="poppins" fontSize="30"href='/contact'>How It Works</BreadcrumbLink>
  </BreadcrumbItem>


  <Button alignContent='left'  textAlign='end' colorScheme={'red'}
              bg={'red.500'}>
    <Link  margin="5" fontFamily="poppins" fontSize="30"href='/WIT'>WIT</Link></Button>
</Breadcrumb>

<President />

<Footer />

   </div>
    
  )
}