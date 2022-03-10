import { styled } from '@stitches/react'

export const ContainerPrimitive = styled('div', {
  '&.pad-sm': {
    paddingBottom: '1.5rem !important'
  },
  '&.pad-lg': {
    paddingBottom: '2rem !important'
  },
  '&.pad-no-fw': {
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  '&.pad-xs': {
    paddingBottom: '0.5rem !important'
  },
  '&.not-on-last:last-of-type': {
    paddingBottom: '0px !important'
  }
})

export const PageContainerPrimitive = styled(ContainerPrimitive, {
  display: 'flex',
  flexDirection: 'row',
  padding: '5% 25%',
  justifyItems: 'center',
  alignItems: 'center',
  '@media  only screen and (max-width: 600px)': {
    padding: '10% 10%'
  }
})

export const FlexColumnContainerPrimitive = styled(ContainerPrimitive, {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  padding: 0,
  height: '100%',
  width: '100%'
})

export const FlexRowContainerPrimitive = styled(ContainerPrimitive, {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'stretch',
  padding: 0,
  width: '100%',

  '&.centre': {
    justifyContent: 'center'
  },

  '&.no-full-width': {
    width: 'initial'
  }
})

export const AppContainerPrimitive = styled('div', {
  backgroundColor: '#f4eeee',
  border: 0,
  margin: 0
})
