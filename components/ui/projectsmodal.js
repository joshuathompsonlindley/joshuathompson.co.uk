import Modal from "./modal";
import HelpIcon from "../icons/help";
import { BodyText, Link } from "../core/typography";
import { BodyTextContainer } from "../core/containers";

export function ProjectsModal() {
  return (
    <Modal
      trigger={
        <BodyTextContainer>
          <BodyText>
            <Link>See some things I’ve done recently</Link>
          </BodyText>
        </BodyTextContainer>
      }
      title={`Cool Things`}
    >
      <BodyTextContainer>
        
      </BodyTextContainer>
    </Modal>
  );
}
