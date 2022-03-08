import { BodyText } from "./base/typography";
import { TextPrimitive } from "./base/primitive/typography";
import { IconLink } from "./icons/icon";
import { SocialIconsContainer, BodyTextContainer } from "./base/container";
import {
  faGithub,
  faLinkedin,
  faSpotify,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { SeparatorPrimitive } from "./base/primitive/separator";

export default function ContactSection() {
  return (
    <div>
      <SeparatorPrimitive className="pad-lg" />
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
        <IconLink href="mailto://joshua@overflow.digital" icon={faEnvelope} />
      </SocialIconsContainer>
    </div>
  );
}
