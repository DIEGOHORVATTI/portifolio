'use client'

import { useState } from 'react'

import Image from 'next/image'

import { Box, Button, Link, Stack } from '@mui/material'

import { Syne } from 'next/font/google'

import { Iconify } from '@/components'

import { LogoSVG } from './LogoSVG'

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
        padding: '0.5rem 2rem',
        position: 'sticky',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 0 10px 5px rgba(0, 0, 0, 0.2)',
        margin: 8,
        top: 5,
        borderRadius: 5,
        backgroundColor: '#000000bf'
      }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
        <LogoSVG width={50} height={50} />

        <Box
          component="ul"
          className={syne.className}
          sx={{
            display: 'flex',
            gap: '3rem',
            '& li': {
              listStyleType: 'none'
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

        <Button
          variant="contained"
          color="primary"
          endIcon={<Iconify icon="line-md:arrow-small-right" />}
          onClick={() => alert('Conheça a Horvatti')}
          sx={{
            backgroundColor: 'black',
            borderRadius: 5,
            boxShadow: '0 0 10px 5px rgba(255, 255, 255, 0.2)',
            color: 'white',
            '&:hover': {
              backgroundColor: 'white',
              color: 'black'
            }
          }}
        >
          Conheça a Horvatti
        </Button>
      </Stack>
    </header>
  )
}
