import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconLinkPrimitive } from "./primitive/icon";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import { IconLinkProps } from "../../lib/types";

export function IconLink({ icon, href }: IconLinkProps): JSX.Element {
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

export function HelpIcon(): JSX.Element {
  return <FontAwesomeIcon icon={faCircleQuestion} />;
}
