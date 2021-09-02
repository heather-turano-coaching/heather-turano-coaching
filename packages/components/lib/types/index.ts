import React from "react";
import { CSSProp } from "styled-components";

export type HTMLButton = React.ButtonHTMLAttributes<HTMLButtonElement>;
export type HTMLAnchor = React.AnchorHTMLAttributes<HTMLAnchorElement>;
export type HTMLInput = React.InputHTMLAttributes<HTMLInputElement>;
export type HTMLSelect = React.InputHTMLAttributes<HTMLSelectElement>;
export type HTMLTextarea = React.TextareaHTMLAttributes<HTMLTextAreaElement>;
export type HTMLLabel = React.LabelHTMLAttributes<HTMLLabelElement>;
export type HTMLParagraph = React.HTMLAttributes<HTMLParagraphElement>;
export type HTMLHeading = React.HTMLAttributes<HTMLHeadingElement>;
export type HTMLImage = React.HTMLAttributes<HTMLImageElement>;
export type HTMLLink = React.HTMLAttributes<HTMLAnchorElement>;
export type HTMLNode = React.HTMLAttributes<HTMLElement>;
export type HTMLElementProps = {
  className?: string;
  css?: CSSProp;
};
