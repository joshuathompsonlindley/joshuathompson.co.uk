import { styled, keyframes } from '@stitches/react'

const wave = keyframes({
  '0%': {
    transform: 'rotate(0deg)'
  },
  '15%': {
    transform: 'rotate(14deg)'
  },
  '30%': {
    transform: 'rotate(-8deg)'
  },
  '40%': {
    transform: 'rotate(14deg)'
  },
  '50%': {
    transform: 'rotate(-4deg)'
  },
  '60%': {
    transform: 'rotate(10deg)'
  },
  '70%': {
    transform: 'rotate(0deg)'
  },
  '100%': {
    transform: 'rotate(0deg)'
  }
})

export const WavingEmojiPrimitive = styled('span', {
  animationName: `${wave}`,
  animationDuration: '1.5s',
  animationIterationCount: 1,
  transformOrigin: '70% 70%',
  display: 'inline-block',
  marginRight: '1rem'
})
