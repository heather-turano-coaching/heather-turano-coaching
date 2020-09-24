// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.

import { Asset, Entry } from "contentful";
import { Document } from "@contentful/rich-text-types";

export interface IBlockFields {
  /** title */
  title?: string | undefined;

  /** content */
  content?: Entry<{ [fieldId: string]: unknown }> | undefined;
}

/** general content type for blocks on the dashboard */

export interface IBlock extends Entry<IBlockFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "block";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IBlockInspirationFields {
  /** name */
  name?: string | undefined;

  /** picture */
  picture: Asset[];
}

/** daily inspiration block */

export interface IBlockInspiration extends Entry<IBlockInspirationFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "blockInspiration";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IBlockSubscribeFields {
  /** contentTitle */
  contentTitle?: string | undefined;

  /** description */
  description?: string | undefined;

  /** namePlaceholder */
  namePlaceholder?: string | undefined;

  /** emailPlaceholder */
  emailPlaceholder?: string | undefined;

  /** submitText */
  submitText?: string | undefined;
}

/** content for the subscription block */

export interface IBlockSubscribe extends Entry<IBlockSubscribeFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "blockSubscribe";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IBlogWelcomeBannerFields {
  /** Title */
  title: string;

  /** Sub-title */
  subTitle: string;

  /** Description */
  description: string;

  /** Description Mobile Prompt */
  descriptionMobilePrompt: string;

  /** Description Desktop Prompt */
  descriptionDesktopPrompt: string;
}

/** Welcome banner for the blog */

export interface IBlogWelcomeBanner extends Entry<IBlogWelcomeBannerFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "blogWelcomeBanner";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface ICertificationFields {
  /** Contentful Title */
  contentfulTitle?: string | undefined;

  /** Seal Image */
  sealImage: Asset;

  /** Certification title */
  certificationTitle: string;
}

/** Certification type for different types of certifications */

export interface ICertification extends Entry<ICertificationFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "certification";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IOneHundredDaysFields {
  /** heroImage */
  heroImage: Asset;

  /** title */
  title: string;

  /** description */
  description: string;

  /** namePlaceholder */
  namePlaceholder: string;

  /** emailPlaceholder */
  emailPlaceholder?: string | undefined;

  /** submitText */
  submitText: string;
}

/** Values for 100 Days landing page */

export interface IOneHundredDays extends Entry<IOneHundredDaysFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "oneHundredDays";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IPageFields {
  /** System Title */
  systemTitle?: string | undefined;

  /** Title */
  title?: string | undefined;

  /** Navigation Link Label */
  navLinkLabel?: string | undefined;

  /** Page Content */
  content: IPageAbout | IPageContact | IPageHome | IPageService;
}

/** This is the highest level of a page. It contains the title of the page and then the "label" of the link that get's displays at the navigation link bar */

export interface IPage extends Entry<IPageFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "page";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IPageAboutFields {
  /** Contentful Title */
  contentfulTitle?: string | undefined;

  /** Page Title */
  pageTitle: string;

  /** Intro / Title */
  introTitle: Document;

  /** Intro / Image / Alt Text */
  introImageAltText: string;

  /** Intro / Image */
  introImage: Asset;

  /** Intro / Description */
  introDescription: Document;

  /** My Story / Title */
  myStoryTitle: string;

  /** My Story / Description */
  myStoryDescription: Document;

  /** My Style / Title */
  myStyleTitle?: string | undefined;

  /** My Style / Description */
  myStyleDescription?: Document | undefined;

  /** My Clients / Title */
  myClientsTitle: string;

  /** My Clients / Description */
  myClientsDescription?: Document | undefined;

  /** My Clients / Images */
  myClientsImages: Asset[];

  /** Certifications / Title */
  certificationsTitle: string;

  /** Certifications / List of Certifications */
  certificationsListOfCertifications: Entry<{ [fieldId: string]: unknown }>[];

  /** Contact / Title */
  contactTitle: string;

  /** Contact / Description */
  contactDescription: Document;

  /** Contact / Form / Submit Label */
  contactFormSubmitLabel: string;
}

/** This is the landing page for "About" and it should detail all about Heather Turano Coaching */

export interface IPageAbout extends Entry<IPageAboutFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "pageAbout";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IPageBlogFields {
  /** Hero / Title */
  heroTitle: string;

  /** Hero / Subtitle */
  heroSubtitle: string;
}

/** Content for the blog page */

export interface IPageBlog extends Entry<IPageBlogFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "pageBlog";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IPageContactFields {
  /** Contentful Title */
  contentfulTitle: string;

  /** Title */
  title: string;

  /** Description */
  description: Document;

  /** Hero / Description */
  heroDescription: string;

  /** Hero / Image */
  heroImage: Asset;

  /** Hero / Image / Alt */
  heroImageAlt: string;

  /** Form / First Name / Input Label */
  formFirstNameInputLabel: string;

  /** Form / First Name / Placeholder */
  formFirstNamePlaceholder: string;

  /** Form / Last Name / Input Label */
  formLastNameInputLabel: string;

  /** Form / Last Name / Placeholder */
  formLastNamePlaceholder: string;

  /** Form / Email / Input Label */
  formEmailInputLabel: string;

  /** Form / Email / Placeholder */
  formEmailPlaceholder: string;

  /** Form / Desired Service / Dropdown Label */
  formDesiredServiceDropdownLabel: string;

  /** Form / Message / Input Label */
  formMessageInputLabel: string;

  /** Form / Message / Placeholder */
  formMessagePlaceholder: string;

  /** Form / Submit Button / Label */
  formSubmitButtonLabel: string;

  /** Direct Contact / Title */
  directContactTitle: string;

  /** Direct Contact / Description */
  directContactDescription?: Document | undefined;
}

/** The "contact" houses the form that allows users to fill out a quick form and send an email to Heather */

export interface IPageContact extends Entry<IPageContactFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "pageContact";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IPageHomeFields {
  /** Contentful Title */
  contentfulTitle?: string | undefined;

  /** Page Title */
  pageTitle: string;

  /** Hero / Image */
  heroImage: Asset;

  /** Hero / Title */
  heroTitle: string;

  /** Hero / Sub-title */
  heroSubTitle: string;

  /** Hero / CTA / Button Label */
  heroCtaButtonLabel: string;

  /** Hero / CTA / URL */
  heroCtaUrl: string;

  /** About / Title */
  aboutTitle: string;

  /** About / Description */
  aboutDescription: Document;

  /** About / Learn More / Link Text */
  aboutLearnMoreLinkText: string;

  /** About / Learn More / Link URL */
  aboutLearnMoreLinkUrl: string;

  /** About / Go to Services / Link Text */
  aboutGoToServicesLinkText: string;

  /** About / Go to Services / Link URL */
  aboutGoToServicesLinkUrl: string;

  /** Services / Title */
  servicesTitle: string;

  /** Services / Description */
  servicesDescription: string;

  /** Services / Link Text */
  servicesLinkText: string;

  /** Services / Link URL */
  servicesLinkUrl: string;

  /** Testimonials / Title */
  testimonialsTitle: string;

  /** Testimonials / Description */
  testimonialsDescription: Document;

  /** Testimonials / CTA / Label */
  testimonialsCtaLabel: string;

  /** Testimonials / CTA / URL */
  testimonialsCtaUrl: string;

  /** Testimonials / List of Testimonials */
  testimonialsListOfTestimonials: ITestimonials[];

  /** Contact / Title */
  contactTitle: string;

  /** Contact / Description */
  contactDescription?: Document | undefined;

  /** Contact / Form / Button Label */
  contactFormButtonLabel: string;
}

/** This is the first page that is located at the base URL of livelifemindful.com */

export interface IPageHome extends Entry<IPageHomeFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "pageHome";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IPageNotFoundFields {
  /** Contentful Title */
  contentfulTitle?: string | undefined;

  /** Title */
  title: string;

  /** Sub-title */
  subTitle: string;

  /** Form title */
  formTitle: string;
}

/** A "404" page is the page that displays when a user navigates to a URL that doesn't eixst */

export interface IPageNotFound extends Entry<IPageNotFoundFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "pageNotFound";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IPageServiceFields {
  /** Contentful Title */
  contentfulTitle?: string | undefined;

  /** Page / Title */
  pageTitle: string;

  /** Hero / Image */
  heroImage: Asset;

  /** Hero / Title */
  heroTitle: string;

  /** Hero / Subtitle */
  heroSubtitle: string;

  /** Section / Programs / Title */
  sectionProgramsTitle: string;

  /** Section / Programs / Description */
  sectionProgramsDescription: string;

  /** Services / Programs / List */
  servicesProgramsList: IServiceProgram[];

  /** Services / General / Title */
  servicesGeneralTitle: string;

  /** Services / General / Description */
  servicesGeneralDescription: string;

  /** Services / General / List */
  servicesGeneralList: IServiceGeneral[];

  /** Services / Custom / Title */
  servicesCustomTitle: string;

  /** Services / Custom / Description */
  servicesCustomDescription: string;

  /** Services / Custom / List */
  servicesCustomList: IServiceCustom[];
}

/** This page is the landing page for "services". It has a few descriptve sections and will display all of the services and categories offered for those services */

export interface IPageService extends Entry<IPageServiceFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "pageService";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IServiceFields {
  /** Contentful Title */
  contentfulTitle?: string | undefined;

  /** Title */
  title?: string | undefined;

  /** Description */
  description?: Document | undefined;

  /** Type */
  type?: "program" | "custom" | "general" | undefined;

  /** Content */
  content: IServiceCustom | IServiceGeneral | IServiceProgram;

  /** Display as Placeholder */
  displayAsPlaceholder: boolean;
}

/** A single service offering */

export interface IService extends Entry<IServiceFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "service";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IServiceCustomFields {
  /** Contentful Title */
  contentfulTitle?: string | undefined;

  /** Display as placeholder */
  displayAsPlaceholder: boolean;

  /** Title */
  title: string;

  /** Description */
  description: Document;
}

/** A "custom" service can be thought of as an a-la-carte service. Custom can be thought of as a combination of some of the parts of program and general services. Build your own */

export interface IServiceCustom extends Entry<IServiceCustomFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "serviceCustom";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IServiceGeneralFields {
  /** Contentful Title */
  contentfulTitle?: string | undefined;

  /** Display as placeholder */
  displayAsPlaceholder: boolean;

  /** Title */
  title: string;

  /** Details */
  details?: Document | undefined;
}

/** A "general" service is a type of service that can cover one topic. Unlike the "custom" service, a "general" service is one that operates in the bounds of a topic rather than picking and choosing from multiple topics or topics that don't exist */

export interface IServiceGeneral extends Entry<IServiceGeneralFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "serviceGeneral";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IServiceProgramFields {
  /** Contentful Title */
  contentfulTitle?: string | undefined;

  /** Display as placeholder */
  displayAsPlaceholder: boolean;

  /** Program Title */
  programTitle: string;

  /** My Situation */
  mySituation: Document;

  /** What I'll Learn */
  whatIllLearn?: Document | undefined;

  /** Course Summary */
  courseSummary?: Document | undefined;

  /** What I'll Leave With */
  whatIllLeaveWith: Document;
}

/** A "program" is a service that has a set structure, agenda and purpose. It cannot be customized by the customer and should usually have a set price */

export interface IServiceProgram extends Entry<IServiceProgramFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "serviceProgram";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface ITestimonialsFields {
  /** Contentful Title */
  contentfulTitle?: string | undefined;

  /** Customer Testimonial */
  testimonialDescription: Document;

  /** Customer Description */
  customerDescription: string;

  /** Customer Location */
  customerLocation: string;

  /** Image */
  image: Asset;

  /** Masking Opacity */
  maskingOpacity: number;
}

/** A testimonial given by a former or current customer */

export interface ITestimonials extends Entry<ITestimonialsFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "testimonials";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export type CONTENT_TYPE =
  | "block"
  | "blockInspiration"
  | "blockSubscribe"
  | "blogWelcomeBanner"
  | "certification"
  | "oneHundredDays"
  | "page"
  | "pageAbout"
  | "pageBlog"
  | "pageContact"
  | "pageHome"
  | "pageNotFound"
  | "pageService"
  | "service"
  | "serviceCustom"
  | "serviceGeneral"
  | "serviceProgram"
  | "testimonials";

export type LOCALE_CODE = "en-US";

export type CONTENTFUL_DEFAULT_LOCALE_CODE = "en-US";
