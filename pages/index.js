import Head from "next/head";
import {
  FlexColumnContainer,
  PageContainer,
  HeadingContainer,
  SubheadingContainer,
  BodyTextContainer,
  SocialIconsContainer,
} from "../components/core/containers";
import {
  Heading,
  Subheading,
  BodyText,
  Link,
} from "../components/core/typography";
import {
  GithubIconLink,
  LinkedInIconLink,
  MailIconLink,
  SpotifyIconLink,
} from "../components/icons/social";
import { MetaModal } from "../components/ui/metamodal";
import { ProjectsModal } from "../components/ui/projectsmodal";

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
              <span className="waving-hand">👋</span> I'm Joshua, I Guess.
            </Heading>
            <MetaModal />
          </HeadingContainer>
          <SubheadingContainer>
            <Subheading>
              a Product and Software Engineer from Cardiff.
            </Subheading>
          </SubheadingContainer>
          <BodyTextContainer>
            <BodyText>
              Currently I’m a Backend Engineer (making steps to be Full Stack)
              at{" "}
              <Link>
                <a href="https://cadosecurity.com">Cado Security</a>
              </Link>
              , where I help design and maintain the core processing engine for
              the first native cloud investigation platform.
            </BodyText>
          </BodyTextContainer>
          <BodyTextContainer>
            <BodyText>
              I’m also the Co-Founder and Head of Product and Technology at{" "}
              <Link>
                <a href="https://overflow.digital">Overflow Digital</a>
              </Link>
              , a company I started with my friends to experiment and break
              things.
            </BodyText>
          </BodyTextContainer>
          {/* <ProjectsModal /> */}
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
