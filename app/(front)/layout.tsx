import Footer from '@/components/FrontEnd/Footer'
import { Navbar } from '@/components/FrontEnd/NavBar'
import React, { ReactNode } from 'react'



export default async function Layout({children}: {children:ReactNode}) {
  return (
    <div className=''>
      <Navbar />
       {children}
      <Footer/>
    </div>
  )
}