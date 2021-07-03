import React, { FunctionComponent } from 'react';
import Link from 'next/link';
import Logo2 from './Logo2';
import PoweredBy from './Poweredby';

interface Props {
  page?: string;
}
const Footer: FunctionComponent<Props> = ({ page }) => {
  return (
    <footer style={{ marginTop: 'auto' }}>
      <PoweredBy />
      <div
        className={
          `bg-accent-1 border-t border-accent-2 pt-4 ` +
          (page != 'top' ? '' : 'pb-14 sm:pb-0')
        }
        style={{ width: 'auto', textAlign: 'center' }}>
        <Link href="/">
          <a className="text-sm inline-block">
            <Logo2 />
          </a>
        </Link>
      </div>
    </footer>
  );
};
export default Footer;
