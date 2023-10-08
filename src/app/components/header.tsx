'use client'
import Link from 'next/link'
import React from 'react'
//import { useRouter } from 'next/router'
export const Header = () => {
  //const router = useRouter()
  

  
  return (
<header className="text-gray-600 body-font">

<ul>

      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about">About Us</Link>
      </li>
      <li>
        <Link href="/login">Login</Link>
      </li>
      <li>
        <Link href="/register">Register</Link>
      </li>
    </ul>

</header>
  )
}
