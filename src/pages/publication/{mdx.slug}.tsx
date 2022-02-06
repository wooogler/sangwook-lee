import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { PublicationQuery } from 'graphql-types';
import React from 'react';
import PubItem from '../../components/PubItem';
import PageLayout from '../../components/PageLayout';
import HighlightedText from '../../components/HighlightedText';

type Props = {
  data: PublicationQuery;
};

function PublicationPost({ data }: Props) {
  const {
    title,
    author,
    conference,
    publication_date,
    publication_url,
    paper_pdf,
  } = data.mdx.frontmatter;
  return (
    <PageLayout>
      <div className='text-3xl'>{title}</div>
      <HighlightedText text={author} query='Sangwook Lee' />
      <a href={paper_pdf.publicURL} download>
        Paper
      </a>
      <div className='mb-2'>{conference}</div>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </PageLayout>
  );
}

export const query = graphql`
  query Publication($id: String) {
    mdx(id: { eq: $id }) {
      id
      slug
      body
      frontmatter {
        author
        conference
        publication_date
        publication_url
        title
        paper_pdf {
          publicURL
        }
        poster_pdf {
          publicURL
        }
        github_url
      }
    }
  }
`;

export default PublicationPost;
