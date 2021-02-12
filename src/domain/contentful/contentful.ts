// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.

import { Asset, Entry } from "contentful";
import { Document } from "@contentful/rich-text-types";

export interface IActionFields {
  /** System ID */
  systemId: string;

  /** Type */
  type: "primary" | "secondary";

  /** Internal / External */
  internalExternal: "internal" | "external";

  /** Label */
  label: string;

  /** URL */
  url: string;
}

/** A single action (typically a link styled as a button) that can take the user either to an external link or to a part of the internal website */

export interface IAction extends Entry<IActionFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "action";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IBlockFields {
  /** System ID */
  systemId: string;

  /** Type */
  type: "plain" | "stacked";

  /** Title */
  title: string;

  /** Description */
  description?: Document | undefined;

  /** Actions */
  actions?: IAction[] | undefined;

  /** Form */
  form?: IForm | undefined;
}

/** A block of content that can be used on one or many pages */

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

export interface IBlockGrabberFields {
  /** System ID */
  systemId: string;

  /** Title */
  title: string;

  /** Description */
  description: Document;

  /** Image */
  image: Asset;

  /** Image Orientation */
  imageOrientation?: "image-on-left" | "image-on-right" | undefined;

  /** Form */
  form: Entry<{ [fieldId: string]: unknown }>;
}

/** A block that is a grabber that has some sort of email form or action associated with it. It is intended to grab the users email address and offer something in exchange for it. */

export interface IBlockGrabber extends Entry<IBlockGrabberFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "blockGrabber";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IBlockImageRowFields {
  /** System ID */
  systemId: string;

  /** Title */
  title: string;

  /** Description */
  description?: Document | undefined;

  /** Images */
  images: Asset[];
}

/** A block that has a title and a row of images that wrap to multiple lines */

export interface IBlockImageRow extends Entry<IBlockImageRowFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "blockImageRow";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IBlockPictureGridFields {
  /** System ID */
  systemId: string;

  /** Block */
  block: IBlock;

  /** Images */
  images: Asset[];
}

/** This is a block that has a picture grid associated with it */

export interface IBlockPictureGrid extends Entry<IBlockPictureGridFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "blockPictureGrid";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IBlockTestimonialFields {
  /** System ID */
  systemId: string;

  /** Block */
  block: IBlock;

  /** Testimonial Entries */
  testimonialEntries: ITestimonials[];
}

/** A block that has testimonials in it */

export interface IBlockTestimonial extends Entry<IBlockTestimonialFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "blockTestimonial";
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

export interface IFormFields {
  /** SystemID */
  systemId: string;

  /** Embedded Link */
  embeddedLink: string;
}

/** A type that houses some forms that can be used one or many times in page blocks */

export interface IForm extends Entry<IFormFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "form";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IHeroFields {
  /** System ID */
  systemId: string;

  /** Type */
  type: "plain" | "split-horizontal" | "offset-vertical" | "offset-horizontal";

  /** Title */
  title: string;

  /** Sub-title */
  subTitle?: string | undefined;

  /** Image */
  image?: Asset | undefined;

  /** Image Alt */
  imageAlt?: string | undefined;
}

/** A hero is the first part of a page that contains an image, a style, a title, subtitle. It should only be used once on each page */

export interface IHero extends Entry<IHeroFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "hero";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IServiceFields {
  /** System ID */
  systemId: string;

  /** Category */
  category: "private" | "program";

  /** Image */
  image: Asset;

  /** Title */
  title: string;

  /** Sub Title */
  subTitle: string;

  /** Description */
  description: Document;

  /** Type */
  type: IServiceBasic | IServiceContact | IServiceTeachable;
}

/** A service offering */

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

export interface IServiceBasicFields {
  /** System Id */
  systemId: string;

  /** Slug */
  slug: string;

  /** Full Description */
  fullDescription: Document;

  /** Main Image */
  mainImage: Asset;

  /** Is Active? */
  isActive: boolean;
}

/** A type of service that is going to be as basic as possible. It will link to a new page that will explain more about it and have links to purchase it. */

export interface IServiceBasic extends Entry<IServiceBasicFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "serviceBasic";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IServiceContactFields {
  /** System Id */
  systemId: string;

  /** Form */
  form: IForm;

  /** Is Active */
  isActive: boolean;
}

/** A type of service that requires the individual to first fill out a contact form to get in touch about the service provided */

export interface IServiceContact extends Entry<IServiceContactFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "serviceContact";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IServiceTeachableFields {
  /** System Id */
  systemId: string;

  /** Actions */
  actions: IAction[];
}

/** A type of service that has a teachable course associated with it */

export interface IServiceTeachable extends Entry<IServiceTeachableFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "serviceTeachable";
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

export interface IWebPageFields {
  /** System ID */
  systemId: string;

  /** URL */
  url: string;

  /** Navbar Label */
  navbarLabel: string;

  /** Display in Navbar? */
  displayInNavbar: boolean;

  /** Hero */
  hero: IHero;

  /** Blocks */
  blocks?:
    | (
        | IBlockGrabber
        | IBlockImageRow
        | IBlockPictureGrid
        | IBlock
        | IBlockTestimonial
      )[]
    | undefined;
}

/** The base type that can be used to create a page */

export interface IWebPage extends Entry<IWebPageFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "webPage";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export type CONTENT_TYPE =
  | "action"
  | "block"
  | "blockGrabber"
  | "blockImageRow"
  | "blockPictureGrid"
  | "blockTestimonial"
  | "certification"
  | "form"
  | "hero"
  | "service"
  | "serviceBasic"
  | "serviceContact"
  | "serviceTeachable"
  | "testimonials"
  | "webPage";

export type LOCALE_CODE = "en-US";

export type CONTENTFUL_DEFAULT_LOCALE_CODE = "en-US";
