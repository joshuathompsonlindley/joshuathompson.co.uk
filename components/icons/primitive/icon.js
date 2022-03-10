import { styled } from '@stitches/react'
import { gray } from '@radix-ui/colors'

export const IconLinkPrimitive = styled('span', {
  paddingRight: '45px',
  alignSelf: 'center !important',
  justifySelf: 'center !important',

  '&:last-of-type': {
    paddingRight: 0
  },

  '&:hover': {
    textDecoration: 'none'
  },

  '&a, svg': {
    color: gray.gray8,
    transition: '0.1s ease-in-out',
    height: '30px',
    alignSelf: 'center',

    '&:hover': {
      color: gray.gray11,
      cursor: 'pointer'
    }
  }
})
