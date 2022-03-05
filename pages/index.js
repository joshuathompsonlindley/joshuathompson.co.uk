import Head from "next/head";
import { FlexColumnContainer, PageContainer, HeadingContainer, SubheadingContainer, BodyTextContainer, SocialIconsContainer } from "../components/core/containers";
import { Heading, Subheading, BodyText, Link } from "../components/core/typography";
import HelpIcon from "../components/icons/help";
import { GithubIconLink, LinkedInIconLink, MailIconLink, SpotifyIconLink } from "../components/icons/social";

export default function Home() {
  return (
    <div className="app">
      <PageContainer>
        <Head>
          <title>Joshua Thompson-Lindley</title>
        </Head>
        <FlexColumnContainer>
          <HeadingContainer>
            <Heading>
              <span>👋</span> I'm Joshua, I Guess.
            </Heading>
            {/* <HelpIcon /> */}
            {/* <Modal>
              <ModalTrigger>
                <HelpIcon />
              </ModalTrigger>
              <ModalContent>
                <div>?</div>
              </ModalContent>
            </Modal> */}
          </HeadingContainer>
          <SubheadingContainer>
            <Subheading>a Product and Software Engineer from Cardiff.</Subheading>
          </SubheadingContainer>
          <BodyTextContainer>
            <BodyText>
              Currently I’m a Backend Engineer (making steps to be Full Stack) at <Link><a href="https://cadosecurity.com">Cado Security</a></Link>, where I help design and maintain the core processing engine for the first native cloud investigation platform.
            </BodyText>
          </BodyTextContainer>
          <BodyTextContainer>
            <BodyText>
              I’m also the Co-Founder and Head of Product and Technology at <Link><a href="https://overflow.digital">Overflow Digital</a></Link>, a company I started with my friends to experiment and break things.
            </BodyText>
          </BodyTextContainer>
          {/* <BodyTextContainer>
            <BodyText>
              <Link>See some things I’ve done recently</Link>
            </BodyText>
          </BodyTextContainer> */}
          <BodyTextContainer>
            <BodyText>
              <span className="bold">Want to contact me?</span>
            </BodyText>
          </BodyTextContainer>
          <SocialIconsContainer>
            <LinkedInIconLink />
            <GithubIconLink />
            <SpotifyIconLink />
            <MailIconLink />
          </SocialIconsContainer>
        </FlexColumnContainer>
      </PageContainer>
    </div>
  );
}
