import { TextPrimitive } from './base/primitive/typography'
import { BodyText, Link } from './base/typography'
import { ContainerPrimitive } from './base/primitive/container'
import { FlexRowContainer } from './base/container'
import { SeparatorPrimitive } from './base/primitive/separator'

export function ProjectDescription ({ date, children, href }) {
  return (
    <ContainerPrimitive className='not-on-last pad-sm'>
      <FlexRowContainer>
        <TextPrimitive className='bold'>{date}</TextPrimitive>
        {href && (
          <Link href={href}>{href.split('https://')[1].split('/')[0]}</Link>
        )}
      </FlexRowContainer>
      <SeparatorPrimitive />
      <BodyText>{children}</BodyText>
    </ContainerPrimitive>
  )
}
