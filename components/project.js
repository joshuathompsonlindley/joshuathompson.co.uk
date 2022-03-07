import { TextPrimitive } from "./base/primitive/typography";
import { BodyText } from "./base/typography";
import { Link } from "./base/typography";
import { ContainerPrimitive } from "./base/primitive/container";

export function ProjectDescription({ date, href, children }) {
  return (
    <ContainerPrimitive className="not-on-last pad-xs">
        <div>
          <TextPrimitive className="bold">{date}</TextPrimitive>
        </div>
        <Link href={href}><BodyText>{children}</BodyText></Link>
    </ContainerPrimitive>
  );
}
