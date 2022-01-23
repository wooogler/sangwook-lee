import { graphql, PageProps } from 'gatsby';
import { PublicationIndexQuery } from 'graphql-types';
import React from 'react';
import PageLayout from '../components/PageLayout';
import Highlighter from 'react-highlight-words';

type Props = {
  data: PublicationIndexQuery;
};

function PublicationPage({ data }: Props) {
  return (
    <PageLayout>
      <div className='text-2xl'>Posters</div>
      <hr className='mb-4' />
      {data.allMdx.nodes.map((node) => (
        <div key={node.id}>
          <div className='font-bold text-lg'>{node.frontmatter.title}</div>
          <Highlighter
            highlightTag='strong'
            searchWords={['Sangwook Lee']}
            textToHighlight={node.frontmatter.author}
          />
          <div>{node.frontmatter.conference}</div>
        </div>
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
