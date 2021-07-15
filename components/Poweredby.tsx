import React, { FunctionComponent } from 'react';

const PoweredBy: FunctionComponent = () => {
  return (
    <div className="containare mx-auto poweredby mt-8">
      {' '}
      <div style={{ textAlign: 'center' }}>
        <span>Powered by &nbsp;</span>
        <span>
          <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
            <img
              loading="lazy"
              src="/uploads/NEXT_js_logo_1d96b78e27.svg"
              alt="NEXT.js"
              width="110px"
              style={{ display: 'inline' }}
            />
          </a>
        </span>
      </div>
      <div style={{ width: 'auto', textAlign: 'center', whiteSpace: 'nowrap' }}>
        <a
          href="https://nodejs.org/"
          className="underline hover:text-success duration-200 transition-colors"
          target="_blank"
          rel="noreferrer">
          Node.js
        </a>
        &nbsp;
        <a
          href="https://reactjs.org/"
          className="underline hover:text-success duration-200 transition-colors"
          target="_blank"
          rel="noreferrer">
          React
        </a>
        &nbsp;
        <a
          href="https://www.typescriptlang.org/"
          className="underline hover:text-success duration-200 transition-colors"
          target="_blank"
          rel="noreferrer">
          TypeScript
        </a>
        &nbsp;
        <a
          href="https://tailwindcss.com/"
          className="underline hover:text-success duration-200 transition-colors"
          target="_blank"
          rel="noreferrer">
          TailwindCSS
        </a>
        &nbsp;
        <a
          href="https://strapi.io/"
          className="underline hover:text-success duration-200 transition-colors"
          target="_blank"
          rel="noreferrer">
          Strapi
        </a>
        &nbsp;
        <a
          href="https://graphql.org/"
          className="underline hover:text-success duration-200 transition-colors"
          target="_blank"
          rel="noreferrer">
          GraphQL
        </a>
      </div>
      <div
        className="mt-4 mb-4"
        style={{ width: 'auto', textAlign: 'center', whiteSpace: 'nowrap' }}>
        <span>built on&nbsp;</span>
        <span>
          <a href="https://jamstack.org/" target="_blank" rel="noreferrer">
            <img
              loading="lazy"
              src="/uploads/jamstack_logo_97b45f051f.svg"
              alt="jamstack"
              width="100px"
              style={{ display: 'inline' }}
            />
          </a>
        </span>
      </div>
    </div>
  );
};

export default PoweredBy;
