import { gql, useLazyQuery } from "@apollo/client";
import {
  Button,
  Heading,
  Section,
  Typography,
} from "@heather-turano-coaching/components";
import { FC, useEffect } from "react";
import React from "react";

const CHECKOUT = gql`
  query GetGreeting {
    feed {
      title
    }
  }
`;

export const Pricing: FC = () => {
  const [
    runCheckoutQuery,
    { called, loading, data, error },
  ] = useLazyQuery(CHECKOUT, { ssr: false });

  const handleClick = () => () => {
    runCheckoutQuery();
  };

  useEffect(() => {
    if (data) {
      console.log(data);
    }
    if (error) {
      console.log(JSON.stringify(error));
    }
  }, [data, error]);

  return (
    <Section styleType="blank">
      <div id="#about"></div>
      <Heading fontSize="h1" fontFamily="Playfair Display">
        Pricing
      </Heading>
      <br />
      <Typography variant="label" fontSize="md">
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
        Donec sed odio dui. Curabitur blandit tempus porttitor. Cras justo odio,
        dapibus ac facilisis in, egestas eget quam.
      </Typography>
      <Button
        label="test stripe"
        onClick={handleClick()}
        disabled={called && loading}
      />
    </Section>
  );
};
