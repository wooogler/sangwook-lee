import * as React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle='My Blog Posts'>
      {data.allMdx.nodes.map((node) => (
        <div key={node.id}>
          <div className='text-xl'>{node.frontmatter.title}</div>
          <div>Posted: {node.frontmatter.date}</div>
          <MDXRenderer>{node.body}</MDXRenderer>
        </div>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          title
          date
        }
        id
        body
      }
    }
  }
`;

export default BlogPage;
