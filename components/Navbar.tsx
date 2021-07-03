import React, { FunctionComponent } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import { BLOG_URL } from '../lib/constants';

interface Props {
  page?: string;
}
const Navbar: FunctionComponent<Props> = ({ page }): JSX.Element => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="top-0 sticky flex flex-wrap items-center justify-between px-1 py-1 navbar-expand-lg bg-blue-900 mb-0 z-50">
        <div className="container md:px-0 px-6 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/">
              <a className="text-sm inline-block mr-4 py-2">
                <Logo />
              </a>
            </Link>
            <div
              className={
                'tham tham-e-squeeze tham-w-8 leading-relaxed inline-block my-auto' +
                (navbarOpen ? ' tham-active ' : ' ') +
                'lg:hidden outline-none focus:outline-none'
              }
              onClick={() => setNavbarOpen(!navbarOpen)}>
              <div className="tham-box">
                <div className="tham-inner bg-white" />
              </div>
            </div>
          </div>
          <div
            className={
              'justify-end lg:flex flex-grow text-end  items-center' +
              (navbarOpen ? ' flex' : ' hidden')
            }>
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li
                onClick={() => setNavbarOpen(!navbarOpen)}
                className="ml-auto nav-item">
                <Link href="/about">
                  <a
                    className={
                      'py-2 flex uppercase leading-snug ' +
                      (page == 'about' ? 'text-orange' : 'text-white') +
                      ' hover:text-orange'
                    }>
                    <span className="navi_link_string text-end ml-2">
                      About us
                    </span>
                  </a>
                </Link>
              </li>
              <li
                onClick={() => setNavbarOpen(!navbarOpen)}
                className="ml-auto nav-item">
                <Link href={BLOG_URL}>
                  <a
                    target="_blank"
                    className="ml-14 py-2 flex uppercase leading-snug text-white hover:text-orange">
                    <span className="navi_link_string ml-2">Tech Blog</span>
                  </a>
                </Link>
              </li>
              <li
                onClick={() => setNavbarOpen(!navbarOpen)}
                className="ml-auto nav-item">
                <Link href="/contacts">
                  <a
                    className={
                      'ml-14 py-2 flex uppercase leading-snug ' +
                      (page == 'contact' ? 'text-orange' : 'text-white') +
                      ' hover:text-orange'
                    }>
                    <span className="navi_link_string ml-2">Contact</span>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
