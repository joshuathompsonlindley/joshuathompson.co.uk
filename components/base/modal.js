import React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { ButtonPrimitive } from "./primitive/button";
import { OverlayPrimitive, ContentPrimitive } from "./primitive/modal";
import { IconButtonPrimitive } from "./primitive/button";
import { Cross2Icon } from "@radix-ui/react-icons";

function Content({ children, ...props }) {
  return (
    <DialogPrimitive.Portal>
      <OverlayPrimitive />
      <ContentPrimitive {...props}>{children}</ContentPrimitive>
    </DialogPrimitive.Portal>
  );
}

export default function Modal({ trigger, title, children }) {
  return (
    <DialogPrimitive.Root>
      <DialogPrimitive.Trigger asChild>
        <ButtonPrimitive>{trigger}</ButtonPrimitive>
      </DialogPrimitive.Trigger>
      <Content>
        <DialogPrimitive.Title>{title}</DialogPrimitive.Title>
        <DialogPrimitive.Description>{children}</DialogPrimitive.Description>
        <DialogPrimitive.Close asChild>
          <IconButtonPrimitive>
            <Cross2Icon />
          </IconButtonPrimitive>
        </DialogPrimitive.Close>
      </Content>
    </DialogPrimitive.Root>
  );
}
