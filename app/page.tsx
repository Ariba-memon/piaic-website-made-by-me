

"use client";
import { Carousel, LeftButton, RightButton } from "chakra-ui-carousel";
import {Avatar, AvatarBadge, AvatarGroup,Image, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Wrap, WrapItem, Link} from '@chakra-ui/react';
import Navbar from "../components/Navbar"
import  Animation from "../components/Animation";
import Courses from "../components/Courses"
import Videos from "../components/Videos"
import Main from '../components/Main'
import Footer from'../components/Footer'
export default function Home() {
  return (
   <div className="md:flex flex-wrap ">



       <Main />
    
    <link rel="shortcut icon" href="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/PIAIC_Logo.svg/1200px-PIAIC_Logo.svg.png" type="image/x-icon" />
    

<Navbar />
<Animation/>
<Courses />
<br />
<br />
<Videos />
<Footer />
   </div>
    
  )
}
