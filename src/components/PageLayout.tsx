import { graphql, Link, PageProps } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React, { ReactNode } from 'react';
import {
  AiOutlineLinkedin,
  AiFillGithub,
  AiFillTwitterSquare,
} from 'react-icons/ai';

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
          <Link
            to='/'
            activeClassName='text-blue-500'
            className='hover:text-blue-300'
          >
            Home
          </Link>
          <Link
            to='/publication'
            activeClassName='text-blue-500'
            className='hover:text-blue-300'
          >
            Publication
          </Link>
          <Link
            to='/research'
            activeClassName='text-blue-500'
            className='hover:text-blue-300'
          >
            Research
          </Link>
          <Link
            to='/blog'
            activeClassName='text-blue-500'
            className='hover:text-blue-300'
          >
            Blog
          </Link>
        </div>
        <div className='flex justify-center w-full text-3xl mt-10'>
          <a
            href='https://github.com/wooogler'
            target='_blank'
            rel='noreferrer noopener'
            className='text-purple-500 mr-2'
          >
            <AiFillGithub />
          </a>
          <a
            href='https://www.linkedin.com/in/sangwook-lee/'
            target='_blank'
            rel='noreferrer noopener'
            className='text-blue-400 mr-2'
          >
            <AiOutlineLinkedin />
          </a>
          <a
            href='https://twitter.com/leesang627'
            target='_blank'
            rel='noreferrer noopener'
            className='text-sky-300'
          >
            <AiFillTwitterSquare />
          </a>
        </div>
      </div>
      <div className='flex flex-1 flex-col'>{children}</div>
    </div>
  );
}

export default PageLayout;
