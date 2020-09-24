import {
  Alert,
  Button,
  FormGroup,
  Input
} from "@heather-turano-coaching/components";
import { useApi } from "@heather-turano-coaching/core/hooks";
import {
  SubscribeRequest,
  SubscribeResponse
} from "@heather-turano-coaching/domain";
import { subscribeToBlog } from "endpoints";
import { FC } from "react";
import { useForm } from "react-hook-form";

interface FormSubscribeProps {
  fieldPrefix: string;
}

export const FormSubscribe: FC<FormSubscribeProps> = ({ fieldPrefix }) => {
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
              placeholder="First name"
              ref={register({ required: true })}
              disabled={loading}
              errorMessage={
                errors.firstName && "We need your first name at a minimum"
              }
            />
            <Input
              id={`${fieldPrefix}-subscribe-email`}
              name="address"
              placeholder="you@domain.com"
              ref={register({ required: true })}
              disabled={loading}
              errorMessage={errors.address && "An email address is required!"}
            />
            <Button
              id={`${fieldPrefix}-submit-subscription`}
              styleType="accent"
              type="submit"
              label="Submit!"
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
