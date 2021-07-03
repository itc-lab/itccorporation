import React, { FunctionComponent } from 'react';
import CoverImage from './Cover-image';
import { IndexContent } from 'graphql/types/types';

interface Props {
  content: IndexContent;
}

const Hero: FunctionComponent<Props> = ({ content }) => {
  const { title, image, image_sp, whats_new } = content;
  return (
    <section>
      <div className="mb-8">
        <CoverImage
          title={title}
          url={`${image.url}`}
          url_sp={`${image_sp.url}`}
        />
      </div>
      <div
        className="container md:px-0 px-6"
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 110,
          margin: 'auto',
          height: '41vw',
        }}>
        <p className="top_next_js">
          A statically generated site using{' '}
          <a
            className="underline hover:text-success duration-200 transition-colors"
            href="https://nextjs.org/"
            target="_blank"
            rel="noreferrer">
            Next.js
          </a>
        </p>
        <p className="top_name_jp">株式会社アイティーシー</p>
        <p className="top_name_en">
          ITC
          <span className="br" /> CORPORATION
        </p>
        <p className="top_desc">
          &nbsp; &nbsp; SYSTEM ARCHITECT
          <br />
          &nbsp; &nbsp; DEVELOPMENT
        </p>
      </div>
      <div
        className="container mx-auto mb-4"
        style={{
          textAlign: 'center',
          whiteSpace: 'nowrap',
        }}>
        <div
          className="font-medium mb-1"
          style={{ fontSize: '40px', whiteSpace: 'nowrap' }}>
          {"WHAT'S NEW"}
        </div>
        <div
          className="font-regular mb-1"
          style={{ fontSize: '20px', whiteSpace: 'nowrap' }}>
          お知らせ
        </div>
        <div
          style={{ textAlign: 'center' }}
          dangerouslySetInnerHTML={{ __html: whats_new }}
        />
      </div>
    </section>
  );
};
export default Hero;
