"use client"
import { Container, chakra, shouldForwardProp ,Text, Heading} from '@chakra-ui/react';
import { motion, isValidMotionProp } from 'framer-motion';

const ChakraBox = chakra(motion.div, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

export default function App() {
  return (
    <div  className="md:max-xl:flex"><> <Text fontStyle='revert' fontSize='30'  backgroundColor="gray.800" fontFamily="poppins" color='white' alignItems="center" padding='10' margin="0 auto">Admissions are now open in Web 3.0 & Metaverse Program in Karachi,Lahore,Islamabad For Queries contact PIAIC helpline <b>03082220203</b></Text><Container h="100vh" display="flex" alignItems="center" justifyContent="center">
      <ChakraBox
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}

        // @ts-ignore no problem in operation, although type error appears.
        transition={{
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
        }}
        padding="2"
        backgroundColor='red.400'
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="100px"
        height="100px"
        fontFamily="poppins"
      >

        Latest Program
      </ChakraBox>
   
  
    </Container>
    <blockquote className="text-2xl font-semibold italic text-center text-slate-900">
    Certified 
    <br />
  <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-red-400 relative inline-block">
    <span className="relative text-white">Web 3.0</span>
  </span>
  <br />
  and Metaverse Developer:
</blockquote>
    </>
    </div>
  )
    }