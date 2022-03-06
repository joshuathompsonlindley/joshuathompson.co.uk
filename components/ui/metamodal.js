import Modal from "./modal";
import HelpIcon from "../icons/help";
import { BodyText, Link } from "../core/typography";
import { BodyTextContainer } from "../core/containers";

export function MetaModal() {
  return (
    <Modal trigger={<HelpIcon />} title={`<meta>`}>
      <BodyTextContainer>
        <BodyText>
          This website is mostly an experiment in order to learn React and get a
          greater depth of understanding of the current state of Web Design.
        </BodyText>
      </BodyTextContainer>
      <BodyTextContainer>
        <BodyText>
          The site was built using Next.js and React, with some Radix components
          along with a few custom ones.
        </BodyText>
      </BodyTextContainer>
      <BodyTextContainer>
        <BodyText>It's deployed on Vercel using GitHub.</BodyText>
      </BodyTextContainer>
      <BodyText>
        <Link>
          <a href="https://github.com/joshuathompsonlindley/web">
            You can browse the source here.
          </a>
        </Link>
      </BodyText>
    </Modal>
  );
}
