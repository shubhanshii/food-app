// app/page.tsx
'use client'
import { Link } from '@chakra-ui/next-js'
import {Banner} from './components/Banner'
import {About} from './components/About'
import { Footer } from './components/Footer'
import Articles from './components/Articles'

export default function Page() {
  return (
    <main>
   <Banner/>
 <About/>  
 <Articles/>
 <Footer/>
   </main>
  )
}