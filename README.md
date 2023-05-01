<h1 align="center" style="padding-bottom: 30px">
  <img align="center" width="50%" src="./public/logo-stacked.png" />
</h1 >
  <p align="center" style="font-size: 1.2rem">Typescript based mono-repository to manage all of the digital assets that make up the Heather Turano Coaching brand</p>
  <!-- <p align="center" style="font-size: 1.2rem">
    <strong>Live Life Mindful</strong>
    <a align="center"  href="https://livelifemindful.com" style="font-size: 1.2rem; text-align: center;">https://livelifemindful.com</a>
  </p>
  <p align="center" style="font-size: 1.2rem">
    <strong>Mindful Movement 100</strong>
    <a align="center"  href="https://mindfulmovement100.com" style="font-size: 1.2rem; text-align: center;">https://mindfulmovement100.com</a>
  </p>
    <p align="center" style="font-size: 1.2rem">
    <strong>Design System</strong>
    <a align="center"  href="https://design.livelifemindful.com" style="font-size: 1.2rem; text-align: center;">https://design.livelifemindful.com</a>
  </p> -->
<hr />

# Overview

This repository is a Lerna managed mono-repo that contains all of the packages needed to build the Heather Turano web and digital brand. Written primarily in TypeScript, the solutions are broken into several packages, some of them private and some of them public, to ensure that modularity is the primary focus.

## Major Features

- All websites are written in TS React and are built using the [Gatsby](https://www.gatsbyjs.org/) static site framework & build system
- All services and sites are hosted using [Render](https://render.com/), a cloud provider aimed at helping startups
- React components that serve the brand are contained in their own package and built & tested using [Storybook](https://storybook.js.org/)
- The styles are built using the [css-in-ts](https://github.com/css-in-ts/design-system) methodology by defining primitive and composite design types & interfacing them with utilities.
- The API is a typescript based serverless API built using Cloudflare workers that operate on the network edge; based upon the template from [cloudflare-workers-ts-router](https://github.com/drewdecarme/cloudflare-workers-ts-router)
- Ghost
- Commento

## Content Management

- Commento
- Ghost
- Contentful
