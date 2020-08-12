import {
  Alert,
  Button,
  FormGroup,
  Input
} from "@heather-turano-coaching/components";
import {
  SubscribeRequest,
  SubscribeResponse
} from "@heather-turano-coaching/domain";
import { useApi } from "@heather-turano-coaching/hooks";
import { graphql, useStaticQuery } from "gatsby";
import React, { FC } from "react";
import { useForm } from "react-hook-form";

import { subscribeToBlog } from "../../api";

interface FormSubscribeProps {
  fieldPrefix: string;
}

export const FormSubscribe: FC<FormSubscribeProps> = ({ fieldPrefix }) => {
  const { contentfulBlockSubscribe: queryData } = useStaticQuery(graphql`
    {
      contentfulBlockSubscribe {
        ...BlockSubscribeFields
      }
    }
  `);

  const { register, errors, handleSubmit } = useForm<SubscribeRequest>();

  const [{ loading, data, error }, subcribe] = useApi<
    SubscribeRequest,
    SubscribeResponse
  >(subscribeToBlog);

  const onSubmit = async (formData: SubscribeRequest) => {
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
              id={`${fieldPrefix}-subscribe-first-name`}
              name="firstName"
              placeholder={queryData.namePlaceholder}
              ref={register({ required: true })}
              disabled={loading}
              errorMessage={
                errors.firstName && "We need your first name at a minimum"
              }
            />
            <Input
              id={`${fieldPrefix}-subscribe-email`}
              name="address"
              placeholder={queryData.emailPlaceholder}
              ref={register({ required: true })}
              disabled={loading}
              errorMessage={
                errors.address &&
                "You'll need to add your email address so we can send you awesome stuff!"
              }
            />
            <Button
              id={`${fieldPrefix}-submit-subscription`}
              styleType="accent"
              type="submit"
              label={queryData.submitText}
              disabled={!!errors.firstName || !!errors.address || loading}
              loading={loading}
              onSubmit={handleSubmit(onSubmit)}
            />
          </FormGroup>
        </form>
      )}
    </>
  );
};
