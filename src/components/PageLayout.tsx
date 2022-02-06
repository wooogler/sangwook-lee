import { graphql, Link, PageProps } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

function PageLayout({ children }: Props) {
  return (
    <div className='max-w-4xl mx-auto my-16 flex'>
      <div className='w-48 flex flex-col mr-4'>
        <StaticImage
          src='../images/profile.jpg'
          alt="Sangwook's profile image"
          className='mb-4'
        />
        <div className='text-2xl font-bold'>Sangwook Lee</div>
        <div className='my-2'>HCI, Online community, VR/AR, Mobile System</div>
        <div className='flex flex-col'>
          <Link to='/' activeClassName='text-blue-500'>
            Home
          </Link>
          <Link to='/publication' activeClassName='text-blue-500'>
            Publication
          </Link>
          <Link to='/research' activeClassName='text-blue-500'>
            Research
          </Link>
          <Link to='/blog' activeClassName='text-blue-500'>
            Blog
          </Link>
        </div>
      </div>
      <div className='flex flex-1 flex-col'>{children}</div>
    </div>
  );
}

export default PageLayout;
