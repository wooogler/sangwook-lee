import { Link } from 'gatsby';
import { PublicationIndexQuery, PublicationQuery } from 'graphql-types';
import React from 'react';
import HighlightedText from './HighlightedText';

type Props = {
  slug?: string;
  title: string;
  author: string;
  conference: string;
};

function PubItem({ slug, title, author, conference }: Props) {
  return (
    <div className='flex flex-col mb-4 text-gray-600'>
      <Link
        to={`/publication/${slug}`}
        className='font-bold text-lg hover:text-blue-500'
      >
        {title}
      </Link>
      <HighlightedText text={author} query='Sangwook Lee' />
      <div>{conference}</div>
    </div>
  );
}

export default PubItem;
