import { graphql, PageProps } from 'gatsby';
import { PublicationIndexQuery } from 'graphql-types';
import React from 'react';
import PageLayout from '../components/PageLayout';
import Highlighter from 'react-highlight-words';
import PubItem from '../components/PubItem';

type Props = {
  data: PublicationIndexQuery;
};

function PublicationPage({ data }: Props) {
  return (
    <PageLayout>
      <div className='text-2xl'>Posters</div>
      <hr className='mb-4' />
      {data.allMdx.nodes.map((node) => (
        <PubItem pub={node} />
      ))}
    </PageLayout>
  );
}

export const query = graphql`
  query PublicationIndex {
    allMdx(filter: { fileAbsolutePath: { regex: "/publication/" } }) {
      nodes {
        id
        frontmatter {
          title
          author
          conference
        }
      }
    }
  }
`;

export default PublicationPage;
