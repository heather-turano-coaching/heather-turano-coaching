import {
  Alert,
  Button,
  FormGroup,
  Input
} from "@heather-turano-coaching/core/components";
import { subscribeToBlog } from "endpoints";
import { FC } from "react";
import { useForm } from "react-hook-form";

interface FormSubscribeProps {
  fieldPrefix: string;
}

export const FormSubscribe: FC<FormSubscribeProps> = ({ fieldPrefix }) => {
  const { register, errors, handleSubmit } = useForm<{
    firstName: string;
    email: string;
  }>();

  return (
    <>
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
