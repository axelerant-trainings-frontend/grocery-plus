import React from 'react';
import Navbar from '../navbar/Navbar';
import PageHeader from '../pageheader/PageHeader';
import { BackwardIcon } from '../iconLibrary';
import LayoutModel from '../../@types/Layout.types';
function Layout({ children, hasNavbar, pageTitle, link }: LayoutModel) {
  return (
    <div className="mx-auto max-w-screen-sm">
      <PageHeader
        title={pageTitle}
        icon={!hasNavbar ? BackwardIcon : ''}
        textVariant="medium-bold"
        link={link}
      />
      {children}
      {hasNavbar && (
        <div className="fixed bottom-0 w-full">
          <Navbar />
        </div>
      )}
    </div>
  );
}

export default Layout;
