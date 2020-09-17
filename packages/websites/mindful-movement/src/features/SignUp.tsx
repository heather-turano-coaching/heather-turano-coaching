export {};
// import {
//   Button,
//   FormContainer,
//   FormNotification,
//   Heading,
//   Input,
//   InputGroup,
//   Section,
//   Typography,
// } from "@heather-turano-coaching/components";
// import {
//   makeColor,
//   makeOutset,
//   makeResponsive,
//   makeRhythm,
//   makeSize,
// } from "@heather-turano-coaching/design-system";
// import {
//   SubscribeRequest,
//   SubscribeResponse,
// } from "@heather-turano-coaching/domain";
// import { useApi } from "@heather-turano-coaching/core/hooks";
// import { graphql, useStaticQuery } from "gatsby";
// import { FC } from "react";
// import React from "react";
// import { useForm } from "react-hook-form";
// import styled from "styled-components";

// import { subscribeToBlog } from "../api";

// const StyledFormConatiner = styled.div`
//   ${makeOutset({ horizontal: 24 })};
//   top: -${makeSize({ custom: 32 })};
//   position: relative;
//   box-shadow: 0 0 8px 0 rgba(69, 162, 153, 0.5);
//   text-align: center;
//   border-radius: ${makeSize({ custom: 8 })};
//   overflow: hidden;

//   ${makeResponsive({
//     beginAt: "laptop",
//     style: `
//       ${makeOutset({ horizontal: 120 })};
//     `,
//   })}

//   ${makeResponsive({
//     beginAt: "desktop",
//     style: `
//       ${makeOutset({ horizontal: 200 })};
//     `,
//   })}

//   & > * {
//     background: ${makeColor({ fixed: "light" })};
//   }

//   h1 {
//     & + p {
//       ${makeRhythm({ fontSize: "sm", top: 1, bottom: 2 })}
//     }
//   }
// `;

// export const SignUp: FC = () => {
//   const { contentful100Days: queryData } = useStaticQuery(graphql`
//     {
//       contentful100Days {
//         title
//         description
//         namePlaceholder
//         emailPlaceholder
//         submitText
//       }
//     }
//   `);

//   return (
//     <StyledFormConatiner>
//       <Section styleType="blank">
//         {/* <Image /> */}
//         <Heading
//           fontSize="h1"
//           fontColor={{ scalable: { color: "secondary" } }}
//           fontFamily="Covered By Your Grace"
//         >
//           {queryData.title}
//         </Heading>
//         <Typography variant="paragraph">{queryData.description}</Typography>

//       </Section>
//     </StyledFormConatiner>
//   );
// };
