import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className='m-auto max-w-2xl font-sans'>
      <title>
        {pageTitle} | {data.site.siteMetadata.title}
      </title>
      <header className='text-5xl text-gray-400 font-bold my-12'>
        {data.site.siteMetadata.title}
      </header>
      <div className='flex underline my-4'>
        <div className='pr-3'>
          <Link to='/'>Home</Link>
        </div>
        <div className='pr-3'>
          <Link to='/about'>About</Link>
        </div>
        <div>
          <Link to='/blog'>Blog</Link>
        </div>
      </div>
      <div className='text-4xl text-purple-600 font-extrabold mb-4'>
        {pageTitle}
      </div>
      {children}
    </div>
  );
};

export default Layout;
