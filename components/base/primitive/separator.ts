import { styled } from '@stitches/react'
import { grayA } from '@radix-ui/colors'

export const SeparatorPrimitive = styled('div', {
  marginTop: '0.25rem',
  borderTop: '2px solid',
  borderColor: grayA.grayA3,
  paddingBottom: '1rem',

  '&.pad-lg': {
    marginTop: '1.5rem'
  }
})
