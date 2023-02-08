"use client";
import { Carousel, LeftButton, RightButton } from "chakra-ui-carousel";
import {Image,Avatar, AvatarBadge, AvatarGroup, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Wrap, WrapItem, Link} from '@chakra-ui/react';
import New from '@/components/New'
import Women from '@/components/women'
import Gallery from '@/components/Gallery'

import Footern from "@/components/Footern";
export default function WIT() {
  return (
    <div  className="md:max-xl:flex">
    <link rel="shortcut icon" href="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/PIAIC_Logo.svg/1200px-PIAIC_Logo.svg.png" type="image/x-icon" />
    <Breadcrumb  backgroundColor='gray.800' color='white' fontFamily="poppins" alignItems="right" alignContent="end">
  
  <Image margin="5" width="10" src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/PIAIC_Logo.svg/1200px-PIAIC_Logo.svg.png'/>
  <BreadcrumbItem className="py-2 my-3" >

   <BreadcrumbLink margin="5" fontFamily="poppins" fontSize="30" href='/'>Home</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem>
    <BreadcrumbLink margin="5" fontFamily="poppins" fontSize="30" href='/about'>About</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem isCurrentPage>
    <BreadcrumbLink  margin="5" fontFamily="poppins" fontSize="30"href='/contact'>Contact</BreadcrumbLink>
  </BreadcrumbItem>


    <Button alignContent='left'  textAlign='end' colorScheme={'red'}
              bg={'red.500'}>
    <Link  margin="5" fontFamily="poppins" fontSize="30"href='/WIT'>WIT</Link></Button>
 

</Breadcrumb>


<New />
<Women/>
<Gallery/>
<Footern />
   </div>
    
  )
}