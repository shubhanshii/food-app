import Image from "next/image"
import about from '../assets/pharmasict-serving-customer-drug-store 1.png'
import {Flex, Heading, Text} from '@chakra-ui/react'
import {Box} from '@chakra-ui/react'
import { Button } from "@chakra-ui/react"
import {Show} from '@chakra-ui/react'

export const About =()=>{
    return(
        <div>
            <Flex marginTop={{base:'4rem', xl:'7rem'}} direction={{base:'column', md:'row'}} background={'rgb(247, 248, 251)'} justify={'space-around'}>
            <Box pl={{md:'4rem', lg:'4rem', xl:'8rem'}} width={{base:'300',md:'130rem',lg:'80rem', xl:'100rem'}}>
                <Show above="md">
                
            <Image src={about} alt="" /></Show></Box>
                <Box textAlign={{base:'center', md:'start'}} px={{base:'2rem', md:'3rem', lg:'6rem', xl:'9rem'}}>
                    <Heading textColor={'#0E2368'} fontSize={{base:'2xl',md:'5xl'}} paddingTop={{base:'5rem', md:'0',xl:'24'}} pb={'1rem'}>About Us</Heading>
                    <Text fontSize={{base:'xs', md:'medium'}} py={'1rem'}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. t has survived not only five centuries.</Text>
                    <Button background={'#E23744'} rounded={'full'} textColor={'white'} fontWeight={'medium'} mb={'3rem'} alignContent={'flex-start'}>Read More</Button>
                </Box>
            </Flex>
        </div>
    )
}