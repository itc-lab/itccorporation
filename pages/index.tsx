import React from 'react';
import { NextPage, GetStaticProps } from 'next';
import Container from 'components/Container';
import Hero from 'components/Hero';
import Layout from 'components/Layout';
import Head from 'next/head';
import { TITLE_NAME } from 'lib/constants';
import Gitter from 'components/Gitter';
import client from 'lib/apollo-client';
import INDEX_DATA from 'graphql/query/index_data';
import {
  SeoData,
  IndexContent,
  SeoOpenGraphs,
  SeoBreadcrumbJsonLd,
  Twitter,
} from 'graphql/types/types';
import { SeoContext } from './_app';

interface Props {
  contents: Array<IndexContent>;
  openGraphs: Array<SeoOpenGraphs>;
  breadcrumbJsonLds: Array<SeoBreadcrumbJsonLd>;
  twitter: Twitter;
}

const Index: NextPage<Props> = ({
  contents,
  openGraphs,
  breadcrumbJsonLds,
  twitter,
}) => {
  const content = contents[0];
  const seoData: SeoData = {
    openGraphs: openGraphs[0],
    breadcrumbJsonLds,
    twitter,
  };
  return (
    <>
      <SeoContext.Provider value={seoData}>
        <Layout page="top">
          <Head>
            <title>{TITLE_NAME}</title>
          </Head>
          <Container>{content && <Hero content={content} />}</Container>
        </Layout>
      </SeoContext.Provider>
      <Gitter room="itccorporation/community" title="チャットで問い合わせる" />
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const { data } = await client.query({
    query: INDEX_DATA,
    variables: { slug: 'home' },
  });
  return {
    props: { ...data },
  };
};

export default Index;
