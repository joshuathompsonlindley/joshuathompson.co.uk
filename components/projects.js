import { HeadingContainer } from './base/container'
import { ProjectDescription } from './project'
import { ContainerPrimitive } from './base/primitive/container'
import { Link, Subheading } from './base/typography'

export default function ProjectsSection () {
  return (
    <ContainerPrimitive className='pad-lg'>
      <HeadingContainer>
        <Subheading>Some things I&apos;ve done recently:</Subheading>
      </HeadingContainer>
      <ProjectDescription date='03/2022'>
        Started this website as a way to learn React and the JavaScript
        ecosystem, and to start my journey to become a Full Stack Software
        Engineer. Previously I did all of my web design with pure CSS and small
        amounts of Vanilla JavaScript.
      </ProjectDescription>
      <ProjectDescription href='https://overflow.digital' date='02/2022'>
        Founded Overflow Digital with my friends{'  '}
        <Link href='https://glewis.xyz'>George Lewis</Link> and{' '}
        <Link href='https://katerinatiddy.com'>Katerina Tiddy</Link> to create
        the software we want to freely. Currently we&apos;re planning and prototyping
        product ideas, and enjoying the new Costco memberships.
      </ProjectDescription>
      <ProjectDescription
        href='https://cadosecurity.com/automate-incident-response-with-the-new-tines-and-cado-response-integration/'
        date='10/2021'
      >
        Published my first post &apos;Automate Incident Response with the new Tines
        and Cado Response Integration&apos; on the Cado Security blog. This has been
        the first time I&apos;ve written anything outside of an academic context, and
        was probably one of the biggest challenge I&apos;ve encountered
        professionally (so far).
      </ProjectDescription>
      <ProjectDescription href='https://cadosecurity.com/' date='07/2021'>
        Started my latest adventure at{' '}
        <Link href='https://cadosecurity.com'>Cado Security</Link> as a Backend
        Software Engineer. I mainly help design, implement and maintain the Cado
        disk extraction and processing engine. I&apos;ve also created platform
        integrations with some of the top SOAR (Security Orchestration and
        Automation) platforms. Currently, I&apos;m learning to transition to a
        full stack role by the end of 2022, in order to assist our growing frontend team.
      </ProjectDescription>
    </ContainerPrimitive>
  )
}
