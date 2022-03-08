import {
  PageContainerPrimitive,
  ContainerPrimitive,
  FlexColumnContainerPrimitive,
  FlexRowContainerPrimitive,
} from "./primitive/container";

export function FlexColumnContainer({ className, children }) {
  return (
    <FlexColumnContainerPrimitive className={`${className}`}>
      {children}
    </FlexColumnContainerPrimitive>
  );
}

export function FlexRowContainer({ className, children }) {
  return (
    <FlexRowContainerPrimitive className={`${className}`}>
      {children}
    </FlexRowContainerPrimitive>
  );
}

export function PageContainer({ children }) {
  return <PageContainerPrimitive>{children}</PageContainerPrimitive>;
}

export function HeadingContainer({ children }) {
  return <FlexRowContainer className="pad-sm">{children}</FlexRowContainer>;
}

export function SubheadingContainer({ children }) {
  return <ContainerPrimitive className="pad-lg">{children}</ContainerPrimitive>;
}

export function BodyTextContainer({ children }) {
  return <ContainerPrimitive className="pad-lg">{children}</ContainerPrimitive>;
}

export function SocialIconsContainer({ children }) {
  return <FlexRowContainer className="centre">{children}</FlexRowContainer>;
}
