import { graphql, Link, PageProps } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React, { ReactNode } from 'react';
import {
  AiOutlineLinkedin,
  AiFillGithub,
  AiFillTwitterSquare,
} from 'react-icons/ai';
import { Timeline } from 'react-twitter-widgets';

type Props = {
  children: ReactNode;
};

function PageLayout({ children }: Props) {
  return (
    <div className='max-w-md mx-auto my-16 flex flex-col md:flex-row md:max-w-4xl'>
      <div className='flex flex-col w-full mr-4 md:w-52'>
        <StaticImage
          src='../images/profile.jpg'
          alt="Sangwook's profile image"
          className='mb-4 w-40 hidden md:block'
        />
        <div className='text-2xl font-bold'>Sangwook Lee</div>
        <div className='my-2'>HCI, Online community, VR/AR, Mobile System</div>
        <div className='flex md:flex-col'>
          <Link
            to='/'
            activeClassName='text-blue-500'
            className='hover:text-blue-300 mr-2'
          >
            Home
          </Link>
          <Link
            to='/publication'
            activeClassName='text-blue-500'
            className='hover:text-blue-300 mr-2'
          >
            Publication
          </Link>
          <Link
            to='/research'
            activeClassName='text-blue-500'
            className='hover:text-blue-300 mr-2'
          >
            Research
          </Link>
          <Link
            to='/blog'
            activeClassName='text-blue-500'
            className='hover:text-blue-300 mr-2'
          >
            Blog
          </Link>
        </div>
        <div className='justify-center w-full text-3xl mt-10 hidden md:flex'>
          <a
            href='https://github.com/wooogler'
            target='_blank'
            rel='noreferrer noopener'
            className='text-purple-600 mr-2'
          >
            <AiFillGithub />
          </a>
          <a
            href='https://www.linkedin.com/in/sangwook-lee/'
            target='_blank'
            rel='noreferrer noopener'
            className='text-blue-500 mr-2'
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
        <div className='hidden md:block'>
          <Timeline
            dataSource={{
              sourceType: 'profile',
              screenName: 'leesang627',
            }}
            options={{ height: '200' }}
          />
        </div>
      </div>
      <div className='flex flex-1 flex-col mt-20 md:mt-0'>{children}</div>
    </div>
  );
}

export default PageLayout;
