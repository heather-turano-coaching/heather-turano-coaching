import {
  Button,
  ContentfulRichText,
  FormContainer,
  FormNotification,
  Heading,
  Input,
  InputGroup,
  Section,
} from "@heather-turano-coaching/components";
import {
  SubscribeRequest,
  SubscribeResponse,
} from "@heather-turano-coaching/domain";
import { useApi } from "@heather-turano-coaching/hooks";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { useForm } from "react-hook-form";

import { subscribeToBlog } from "../api";
import { Layout, SEO } from "../components";

const SignUpPage = () => {
  const { contentfulPageSignUp: queryData } = useStaticQuery<{
    contentfulPageSignUp: {
      title: string;
      description: { json: string };
    };
  }>(graphql`
    {
      contentfulPageSignUp {
        title
        description {
          json
        }
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
    <Layout>
      <SEO title="Payment cancelled" description="Confirm cancelled payment" />
      <Section styleType="layered">
        <Heading fontSize="h1" fontFamily="Playfair Display">
          {queryData.title}
        </Heading>
        <br />
        <ContentfulRichText
          richText={queryData.description.json}
          copyProps={{
            variant: "label",
            fontSize: "md",
          }}
        />
        <br />
        <FormContainer>
          {error && (
            <FormNotification type="error">
              {`Oh no! It looks like something went wrong. Error: "${error.errorMessage}". If this is something that seems tough to fix, reach out to Heater at heather@livelifemindful.com`}
            </FormNotification>
          )}
          {data && (
            <FormNotification type="success">
              Horay! Thanks for signing up! You'll receive an welcome email at
              the email address you provided.
            </FormNotification>
          )}
          {!data && (
            <form onSubmit={handleSubmit(onSubmit)}>
              <InputGroup layout="stacked">
                <Input
                  id={`subscribe-first-name`}
                  name="firstName"
                  placeholder="Name"
                  ref={register({ required: true })}
                  disabled={loading}
                  errorMessage={
                    errors.firstName && "We need your first name at a minimum"
                  }
                />
                <Input
                  id={`subscribe-email`}
                  name="address"
                  placeholder="youremail@awesome.com"
                  ref={register({ required: true })}
                  disabled={loading}
                  errorMessage={
                    errors.address &&
                    "You'll need to add your email address so we can send you awesome stuff!"
                  }
                />
                <Button
                  id={`submit-subscription`}
                  styleType="secondary"
                  type="submit"
                  label="Sign up"
                  disabled={!!errors.firstName || !!errors.address || loading}
                  loading={loading}
                  onSubmit={handleSubmit(onSubmit)}
                />
              </InputGroup>
            </form>
          )}
        </FormContainer>
      </Section>
    </Layout>
  );
};

export default SignUpPage;
