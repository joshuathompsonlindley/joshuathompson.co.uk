import Modal from './base/modal'
import { IconLink } from './icons/icon'
import { BodyText, Link } from './base/typography'
import { BodyTextContainer } from './base/container'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { Pre } from './base/primitive/pre'

export default function MetaModal (): JSX.Element {
  return (
    <Modal
      trigger={<IconLink style='align-self: center' icon={faQuestionCircle} />}
      title={<Pre>&lt;meta&gt;</Pre>}
    >
      <BodyTextContainer>
        <BodyText>
          This website is mostly an experiment in order to learn React and get a
          greater depth of understanding of the current state of Web Design.
        </BodyText>
      </BodyTextContainer>
      <BodyTextContainer>
        <BodyText>
          It was built using <Link href='https://nextjs.org/'>Next.js</Link> and{' '}
          <Link href='https://reactjs.org/'>React</Link>, with some{' '}
          <Link href='https://www.radix-ui.com/'>Radix</Link> components styled
          with <Link href='https://stitches.dev/'>Stitches</Link> and{' '}
          <Link href='https://www.radix-ui.com/colors'>Radix Colors</Link>.
        </BodyText>
      </BodyTextContainer>
      <BodyTextContainer>
        <BodyText>
          It&apos;s currently deployed on{' '}
          <Link href='https://vercel.com/'>Vercel</Link>.
        </BodyText>
      </BodyTextContainer>
      <BodyText>
        <Link href='https://github.com/joshuathompsonlindley/web'>
          You can browse the source here.
        </Link>
      </BodyText>
    </Modal>
  )
}
