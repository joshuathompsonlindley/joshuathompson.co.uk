import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { string } from "prop-types"
import React from "react"

export type ProjectDescriptionProps = {
    date: string,
    children: React.ReactNode,
    href?: string
}

export type ContainerPrimitiveProps = {
    className?: string,
    children: React.ReactNode
}

export type ModalProps = {
    trigger: JSX.Element,
    title: JSX.Element | string,
    children: React.ReactNode
}

export type TextPrimitiveProps = {
    className?: string,
    href?: string,
    children: React.ReactNode
}

export type DefaultReactProps = {
    children: React.ReactNode
}

export type IconLinkProps = {
    icon: IconProp,
    href?: string,
    style?: string
}