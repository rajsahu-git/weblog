import React from 'react'
import Image from 'next/image'
import Logo  from '../static/logo.jpg'
import Link from 'next/link'
function Header() {
    return (
        <header className='flex items-center justify-between space-x-2 font-bold px-10 py-5'>
            <div className='flex items-center space-x-2'>
                <Link href="/">
                    <Image className='rounded-full' src={Logo} alt="logo" width={50} height={ 50 } />
                </Link>
                <h1>weblog</h1>
            </div>
            <div>
                <Link href="https://rajsahu.vercel.app/" className='px-5 py-3 text-sm md:text-base bg-gray-900 text-[#F7AB0A] flex items-center rounded-full text-center'>Portfolio</Link>
            </div>
            
      </header>
  )
}

export default Header