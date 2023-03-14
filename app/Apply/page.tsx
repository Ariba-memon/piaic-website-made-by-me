"use client"
import { Carousel, LeftButton, RightButton } from "chakra-ui-carousel";
import {Link,Avatar, AvatarBadge, AvatarGroup,Image, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Wrap, WrapItem} from '@chakra-ui/react';
import Footer from "@/components/Footer";
import Slides from "@/components/Slides";
import Program from '@/components/Program';
import Other from '@/components/Other'


export default function Apply() {
  return (
    <div  className="md:max-xl:flex">
    <link rel="shortcut icon" href="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/PIAIC_Logo.svg/1200px-PIAIC_Logo.svg.png" type="image/x-icon" />
    <header className="flex flex-wrap justify-between items-center">
      <a href="#" className="flex-1">
      <Image margin="5" width="10" src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/PIAIC_Logo.svg/1200px-PIAIC_Logo.svg.png'/>
      </a>
      <ul>
        <li>
          <a className="flex-grow hover: border-green-400"href="/">Home</a>
        </li>
        <li>
          <a className="flex-grow hover: border-green-400"href="/about">About Us</a>
        </li>
        <li>
          <a className="flex-grow text-hover:border-green-400"href="/contact">Contact</a>
        </li>
      </ul>
      <span className="flex-1 text-right">
        <a href="/WIT" className="btn">WIT</a>
      </span>

    </header>
<Slides/>

<Program />
<Other/>
<Footer />

   </div>
    
  )
}