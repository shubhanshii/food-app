import truck from '../assets/truck.png'
import Image from 'next/image'
import background from '../assets/Vector 1.png'
import pizza from '../assets/Group 289.png'
import {Box} from '@chakra-ui/react'
import {Flex} from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Show } from '@chakra-ui/react' 


export const Banner = ()=>{
    return(
        <div>
            <Flex overflow={'hidden'} justify={{base:'center', md:'space-between'}} direction={{base:'column', md:'row-reverse'}} alignItems={{base:'center'}}>
               
           <Box>
            <Box mt={{lg:'-16'}}>
            <Image src={pizza} alt=''/></Box>
            <Box position={'absolute'} top={0}>
<Image src={background} alt=''/>
            </Box>
            <Button background={'transparent'} border={'1px'} position={'absolute'} top={'3'} right={'6'} rounded={'3xl'} textColor={'white'} fontSize={{base:'xs', md:'lg'}}>Get in touch</Button>
           </Box>

           <Box paddingLeft={{base:'1rem',lg:'6rem'}}>
                <Show above='lg'>
                    <Box paddingTop={'40px'}>
                      
           <Image src={truck} alt=''></Image></Box>
           </Show>
     

           <Box  width={{base:'64',lg:'sm'}} fontWeight={'bold'} fontSize={{ base:'38px', lg:'6xl'}} textColor={'#0E2368'} paddingTop={{base:'60px',lg:'80px'}} lineHeight={{base:'44px',lg:'69px'}} textAlign={{base:'center', md:'start'}}>
           <h1>Discover the <span>Best</span> Food and Drinks</h1></Box>

           <Box paddingTop={'30px'} fontSize={{base:'xs',md:'md'}} width={{base:'15rem',lg:'19rem'}} textColor={'#0E2368'} textAlign={{base:'center', md:'left'}}>
           <p>Naturally made Healthcare Products for the better care  & support of your body</p></Box>
           <Button rounded={'full'} textColor={'white'} fontWeight={'medium'} background={'#E23744'} marginTop={{base:'2rem', md:'3rem'}} padding={{base:'10px', lg:'30px'}} fontSize={{base:'sm',lg:'xl'}} alignItems={'center'} marginLeft={{base:'4rem',md:'0'}} marginRight={{base:'2rem', md:'0'}}>Explore Now!</Button>
           </Box>

            </Flex>
            </div>
    )
}

