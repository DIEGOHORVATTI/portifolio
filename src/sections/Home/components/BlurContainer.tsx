'use client'

import { keyframes, styled } from '@mui/material/styles'

const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const BlurContainer = styled('div')(() => ({
  zIndex: 0,
  top: '15%',
  left: '30%',
  transform: 'translate(-50%, -50%)',
  width: '550px',
  height: '550px',
  filter: 'blur(50px)',
  position: 'absolute',
  backgroundImage: 'linear-gradient(var(--color-primary) 0%, var(--color-tertiary) 77%, var(--color-secondary) 100%)',
  animation: `${rotateAnimation} 50s cubic-bezier(0.8, 0.2, 0.2, 0.8) alternate infinite`,
  borderRadius: '30% 70% 70% 30%/30% 30% 70% 70%'
}))
