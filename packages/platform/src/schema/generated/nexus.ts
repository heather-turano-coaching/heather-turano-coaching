/**
 * This file was automatically generated by GraphQL Nexus
 * Do not make changes to this file directly
 */

import * as Context from "../../context"



declare global {
  interface NexusGenCustomOutputProperties<TypeName extends string> {
    crud: NexusPrisma<TypeName, 'crud'>
    model: NexusPrisma<TypeName, 'model'>
  }
}

declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  BooleanFilter: { // input type
    equals?: boolean | null; // Boolean
    not?: boolean | null; // Boolean
  }
  IntFilter: { // input type
    equals?: number | null; // Int
    gt?: number | null; // Int
    gte?: number | null; // Int
    in?: number[] | null; // [Int!]
    lt?: number | null; // Int
    lte?: number | null; // Int
    not?: number | null; // Int
    notIn?: number[] | null; // [Int!]
  }
  NullableStringFilter: { // input type
    contains?: string | null; // String
    endsWith?: string | null; // String
    equals?: string | null; // String
    gt?: string | null; // String
    gte?: string | null; // String
    in?: string[] | null; // [String!]
    lt?: string | null; // String
    lte?: string | null; // String
    not?: string | null; // String
    notIn?: string[] | null; // [String!]
    startsWith?: string | null; // String
  }
  PostCreateManyWithoutAuthorInput: { // input type
    connect?: NexusGenInputs['PostWhereUniqueInput'][] | null; // [PostWhereUniqueInput!]
    create?: NexusGenInputs['PostCreateWithoutAuthorInput'][] | null; // [PostCreateWithoutAuthorInput!]
  }
  PostCreateWithoutAuthorInput: { // input type
    content?: string | null; // String
    published?: boolean | null; // Boolean
    title: string; // String!
  }
  PostScalarWhereInput: { // input type
    AND?: NexusGenInputs['PostScalarWhereInput'][] | null; // [PostScalarWhereInput!]
    authorId?: NexusGenInputs['StringFilter'] | null; // StringFilter
    content?: NexusGenInputs['NullableStringFilter'] | null; // NullableStringFilter
    id?: NexusGenInputs['IntFilter'] | null; // IntFilter
    NOT?: NexusGenInputs['PostScalarWhereInput'][] | null; // [PostScalarWhereInput!]
    OR?: NexusGenInputs['PostScalarWhereInput'][] | null; // [PostScalarWhereInput!]
    published?: NexusGenInputs['BooleanFilter'] | null; // BooleanFilter
    title?: NexusGenInputs['StringFilter'] | null; // StringFilter
  }
  PostUpdateManyDataInput: { // input type
    content?: string | null; // String
    id?: number | null; // Int
    published?: boolean | null; // Boolean
    title?: string | null; // String
  }
  PostUpdateManyWithWhereNestedInput: { // input type
    data: NexusGenInputs['PostUpdateManyDataInput']; // PostUpdateManyDataInput!
    where: NexusGenInputs['PostScalarWhereInput']; // PostScalarWhereInput!
  }
  PostUpdateManyWithoutAuthorInput: { // input type
    connect?: NexusGenInputs['PostWhereUniqueInput'][] | null; // [PostWhereUniqueInput!]
    create?: NexusGenInputs['PostCreateWithoutAuthorInput'][] | null; // [PostCreateWithoutAuthorInput!]
    delete?: NexusGenInputs['PostWhereUniqueInput'][] | null; // [PostWhereUniqueInput!]
    deleteMany?: NexusGenInputs['PostScalarWhereInput'][] | null; // [PostScalarWhereInput!]
    disconnect?: NexusGenInputs['PostWhereUniqueInput'][] | null; // [PostWhereUniqueInput!]
    set?: NexusGenInputs['PostWhereUniqueInput'][] | null; // [PostWhereUniqueInput!]
    update?: NexusGenInputs['PostUpdateWithWhereUniqueWithoutAuthorInput'][] | null; // [PostUpdateWithWhereUniqueWithoutAuthorInput!]
    updateMany?: NexusGenInputs['PostUpdateManyWithWhereNestedInput'][] | null; // [PostUpdateManyWithWhereNestedInput!]
    upsert?: NexusGenInputs['PostUpsertWithWhereUniqueWithoutAuthorInput'][] | null; // [PostUpsertWithWhereUniqueWithoutAuthorInput!]
  }
  PostUpdateWithWhereUniqueWithoutAuthorInput: { // input type
    data: NexusGenInputs['PostUpdateWithoutAuthorDataInput']; // PostUpdateWithoutAuthorDataInput!
    where: NexusGenInputs['PostWhereUniqueInput']; // PostWhereUniqueInput!
  }
  PostUpdateWithoutAuthorDataInput: { // input type
    content?: string | null; // String
    id?: number | null; // Int
    published?: boolean | null; // Boolean
    title?: string | null; // String
  }
  PostUpsertWithWhereUniqueWithoutAuthorInput: { // input type
    create: NexusGenInputs['PostCreateWithoutAuthorInput']; // PostCreateWithoutAuthorInput!
    update: NexusGenInputs['PostUpdateWithoutAuthorDataInput']; // PostUpdateWithoutAuthorDataInput!
    where: NexusGenInputs['PostWhereUniqueInput']; // PostWhereUniqueInput!
  }
  PostWhereUniqueInput: { // input type
    id?: number | null; // Int
  }
  StringFilter: { // input type
    contains?: string | null; // String
    endsWith?: string | null; // String
    equals?: string | null; // String
    gt?: string | null; // String
    gte?: string | null; // String
    in?: string[] | null; // [String!]
    lt?: string | null; // String
    lte?: string | null; // String
    not?: string | null; // String
    notIn?: string[] | null; // [String!]
    startsWith?: string | null; // String
  }
  UserCreateInput: { // input type
    email: string; // String!
    id: string; // String!
    name?: string | null; // String
    posts?: NexusGenInputs['PostCreateManyWithoutAuthorInput'] | null; // PostCreateManyWithoutAuthorInput
  }
  UserUpdateInput: { // input type
    email?: string | null; // String
    id?: string | null; // String
    name?: string | null; // String
    posts?: NexusGenInputs['PostUpdateManyWithoutAuthorInput'] | null; // PostUpdateManyWithoutAuthorInput
  }
  UserWhereUniqueInput: { // input type
    email?: string | null; // String
    id?: string | null; // String
  }
}

export interface NexusGenEnums {
}

export interface NexusGenRootTypes {
  Mutation: {};
  Post: { // root type
    content?: string | null; // String
    id: number; // Int!
    published: boolean; // Boolean!
    title: string; // String!
  }
  Query: {};
  User: { // root type
    email: string; // String!
    id: string; // String!
    name?: string | null; // String
  }
  String: string;
  Int: number;
  Float: number;
  Boolean: boolean;
  ID: string;
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  BooleanFilter: NexusGenInputs['BooleanFilter'];
  IntFilter: NexusGenInputs['IntFilter'];
  NullableStringFilter: NexusGenInputs['NullableStringFilter'];
  PostCreateManyWithoutAuthorInput: NexusGenInputs['PostCreateManyWithoutAuthorInput'];
  PostCreateWithoutAuthorInput: NexusGenInputs['PostCreateWithoutAuthorInput'];
  PostScalarWhereInput: NexusGenInputs['PostScalarWhereInput'];
  PostUpdateManyDataInput: NexusGenInputs['PostUpdateManyDataInput'];
  PostUpdateManyWithWhereNestedInput: NexusGenInputs['PostUpdateManyWithWhereNestedInput'];
  PostUpdateManyWithoutAuthorInput: NexusGenInputs['PostUpdateManyWithoutAuthorInput'];
  PostUpdateWithWhereUniqueWithoutAuthorInput: NexusGenInputs['PostUpdateWithWhereUniqueWithoutAuthorInput'];
  PostUpdateWithoutAuthorDataInput: NexusGenInputs['PostUpdateWithoutAuthorDataInput'];
  PostUpsertWithWhereUniqueWithoutAuthorInput: NexusGenInputs['PostUpsertWithWhereUniqueWithoutAuthorInput'];
  PostWhereUniqueInput: NexusGenInputs['PostWhereUniqueInput'];
  StringFilter: NexusGenInputs['StringFilter'];
  UserCreateInput: NexusGenInputs['UserCreateInput'];
  UserUpdateInput: NexusGenInputs['UserUpdateInput'];
  UserWhereUniqueInput: NexusGenInputs['UserWhereUniqueInput'];
}

export interface NexusGenFieldTypes {
  Mutation: { // field return type
    createDraft: NexusGenRootTypes['Post']; // Post!
    deleteOnePost: NexusGenRootTypes['Post'] | null; // Post
    loadUser: NexusGenRootTypes['User']; // User!
    publish: NexusGenRootTypes['Post'] | null; // Post
    signupUser: NexusGenRootTypes['User']; // User!
    updateOneUser: NexusGenRootTypes['User'] | null; // User
  }
  Post: { // field return type
    content: string | null; // String
    id: number; // Int!
    published: boolean; // Boolean!
    title: string; // String!
  }
  Query: { // field return type
    feed: NexusGenRootTypes['Post'][]; // [Post!]!
    feedSecured: NexusGenRootTypes['Post'][]; // [Post!]!
    filterPosts: NexusGenRootTypes['Post'][]; // [Post!]!
    post: NexusGenRootTypes['Post'] | null; // Post
    user: NexusGenRootTypes['User'] | null; // User
  }
  User: { // field return type
    email: string; // String!
    id: string; // String!
    name: string | null; // String
    posts: NexusGenRootTypes['Post'][]; // [Post!]!
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createDraft: { // args
      authorEmail?: string | null; // String
      content?: string | null; // String
      title: string; // String!
    }
    deleteOnePost: { // args
      where: NexusGenInputs['PostWhereUniqueInput']; // PostWhereUniqueInput!
    }
    publish: { // args
      id?: string | null; // ID
    }
    signupUser: { // args
      data: NexusGenInputs['UserCreateInput']; // UserCreateInput!
    }
    updateOneUser: { // args
      data: NexusGenInputs['UserUpdateInput']; // UserUpdateInput!
      where: NexusGenInputs['UserWhereUniqueInput']; // UserWhereUniqueInput!
    }
  }
  Query: {
    filterPosts: { // args
      searchString?: string | null; // String
    }
    post: { // args
      where: NexusGenInputs['PostWhereUniqueInput']; // PostWhereUniqueInput!
    }
    user: { // args
      where: NexusGenInputs['UserWhereUniqueInput']; // UserWhereUniqueInput!
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "Mutation" | "Post" | "Query" | "User";

export type NexusGenInputNames = "BooleanFilter" | "IntFilter" | "NullableStringFilter" | "PostCreateManyWithoutAuthorInput" | "PostCreateWithoutAuthorInput" | "PostScalarWhereInput" | "PostUpdateManyDataInput" | "PostUpdateManyWithWhereNestedInput" | "PostUpdateManyWithoutAuthorInput" | "PostUpdateWithWhereUniqueWithoutAuthorInput" | "PostUpdateWithoutAuthorDataInput" | "PostUpsertWithWhereUniqueWithoutAuthorInput" | "PostWhereUniqueInput" | "StringFilter" | "UserCreateInput" | "UserUpdateInput" | "UserWhereUniqueInput";

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = "Boolean" | "Float" | "ID" | "Int" | "String";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: Context.Context;
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
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
}