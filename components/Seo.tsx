import React, { FunctionComponent, useContext } from 'react';
import { NextSeo, BreadcrumbJsonLd } from 'next-seo';
import { SeoContext } from 'pages/_app';
import { HOME_URL } from 'lib/constants';

export const SEO: FunctionComponent = () => {
  const seo_data = useContext(SeoContext);
  const { openGraphs, breadcrumbJsonLds, twitter } = seo_data;
  const images = openGraphs.seo_images.map((entry) => {
    return {
      alt: entry.alt as string,
      url: `${HOME_URL}${entry.image.url}` as string,
      width: entry.image.width as number,
      height: entry.image.height as number,
    };
  });
  if (images == undefined) {
    throw new Error('error!');
  }
  return (
    <>
      <NextSeo
        openGraph={{
          type: openGraphs.type as string,
          url: openGraphs.url as string,
          title: openGraphs.title as string,
          description: openGraphs.description as string,
          images: images,
        }}
        twitter={{
          handle: twitter.handle as string,
          site: twitter.site as string,
          cardType: twitter.cardtype as string,
        }}
      />
      <BreadcrumbJsonLd
        itemListElements={breadcrumbJsonLds.map((entry) => {
          return {
            position: entry.position as number,
            name: entry.name as string,
            item: entry.item as string,
          };
        })}
      />
    </>
  );
};
export default SEO;
