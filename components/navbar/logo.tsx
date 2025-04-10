import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

export default function Logo() {
  return (
    <Link href="/" className='flex items-center font-black text-3xl gap-1 group'>
        <Image
          src="https://i.ibb.co/TjWT7Lw/download-removebg-preview.png"
          alt="Takitok Logo"
          width={32}
          height={32}
        />
        <p>
          <span className='text-primary'>Taki</span>Tok
        </p>
    </Link>
  )
}
