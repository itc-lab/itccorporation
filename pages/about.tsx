import React from 'react';
import { NextPage, GetStaticProps } from 'next';
import Container from 'components/Container';
import CoverImage from 'components/Cover-image';
import Layout from 'components/Layout';
import Head from 'next/head';
import EmptyItems from 'components/EmptyItems';
import client from 'lib/apollo-client';
import ABOUT_DATA from 'graphql/query/about_data';
import { TITLE_NAME } from 'lib/constants';

import {
  SeoData,
  IndexContent,
  SeoOpenGraphs,
  SeoBreadcrumbJsonLd,
  Twitter,
} from 'graphql/types/types';
import { SeoContext } from './_app';

interface Available {
  logo: { url: string };
  description: string;
}

interface Props {
  contents: Array<IndexContent>;
  availables: Array<Available>;
  openGraphs: Array<SeoOpenGraphs>;
  breadcrumbJsonLds: Array<SeoBreadcrumbJsonLd>;
  twitter: Twitter;
}

const About: NextPage<Props> = ({
  contents,
  availables,
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
    <SeoContext.Provider value={seoData}>
      <Layout page="about">
        <Container>
          <>
            <Head>
              <title>
                {content.title} | {`${TITLE_NAME}`}
              </title>
            </Head>
            <div className="mb-8">
              <CoverImage
                title={content.title}
                url={`${content.image.url}`}
                url_sp={`${content.image_sp.url}`}
              />
            </div>
            <div
              className="container px-6 md:px-0"
              /*  absolute center */
              style={{
                left: 0,
                right: 0,
                top: 110,
                position: 'absolute',
                margin: 'auto',
              }}>
              <p className="about_title_jp">会社概要</p>
              <p className="about_title_en">ABOUT US</p>
            </div>
            <div
              className="pb-8"
              dangerouslySetInnerHTML={{ __html: content.content }}
            />
            <h2 className="bg-accent-1 text-center items-center text-2xl font-bold pt-6 pb-4">
              対応可能技術
            </h2>
            <div className="bg-accent-1 pb-4">
              <div
                id="available"
                style={{ minWidth: '10rem', maxWidth: '80rem' }}
                className="mx-auto container-fluid flex flex-wrap justify-center items-center">
                {availables.map((value, index) => {
                  return (
                    <div
                      key={`available-${index}`}
                      className="item border rounded-md md:w-60 md:h-40 w-38 h-32 md:m-6 md:p-4 m-2 p-2  flex flex-col justify-center items-center bg-white">
                      <div>
                        <img
                          loading="lazy"
                          className="md:w-60 md:h-32 w-40 h-24 p-1 object-contain"
                          src={value.logo.url}></img>
                      </div>
                      <div className="about-icon-desc">{value.description}</div>
                    </div>
                  );
                })}
                <EmptyItems
                  cls={['empty-item', 'w-60', 'h-40', 'm-5', 'p-4']}
                />
              </div>
            </div>
          </>
        </Container>
      </Layout>
    </SeoContext.Provider>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const { data } = await client.query({
    query: ABOUT_DATA,
    variables: { slug: 'about' },
  });
  return {
    props: { ...data },
  };
};

export default About;
