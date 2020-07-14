import {
  Alert,
  Button,
  FormGroup,
  Input,
} from "@heather-turano-coaching/components";
import {
  QuickContactRequest,
  QuickContactResponse,
} from "@heather-turano-coaching/domain";
import { useApi } from "@heather-turano-coaching/hooks";
import React, { FC } from "react";
import { useForm } from "react-hook-form";

import { sendQuickContactRequest } from "../../api";

interface FormQuickContactProps {
  submitButtonLabel: string;
  submitButtonColor?: "primary" | "secondary";
}

export const FormQuickContact: FC<FormQuickContactProps> = ({
  submitButtonLabel,
  submitButtonColor = "primary",
}) => {
  const { register, errors, handleSubmit } = useForm<QuickContactRequest>();

  const [{ loading, data, error }, subcribe] = useApi<
    QuickContactRequest,
    QuickContactResponse
  >(sendQuickContactRequest);

  const onSubmit = async (formData: QuickContactRequest) => {
    subcribe(formData);
  };

  return (
    <>
      {error && (
        <Alert type="error">
          {`Oh no! It looks like something went wrong. Error: "${error.errorMessage}"`}
        </Alert>
      )}
      {data && (
        <Alert type="success">
          Horay! Thank you for signing up! You're going to recieve a welcome
          email at the address you provided.
        </Alert>
      )}
      {!data && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup layout="stacked">
            <Input
              id={`quick-contact-first-name`}
              name="firstName"
              placeholder="First name"
              ref={register({ required: true })}
              disabled={loading}
              errorMessage={
                errors.firstName && "We need your first name at a minimum"
              }
            />
            <Input
              id={`quick-contact-email`}
              name="address"
              placeholder="Email address"
              ref={register({ required: true })}
              disabled={loading}
              errorMessage={
                errors.emailAddress &&
                "You'll need to add your email address so we can send you awesome stuff!"
              }
            />
            <Button
              id={`submit-subscription`}
              styleType={submitButtonColor}
              type="submit"
              label={submitButtonLabel}
              disabled={!!errors.firstName || !!errors.emailAddress || loading}
              loading={loading}
              onSubmit={handleSubmit(onSubmit)}
            />
          </FormGroup>
        </form>
      )}
    </>
  );
};
