import React from "react";
import { ContainerPrimitiveProps } from "../../lib/types";
import {
  PageContainerPrimitive,
  ContainerPrimitive,
  FlexColumnContainerPrimitive,
  FlexRowContainerPrimitive,
  AppContainerPrimitive,
} from "./primitive/container";

export function FlexColumnContainer({
  className,
  children,
}: ContainerPrimitiveProps): JSX.Element {
  return (
    <FlexColumnContainerPrimitive className={`${className}`}>
      {children}
    </FlexColumnContainerPrimitive>
  );
}

export function FlexRowContainer({
  className,
  children,
}: ContainerPrimitiveProps): JSX.Element {
  return (
    <FlexRowContainerPrimitive className={`${className}`}>
      {children}
    </FlexRowContainerPrimitive>
  );
}

export function PageContainer({
  children,
}: ContainerPrimitiveProps): JSX.Element {
  return <PageContainerPrimitive>{children}</PageContainerPrimitive>;
}

export function HeadingContainer({
  children,
}: ContainerPrimitiveProps): JSX.Element {
  return <FlexRowContainer className="pad-sm">{children}</FlexRowContainer>;
}

export function SubheadingContainer({
  children,
}: ContainerPrimitiveProps): JSX.Element {
  return <ContainerPrimitive className="pad-lg">{children}</ContainerPrimitive>;
}

export function BodyTextContainer({
  children,
}: ContainerPrimitiveProps): JSX.Element {
  return <ContainerPrimitive className="pad-lg">{children}</ContainerPrimitive>;
}

export function SocialIconsContainer({
  children,
}: ContainerPrimitiveProps): JSX.Element {
  return <FlexRowContainer className="centre">{children}</FlexRowContainer>;
}

export class AppContainer extends React.Component {
  state = {
    loading: true,
  };

  componentDidMount() {
    this.fakeLoad().then(() => {
      const element: Element = document.querySelector('div.c-iqkylo');

      if (element) {
        element.remove();

        this.setState({
          loading: false,
        });
      }
    });
  }

  fakeLoad = () => {
    return new Promise<void>((resolve) => setTimeout(() => resolve(), 1000));
  };

  render(): JSX.Element {
    if (this.state.loading) {
      return null;
    }

    return <AppContainerPrimitive>{this.props.children}</AppContainerPrimitive>;
  }
}
