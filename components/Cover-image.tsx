import React, { FunctionComponent } from 'react';
import Link from 'next/link';

interface Props {
  title?: string;
  url: string;
  slug?: string;
  url_sp?: string;
}

const CoverImage: FunctionComponent<Props> = ({ title, url, slug, url_sp }) => {
  const image = (
    <div>
      <picture>
        <source media="(max-width: 768px)" srcSet={url_sp} />
        <img
          loading="lazy"
          className="mx-auto"
          alt={`Cover Image for ${title}`}
          src={url}
        />
      </picture>
    </div>
  );
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/`} href="/">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  );
};
export default CoverImage;
