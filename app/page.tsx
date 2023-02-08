

"use client";
import { Carousel, LeftButton, RightButton } from "chakra-ui-carousel";
import {Avatar, AvatarBadge, AvatarGroup,Image, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Wrap, WrapItem, Link} from '@chakra-ui/react';
import Navbar from "../components/Navbar"
import  Animation from "../components/Animation";
import Courses from "../components/Courses"
import Videos from "../components/Videos"
import Footer from'../components/Footer'
export default function Home() {
  return (
   <div className="md:max-xl:flex">
    <link rel="shortcut icon" href="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/PIAIC_Logo.svg/1200px-PIAIC_Logo.svg.png" type="image/x-icon" />
    <Breadcrumb  backgroundColor='gray.800' color='white' fontFamily="poppins" alignItems="right" alignContent="end">
  
  <Image margin="5" width="10" src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/PIAIC_Logo.svg/1200px-PIAIC_Logo.svg.png'/>
  <BreadcrumbItem className="py-5 my-3 sm:bg-yellow-500 " >

   <BreadcrumbLink margin="5" fontFamily="poppins" fontSize="30" href='#'>Home</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem>
    <BreadcrumbLink margin="5" fontFamily="poppins" fontSize="30" href='/about'>About</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem >
    <BreadcrumbLink className='hover:sky-700' margin="5" fontFamily="poppins" fontSize="30"href='/contact'>How It Works</BreadcrumbLink>
  </BreadcrumbItem>


    <Button alignContent='left'  textAlign='end' colorScheme={'red'}
              bg={'red.500'}>
    <Link  margin="5" fontFamily="poppins" fontSize="30"href='/WIT'>WIT</Link></Button>
 

</Breadcrumb>

<Navbar />
<Animation/>
<Courses />
<Videos />
<Footer />
   </div>
    
  )
}
