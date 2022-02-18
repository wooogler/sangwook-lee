import { graphql, Link, useStaticQuery } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import PageLayout from '../components/PageLayout';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import PubItem from '../components/PubItem';
import { InfoQuery } from 'graphql-types';

type Props = {
  data: InfoQuery;
};
dayjs.extend(localizedFormat);

function IndexPage({ data }: Props) {
  return (
    <PageLayout>
      <div className='prose'>
        <div className='text-2xl mb-2'>Introduction</div>
        <MDXRenderer>{data.intro.body}</MDXRenderer>
        <div className='text-xs text-slate-600'>
          Last Update: {dayjs(data.intro.frontmatter.date).format('ll')}
        </div>
      </div>
      <div className='border-t border-gray-200 mt-4'></div>
      <div className='flex mt-4 mb-2 items-end prose'>
        <div className='text-2xl'>Recent Publications</div>
        <Link to='/publication' className='ml-2 hover:text-blue-500'>
          (see all)
        </Link>
      </div>

      <div>
        {data.recentPub.nodes.map((node) => (
          <PubItem
            slug={node.slug}
            title={node.frontmatter.title}
            author={node.frontmatter.author}
            conference={node.frontmatter.conference}
            key={node.id}
          />
        ))}
      </div>

      <div className='border-t border-gray-200 mt-4'></div>
      <div className='flex mt-4 mb-2 items-end prose'>
        <div className='text-2xl'>Academic Services</div>
      </div>
      <div>Student Volunteer: CSCW2020, CHI2021</div>
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
      limit: 3
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        id
        slug
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
