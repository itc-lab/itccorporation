import React, { createContext, FunctionComponent } from 'react';
import { AppProps } from 'next/app';
import '../styles/index.css'; //tailwind css
import { SeoData } from 'graphql/types/types';

export const SeoContext = createContext({} as SeoData);

const MyApp: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
