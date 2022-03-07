import { TextPrimitive } from "./styles/typography";

export function Heading({ children }) {
  return <TextPrimitive className="bold rem-lg">{children}</TextPrimitive>;
}

export function Subheading({ children }) {
  return <TextPrimitive className="medium rem-md">{children}</TextPrimitive>;
}

export function BodyText({ children }) {
  return <TextPrimitive className="regular rem-sm">{children}</TextPrimitive>;
}

export function Link({ href, children }) {
  return (
    <TextPrimitive className="bold rem-sm link">
      <a href={href}>{children}</a>
    </TextPrimitive>
  );
}
