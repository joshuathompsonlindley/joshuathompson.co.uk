import Modal from "./base/modal";
import { BodyText, Link } from "./base/typography";
import { BodyTextContainer } from "./base/container";

export default function ProjectsModal() {
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
      <BodyTextContainer></BodyTextContainer>
    </Modal>
  );
}
