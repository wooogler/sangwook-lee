import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { PublicationQuery } from 'graphql-types';
import React from 'react';
import PubItem from '../../components/PubItem';
import PageLayout from '../../components/PageLayout';
import HighlightedText from '../../components/HighlightedText';
import { AiOutlineFilePdf, AiOutlineLink } from 'react-icons/ai';
import Utterances from '../../components/Utterances';

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
      <div className='flex'>
        <a
          href={publication_url}
          className='flex items-center underline mr-2'
          target='_blank'
          rel='noreferrer noopener'
        >
          <AiOutlineLink /> Link
        </a>
        {paper_pdf && (
          <a
            href={paper_pdf.publicURL}
            download
            className='flex items-center text-red-600 underline'
          >
            <AiOutlineFilePdf />
            PDF
          </a>
        )}
      </div>
      <div className='mb-2'>{conference}</div>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
      <Utterances repo='wooogler/sangwook-lee' />
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
