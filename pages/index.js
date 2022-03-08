import Head from "next/head";
import MetaModal from "../components/meta";
import ProjectsSection from "../components/projects";
import WavingEmoji from "../components/icons/emoji";

import {
  FlexColumnContainer,
  PageContainer,
  HeadingContainer,
  SubheadingContainer,
  BodyTextContainer,
} from "../components/base/container";
import {
  Heading,
  Subheading,
  BodyText,
  Link,
} from "../components/base/typography";
import ContactSection from "../components/contact";

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
            <Subheading>a Software Engineer from Wales.</Subheading>
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
          <ProjectsSection />
          <ContactSection />
        </FlexColumnContainer>
      </PageContainer>
    </div>
  );
}
