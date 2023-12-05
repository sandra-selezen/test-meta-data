import Link from 'next/link'
import React from 'react'

export const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link href={'/page-1'}>Page 1</Link></li>
          <li><Link href={'/page-2'}>Page 2</Link></li>
        </ul>
      </nav>
    </header>
  )
}
