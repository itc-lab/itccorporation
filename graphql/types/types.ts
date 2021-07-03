export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  JSON: any;
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  DateTime: any;
};

export type OpenGraph = {
  __typename?: 'OpenGraph';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  slug?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  seo_images?: Maybe<Array<Maybe<SeoImage>>>;
};

export type OpenGraphSeo_ImagesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type SeoImage = {
  __typename?: 'SeoImage';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  image?: Maybe<UploadFile>;
  alt?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type BreadcrumbJsonLd = {
  __typename?: 'BreadcrumbJsonLd';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  position?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  item?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name: Scalars['String'];
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  ext?: Maybe<Scalars['String']>;
  mime: Scalars['String'];
  size: Scalars['Float'];
  url: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
};

export type Content = {
  __typename?: 'Content';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  image?: Maybe<UploadFile>;
  slug?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type IndexContent = {
  id: string;
  updated_at: string;
  title: string;
  content: string;
  image: { url: string; width: number; height: number };
  image_sp: { url: string; width: number; height: number };
  whats_new: string;
  slug: string;
};

export interface SeoOpenGraphs {
  slug: string;
  type: string;
  url: string;
  title: string;
  description: string;
  seo_images: Array<Seo_Images>;
}
export interface Seo_Images {
  alt: string;
  image: { url: string; width: number; height: number };
}
export interface SeoBreadcrumbJsonLd {
  position: number;
  name: string;
  item: string;
}
export interface SeoData {
  openGraphs: SeoOpenGraphs;
  breadcrumbJsonLds: Array<SeoBreadcrumbJsonLd>;
}
