import React, { FunctionComponent } from 'react';
import Container from './Container';
import { GITHUB_URL } from '../lib/constants';

const Alert: FunctionComponent = () => {
  return (
    <div className="border-b bg-accent-7 border-accent-7 text-white">
      <Container>
        <div className="py-2 text-center text-sm">
          <>
            The source code for this site is{' '}
            <a
              href={GITHUB_URL}
              className="underline hover:text-success duration-200 transition-colors">
              available on GitHub
            </a>
            .
          </>
        </div>
      </Container>
    </div>
  );
};
export default Alert;
