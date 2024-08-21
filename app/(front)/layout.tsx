import Footer from '@/components/FrontEnd/Footer'
import Image1 from '@/components/FrontEnd/Image'
import  Navbar from '@/components/FrontEnd/NavBar'
import NavigationBar from '@/components/FrontEnd/NavigiationBar'

import React, { ReactNode } from 'react'



export default async function Layout({children}: {children:ReactNode}) {
  return (
    
    <div>
     
      <NavigationBar/>
     
     <div className='space-y-2.5 '>
       {children}
 
      <Footer/>
    </div>
    </div>
  )
}