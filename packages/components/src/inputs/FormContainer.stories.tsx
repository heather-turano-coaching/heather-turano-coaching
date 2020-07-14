import React, { FC } from "react";
import { useForm } from "react-hook-form";

import { Button } from "./Button";
import { FormContainer } from "./FormContainer";
import { FormGroup } from "./FormGroup";
import { Input } from "./Input";

export default {
  component: Input,
  title: "Inputs|Form Container",
};

interface FormData {
  firstName: string;
  lastName: string;
  address: string;
  age: number;
}

export const simpleNoValidation = () => {
  const SimpleNoValidation: FC = () => {
    const { register, handleSubmit } = useForm<FormData>();
    const onSubmit = (data: FormData) => {
      console.log(data);
    };

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormContainer>
          <FormGroup>
            <Input name="firstName" label="First name" ref={register} />
            <Input name="lastName" label="Last name" ref={register} />
            <Input name="address" label="Address" ref={register} />
            <Input name="age" type="number" label="Age" ref={register} />
            <Button styleType="secondary" label="Submit" type="submit" />
          </FormGroup>
        </FormContainer>
      </form>
    );
  };
  return <SimpleNoValidation />;
};

export const withValidation = () => {
  const WithValidation: FC = () => {
    const { register, handleSubmit } = useForm<FormData>();
    const onSubmit = (data: FormData) => {
      console.log(data);
    };

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormContainer>
          <FormGroup>
            <Input
              name="firstName"
              label="First name"
              ref={register({ required: true, min: 5 })}
            />
            <Input
              name="lastName"
              label="Last name"
              ref={register({ required: true })}
            />
            <Input name="address" label="Address" ref={register} />
            <Input
              name="age"
              type="number"
              label="Age"
              ref={register({ required: true })}
            />
            <Button styleType="secondary" label="Submit" type="submit" />
          </FormGroup>
        </FormContainer>
      </form>
    );
  };
  return <WithValidation />;
};
export const customErrorMessages = () => {
  const CustomErrorMessages: FC = () => {
    const { register, errors, handleSubmit } = useForm<FormData>();
    const onSubmit = (data: FormData) => {
      console.log(data);
    };

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormContainer>
          <FormGroup>
            <Input
              name="firstName"
              label="First name"
              ref={register({ required: true, min: 5 })}
              isValid={!errors.firstName}
              errorMessage={
                errors.firstName && "uhhhh, you need to indicate your name"
              }
            />
            <Input
              name="lastName"
              label="Last name"
              ref={register({ required: true })}
            />
            <Input name="address" label="Address" ref={register} />
            <Input
              name="age"
              type="number"
              label="Age"
              ref={register({ required: true })}
              errorMessage={
                errors.firstName &&
                "you're old, we get it. You still need to include this"
              }
            />
            <Button styleType="secondary" label="Submit" type="submit" />
          </FormGroup>
        </FormContainer>
      </form>
    );
  };
  return <CustomErrorMessages />;
};
export const yupValidationSchmea = () => {};
export const yupWithCustomErrorMessages = () => {};
export const withSelectInputs = () => {};
export const withRadioInputs = () => {};
export const withCheckboxInputs = () => {};
