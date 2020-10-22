/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */

import * as ContextModule from "../src/app.context";

declare global {
  interface NexusGenCustomOutputProperties<TypeName extends string> {
    crud: NexusPrisma<TypeName, "crud">;
    model: NexusPrisma<TypeName, "model">;
  }
}

declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {}

export interface NexusGenEnums {}

export interface NexusGenScalars {
  String: string;
  Int: number;
  Float: number;
  Boolean: boolean;
  ID: string;
}

export interface NexusGenRootTypes {
  DatetimeTZ: {
    // root type
    local?: string | null; // String
    start?: string | null; // String
    utc?: string | null; // String
  };
  Event: {
    // root type
    changed?: string | null; // String
    created?: string | null; // String
    description?: string | null; // String
    end?: NexusGenRootTypes["DatetimeTZ"] | null; // DatetimeTZ
    name?: NexusGenRootTypes["MultipartText"] | null; // MultipartText
    published?: string | null; // String
    start?: NexusGenRootTypes["DatetimeTZ"] | null; // DatetimeTZ
    summary?: string | null; // String
    url?: string | null; // String
  };
  Events: {
    // root type
    list?: Array<NexusGenRootTypes["Event"] | null> | null; // [Event]
    pagination?: NexusGenRootTypes["Pagination"] | null; // Pagination
  };
  Message: {
    // root type
    message?: string | null; // String
  };
  MultipartText: {
    // root type
    html?: string | null; // String
    text?: string | null; // String
  };
  Mutation: {};
  Pagination: {
    // root type
    has_more_items?: boolean | null; // Boolean
    object_count?: number | null; // Int
    page_count?: number | null; // Int
    page_number?: number | null; // Int
    page_size?: number | null; // Int
  };
  Query: {};
  StripeCheckoutSession: {
    // root type
    id?: string | null; // String
  };
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  String: NexusGenScalars["String"];
  Int: NexusGenScalars["Int"];
  Float: NexusGenScalars["Float"];
  Boolean: NexusGenScalars["Boolean"];
  ID: NexusGenScalars["ID"];
}

export interface NexusGenFieldTypes {
  DatetimeTZ: {
    // field return type
    local: string | null; // String
    start: string | null; // String
    utc: string | null; // String
  };
  Event: {
    // field return type
    changed: string | null; // String
    created: string | null; // String
    description: string | null; // String
    end: NexusGenRootTypes["DatetimeTZ"] | null; // DatetimeTZ
    name: NexusGenRootTypes["MultipartText"] | null; // MultipartText
    published: string | null; // String
    start: NexusGenRootTypes["DatetimeTZ"] | null; // DatetimeTZ
    summary: string | null; // String
    url: string | null; // String
  };
  Events: {
    // field return type
    list: Array<NexusGenRootTypes["Event"] | null> | null; // [Event]
    pagination: NexusGenRootTypes["Pagination"] | null; // Pagination
  };
  Message: {
    // field return type
    message: string | null; // String
  };
  MultipartText: {
    // field return type
    html: string | null; // String
    text: string | null; // String
  };
  Mutation: {
    // field return type
    checkoutHeatherTuranoCoaching:
      | NexusGenRootTypes["StripeCheckoutSession"]
      | null; // StripeCheckoutSession
    checkoutMindfulMovement: NexusGenRootTypes["StripeCheckoutSession"] | null; // StripeCheckoutSession
    confirmEmail: NexusGenRootTypes["Message"] | null; // Message
    forgotPassword: NexusGenRootTypes["Message"] | null; // Message
    resetPassword: NexusGenRootTypes["Message"] | null; // Message
    signIn: boolean | null; // Boolean
    signUp: NexusGenRootTypes["Message"] | null; // Message
    verifyResetPasswordToken: boolean | null; // Boolean
  };
  Pagination: {
    // field return type
    has_more_items: boolean | null; // Boolean
    object_count: number | null; // Int
    page_count: number | null; // Int
    page_number: number | null; // Int
    page_size: number | null; // Int
  };
  Query: {
    // field return type
    events: NexusGenRootTypes["Events"] | null; // Events
  };
  StripeCheckoutSession: {
    // field return type
    id: string | null; // String
  };
}

export interface NexusGenArgTypes {
  Mutation: {
    checkoutHeatherTuranoCoaching: {
      // args
      priceId: string; // String!
    };
    checkoutMindfulMovement: {
      // args
      priceId: string; // String!
    };
    confirmEmail: {
      // args
      emailAddress: string; // String!
      token: string; // String!
    };
    forgotPassword: {
      // args
      emailAddress: string; // String!
    };
    resetPassword: {
      // args
      emailAddress: string; // String!
      password: string; // String!
      repeatPassword: string; // String!
      token: string; // String!
    };
    signIn: {
      // args
      emailAddress: string; // String!
      password: string; // String!
    };
    signUp: {
      // args
      emailAddress: string; // String!
      firstName: string; // String!
      lastName: string; // String!
      password: string; // String!
      repeatPassword: string; // String!
    };
    verifyResetPasswordToken: {
      // args
      emailAddress: string; // String!
      token: string; // String!
    };
  };
}

export interface NexusGenAbstractResolveReturnTypes {}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames =
  | "DatetimeTZ"
  | "Event"
  | "Events"
  | "Message"
  | "MultipartText"
  | "Mutation"
  | "Pagination"
  | "Query"
  | "StripeCheckoutSession";

export type NexusGenInputNames = never;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = "Boolean" | "Float" | "ID" | "Int" | "String";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: ContextModule.Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes:
    | NexusGenTypes["inputNames"]
    | NexusGenTypes["enumNames"]
    | NexusGenTypes["scalarNames"];
  allOutputTypes:
    | NexusGenTypes["objectNames"]
    | NexusGenTypes["enumNames"]
    | NexusGenTypes["unionNames"]
    | NexusGenTypes["interfaceNames"]
    | NexusGenTypes["scalarNames"];
  allNamedTypes:
    | NexusGenTypes["allInputTypes"]
    | NexusGenTypes["allOutputTypes"];
  abstractTypes: NexusGenTypes["interfaceNames"] | NexusGenTypes["unionNames"];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}

declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {}
  interface NexusGenPluginFieldConfig<
    TypeName extends string,
    FieldName extends string
  > {}
  interface NexusGenPluginSchemaConfig {}
}