import React, { FunctionComponent } from 'react';
import Alert from './Alert';
import Footer from './Footer';
import NavBar from './Navbar';
import SEO from 'components/Seo';

interface Props {
  page?: string;
}
const Layout: FunctionComponent<Props> = ({ page, children }) => {
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <SEO />
      <div>
        <Alert />
        <NavBar page={page} />
        {children}
      </div>
      <Footer page={page} />
    </div>
  );
};
export default Layout;
