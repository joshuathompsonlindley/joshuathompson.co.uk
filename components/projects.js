import Modal from "./base/modal";
import { BodyText, Link } from "./base/typography";
import { BodyTextContainer } from "./base/container";
import { ProjectDescription } from "./project";

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
      title={`Some things I’ve done recently`}
    >
      <div>
        <ProjectDescription href="#" date="03/22">Started this website</ProjectDescription>
        <ProjectDescription href="https://overflow.digital" date="02/22">Founded Overflow Digital with my friends</ProjectDescription>
        <ProjectDescription href="https://www.cadosecurity.com/automate-incident-response-with-the-new-tines-and-cado-response-integration/" date="10/21">Published my first blog on the Cado Security blog</ProjectDescription>
        <ProjectDescription href="https://www.cadosecurity.com/" date="07/21">Started my latest adventure at Cado Security</ProjectDescription>
      </div>
    </Modal>
  );
}
