import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconLinkPrimitive } from "./styles/icon";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";

export function IconLink({ icon, href }) {
  return (
    <IconLinkPrimitive>
      {href ? (
        <a href={href}>
          <FontAwesomeIcon icon={icon} />
        </a>
      ) : (
        <FontAwesomeIcon icon={icon} />
      )}
    </IconLinkPrimitive>
  );
}

export function HelpIcon() {
  return <FontAwesomeIcon icon={faCircleQuestion} />;
}
