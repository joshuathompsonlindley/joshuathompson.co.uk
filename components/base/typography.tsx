import { TextPrimitiveProps } from '../../lib/types'
import { TextPrimitive } from './primitive/typography'

export function Heading ({ children }: TextPrimitiveProps): JSX.Element {
  return <TextPrimitive className='bold rem-lg'>{children}</TextPrimitive>
}

export function Subheading ({ children }: TextPrimitiveProps): JSX.Element {
  return <TextPrimitive className='medium rem-md'>{children}</TextPrimitive>
}

export function BodyText ({ children }: TextPrimitiveProps): JSX.Element {
  return <TextPrimitive className='regular rem-sm'>{children}</TextPrimitive>
}

export function Link ({ href, children }: TextPrimitiveProps): JSX.Element {
  return (
    <TextPrimitive className='bold rem-sm link'>
      <a href={href}>{children}</a>
    </TextPrimitive>
  )
}
