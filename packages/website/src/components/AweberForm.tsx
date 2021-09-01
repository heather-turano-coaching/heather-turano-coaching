import { makeFontWeight, makeRem } from "@htc/components";
import { FC } from "react";
import styled, { css } from "styled-components";

const formWrapper = ".af-form-wrapper";
const formElement = ".af-element";
const formTextWrap = ".af-textWrap";

export type AweberFormProps = {
  variant?: "light" | "dark";
};

const CSSInput = css<AweberFormProps>`
  border-radius: ${makeRem(4)};
  width: 100%;
  font-family: "Muli";
  font-weight: ${makeFontWeight("semiBold")};
  font-size: ${makeRem(16)};
  padding: 0 ${makeRem(16)};
  color: ${({ theme }) => theme.palette.noir.dark};
  background-color: ${({ theme, variant }) =>
    variant === "light"
      ? theme.palette.light.light
      : theme.palette.common.white};
  border: 2px solid transparent;
  transition: all 0.15s ease-in-out;

  &:focus {
    outline: none;
    border: 2px solid ${({ theme }) => theme.palette.primary.dark};
  }
`;

const StyledForm = styled.div<AweberFormProps>`
  ${formWrapper} {
    border-radius: 0 !important;
    box-shadow: initial !important;

    * {
      box-sizing: border-box;
    }
  }

  ${formElement} {
    width: 100%;
    display: flex;
    flex-direction: column;
    &:not(:last-child) {
      margin-bottom: ${makeRem(20)};
    }

    ${formTextWrap} {
      .text.text {
        ${CSSInput};
      }
    }

    label {
      font-size: ${makeRem(16)};
      font-weight: ${makeFontWeight("semiBold")};
      font-family: "Muli";
      display: inline-block;
      margin-bottom: ${makeRem(4)};
      text-align: left;
    }

    input,
    textarea {
      ${CSSInput}
    }

    input {
      height: ${makeRem(48)};
    }

    input[type="submit"] {
      background-color: ${({ theme }) => theme.palette.primary.dark};
      color: ${({ theme }) => theme.palette.common.white};
    }
  }
`;

export const AweberForm: FC<{ formScript: string } & AweberFormProps> = ({
  formScript,
  variant = "light"
}) => {
  return (
    <StyledForm variant={variant}>
      <div dangerouslySetInnerHTML={{ __html: formScript }} />
    </StyledForm>
  );
};
