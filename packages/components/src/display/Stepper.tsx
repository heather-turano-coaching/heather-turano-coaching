import { IconName } from "@fortawesome/pro-light-svg-icons";
import { ColorProperties } from "@heather-turano-coaching/design-system";
import {
  makeColor,
  makeOutset,
  makeSize,
} from "@heather-turano-coaching/design-system";
import React, { FC, ReactNode, useState } from "react";
import styled from "styled-components";

import { Icon } from "./Icon";
import { Typography } from "./Typography";

export interface Step {
  icon: IconName;
  label: string;
  description: string;
}

export interface StepperProps {
  steps: Step[];
  children: (step: Step) => ReactNode;
}

interface DerrivedValue {
  isActive: boolean;
  isPassed: boolean;
}

const StyledStepperContainer = styled.div`
  ${makeOutset({ vertical: 32 })};
`;

const StyledSteps = styled.div`
  ${makeOutset({ bottom: 24 })};
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const StyledStepLabel = styled.div`
  text-transform: lowercase;
  margin-bottom: 20px;
  transition: color 0.5s ease-in-out;
  text-align: center;
`;

const StyledStepBubble = styled.button.attrs({ type: "button" })<DerrivedValue>`
  height: ${makeSize("xxl")};
  width: ${makeSize("xxl")};
  display: flex;
  flex-direction: row;
  justify-content: center;
  background: #fff;
  border-radius: 50%;
  border-width: 6px;
  border-style: solid;
  cursor: pointer;
  z-index: 10;
  transition: border-color 0.5s ease-in-out;

  border-color: ${({ isActive, isPassed }) => {
    if (isActive) {
      return makeColor({ scalable: { color: "secondary" } });
    }
    if (isPassed) {
      return makeColor({ scalable: { color: "secondary", scale: 2 } });
    }
    return makeColor({ scalable: { color: "gray", scale: 3 } });
  }};
`;

const StyledProgressLine = styled.div<{
  currentStep: number;
  numberOfSteps: number;
}>`
  position: absolute;
  width: 100%;
  height: 2px;
  background: ${makeColor({ scalable: { color: "secondary", scale: 2 } })};
  bottom: calc(72px / 2);
  transition: width 0.5s ease-in-out;
  width: ${({ currentStep, numberOfSteps }) =>
    `${(currentStep / (numberOfSteps - 1)) * 100}%`};
  z-index: -1;
`;

const createFontColor = ({
  isActive,
  isPassed,
}: DerrivedValue): ColorProperties => {
  if (isActive) {
    return { scalable: { color: "secondary" } };
  }
  if (isPassed) {
    return { scalable: { color: "secondary" } };
  }
  return { scalable: { color: "gray" } };
};

export const Stepper: FC<StepperProps> = ({ steps, children }) => {
  const [currentStep, setCurrentStep] = useState<number>(0);

  const goToEntry = (index: number) => setCurrentStep(index);

  return (
    <StyledStepperContainer>
      <StyledSteps>
        {steps.map(({ icon, label }, index) => {
          const isActive = index === currentStep;
          const isPassed = index < currentStep;

          return (
            <div key={label}>
              <StyledStepLabel>
                <Typography
                  variant="caption"
                  fontSize="sm"
                  fontColor={createFontColor({ isActive, isPassed })}
                >
                  {label}
                </Typography>
              </StyledStepLabel>
              <StyledStepBubble
                isActive={isActive}
                isPassed={isPassed}
                key={index.toString()}
                onClick={() => goToEntry(index)}
              >
                <Icon
                  icon={icon}
                  iconSize="h4"
                  iconColor={createFontColor({ isActive, isPassed })}
                />
              </StyledStepBubble>
            </div>
          );
        })}
        <StyledProgressLine
          currentStep={currentStep}
          numberOfSteps={steps.length}
        />
      </StyledSteps>
      <div>{children({ ...steps[currentStep] })}</div>
    </StyledStepperContainer>
  );
};
