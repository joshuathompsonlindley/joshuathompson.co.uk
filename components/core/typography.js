export function Heading({ children }) {
  return <span className="bold px36">{children}</span>;
}

export function Subheading({ children }) {
  return <span className="medium px24">{children}</span>;
}

export function BodyText({ children }) {
  return <span className="regular px18">{children}</span>;
}

export function Link({ children }) {
  return <span className="bold px18 link">{children}</span>;
}

export function IconLink({ children }) {
    return <span className="link icon">{children}</span>;
  }