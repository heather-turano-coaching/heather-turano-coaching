import React, { FC } from "react";

import { Section } from "./Section";

export default {
  component: Section,
  title: "Layout|Section"
};

const Container: FC = ({ children }) => (
  <div style={{ border: "1px solid #f3f3f3" }}>{children}</div>
);
const Content: FC = ({ children }) => (
  <div style={{ width: "100%", height: "300px", border: "1px solid #eeeeee" }}>
    {children}
  </div>
);

export const base = () => (
  <>
    <Container>
      <Section styleType="blank">
        <Content />
      </Section>
    </Container>
    <Container>
      <Section styleType="blank">
        <Content />
      </Section>
    </Container>
  </>
);

export const layered = () => (
  <>
    <Container>
      <Section styleType="blank">
        <Content />
      </Section>
    </Container>
    <Container>
      <Section styleType="layered">
        <Content />
      </Section>
    </Container>
    <Container>
      <Section styleType="blank">
        <Content />
      </Section>
    </Container>
  </>
);

export const hero = () => (
  <>
    <Container>
      <Section styleType="hero">
        <Content />
      </Section>
    </Container>
    <Container>
      <Section styleType="layered">
        <Content />
      </Section>
    </Container>
    <Container>
      <Section styleType="blank">
        <Content />
      </Section>
    </Container>
  </>
);

export const split = () => (
  <>
    <Container>
      <Section styleType="hero">
        <Content />
      </Section>
    </Container>
    <Container>
      <Section styleType="layered">
        <Content />
      </Section>
    </Container>
    <Container>
      <Section styleType="split">
        <Content>left</Content>
        <Content>right</Content>
      </Section>
    </Container>
    <Container>
      <Section styleType="layered">
        <Content />
      </Section>
    </Container>
  </>
);
