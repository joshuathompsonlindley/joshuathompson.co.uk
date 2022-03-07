import Head from "next/head";
import { IconLink } from "../components/icons/icon";
import MetaModal from "../components/meta";
import ProjectsModal from "../components/projects";
import WavingEmoji from "../components/icons/emoji";
import { TextPrimitive } from "../components/base/primitive/typography";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  FlexColumnContainer,
  PageContainer,
  HeadingContainer,
  SubheadingContainer,
  BodyTextContainer,
  SocialIconsContainer,
} from "../components/base/container";
import {
  Heading,
  Subheading,
  BodyText,
  Link,
} from "../components/base/typography";
import {
  faGithub,
  faLinkedin,
  faSpotify,
} from "@fortawesome/free-brands-svg-icons";

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
              <WavingEmoji>👋</WavingEmoji>
              I'm Joshua, I Guess.
            </Heading>
            <MetaModal />
          </HeadingContainer>
          <SubheadingContainer>
            <Subheading>
              a Product and Software Engineer from Wales.
            </Subheading>
          </SubheadingContainer>
          <BodyTextContainer>
            <BodyText>
              Currently I’m a Backend Engineer (making steps to be Full Stack)
              at <Link href="https://cadosecurity.com">Cado Security</Link>,
              where I help design and maintain the core processing engine for
              the first native cloud investigation platform.
            </BodyText>
          </BodyTextContainer>
          <BodyTextContainer>
            <BodyText>
              I’m also the Co-Founder and Head of Product and Technology at{" "}
              <Link href="https://overflow.digital">Overflow Digital</Link>, a
              company I started with my friends to experiment and break things.
            </BodyText>
          </BodyTextContainer>
          <ProjectsModal />
          <BodyTextContainer>
            <BodyText>
              <TextPrimitive className="bold">
                Want to contact me?
              </TextPrimitive>
            </BodyText>
          </BodyTextContainer>
          <SocialIconsContainer>
            <IconLink
              href="https://linkedin.com/in/joshuathompsonlindley"
              icon={faLinkedin}
            />
            <IconLink
              href="https://github.com/joshuathompsonlindley"
              icon={faGithub}
            />
            <IconLink
              href="https://open.spotify.com/user/nxxq0c7necw4ujd0sxt1hla5c?si=48d84c06417f4a9d"
              icon={faSpotify}
            />
            <IconLink
              href="mailto://joshua@overflow.digital"
              icon={faEnvelope}
            />
          </SocialIconsContainer>
        </FlexColumnContainer>
      </PageContainer>
    </div>
  );
}
