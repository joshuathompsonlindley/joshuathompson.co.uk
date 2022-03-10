import { styled } from '@stitches/react'
import { gray } from '@radix-ui/colors'

export const IconButtonPrimitive = styled('button', {
  all: 'unset',
  fontFamily: 'inherit',
  borderRadius: '100%',
  height: 25,
  width: 25,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  top: 10,
  right: 10,
  '&:hover': {
    backgroundColor: gray.gray4
  }
})

export const ButtonPrimitive = styled('button', {
  all: 'unset',
  display: 'inline-flex',
  borderRadius: '100%',
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500
})
