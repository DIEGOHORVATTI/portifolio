'use client'

import Image from 'next/image'

import { Box, Link, Stack } from '@mui/material'

import { Syne } from 'next/font/google'

import { usePathname } from 'next/navigation'
import { useState } from 'react'

const syne = Syne({ subsets: ['latin'] })

const navItems = [
  {
    label: 'HOME',
    href: '/'
  },
  {
    label: 'ABOUT',
    href: '#about'
  },
  {
    label: 'BLOG',
    href: '#blog'
  },
  {
    label: 'CONTACT',
    href: '#contact'
  },
  {
    label: 'LOGIN',
    href: '#login'
  }
]

export const Header = () => {
  const hash = location.hash.replace('#', '') || '/'

  const [pathname, setPathname] = useState(hash)

  return (
    <header
      style={{
        padding: '2rem 4rem'
      }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/d/d2/Ems-sem-fundo-logo.png"
          alt="image"
          width={80}
          height={80}
        />

        <Box
          component="ul"
          className={syne.className}
          sx={{
            display: 'flex',
            gap: '3rem',
            '& li': {
              listStyleType: 'none',
              fontWeight: 'bold',
              fontSize: '1.2rem',
              fontStyle: 'italic',
              '& a': {
                '&:hover': {
                  color: 'blue'
                }
              }
            }
          }}
        >
          {navItems.map(({ label, href }, index) => {
            const hashActual = href.replace('#', '') || '/'

            return (
              <li key={index} onClick={() => setPathname(hashActual)}>
                <Link href={href} underline="none" color={pathname === hashActual ? 'blue' : 'white'}>
                  {label}
                </Link>
              </li>
            )
          })}
        </Box>

        <a href="#" className="button">
          Contact
        </a>
      </Stack>
    </header>
  )
}
