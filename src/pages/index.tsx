import { graphql, useStaticQuery } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { InfoQuery, Query } from 'graphql-types';
import React from 'react';
import PageLayout from '../components/PageLayout';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import PubItem from '../components/PubItem';

type Props = {
  data: InfoQuery;
};
dayjs.extend(localizedFormat);

function IndexPage({ data }: Props) {
  return (
    <PageLayout>
      <div className='prose'>
        <MDXRenderer>{data.intro.body}</MDXRenderer>
        <div className='text-xs text-slate-600'>
          Last Update: {dayjs(data.intro.frontmatter.date).format('ll')}
        </div>
      </div>
      <div className='text-2xl mt-4 mb-2'>Recent Publications</div>
      <div>
        {data.recentPub.nodes.map((node) => (
          <PubItem pub={node} />
        ))}
      </div>
    </PageLayout>
  );
}

export const query = graphql`
  query Info {
    intro: mdx(slug: { eq: "intro" }) {
      body
      frontmatter {
        date
      }
    }
    recentPub: allMdx(
      filter: { fileAbsolutePath: { regex: "/publication/" } }
      limit: 5
      sort: { fields: frontmatter___date, order: DESC }
    ) {
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

export default IndexPage;
