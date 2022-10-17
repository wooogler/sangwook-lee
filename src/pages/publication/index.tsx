import { graphql, PageProps } from "gatsby";
import { PublicationIndexQuery } from "graphql-types";
import React from "react";
import PageLayout from "../../components/PageLayout";
import PubItem from "../../components/PubItem";

type Props = {
  data: PublicationIndexQuery;
};

function PublicationPage({ data }: Props) {
  return (
    <PageLayout>
      <div className="text-2xl mt-4">Papers</div>
      <hr className="mb-4" />
      {data.allMdx.nodes
        .filter((node) => node.frontmatter.format === "paper")
        .map((node) => (
          <PubItem
            slug={node.frontmatter.slug}
            title={node.frontmatter.title}
            author={node.frontmatter.author}
            conference={node.frontmatter.conference}
          />
        ))}
      <div className="text-2xl">Posters</div>
      <hr className="mb-4" />
      {data.allMdx.nodes
        .filter((node) => node.frontmatter.format === "poster")
        .map((node) => (
          <PubItem
            slug={node.frontmatter.slug}
            title={node.frontmatter.title}
            author={node.frontmatter.author}
            conference={node.frontmatter.conference}
          />
        ))}
    </PageLayout>
  );
}

export const query = graphql`
  query PublicationIndex {
    allMdx(
      filter: { internal: { contentFilePath: { regex: "/publication/" } } }
      sort: { fields: frontmatter___publication_date, order: DESC }
    ) {
      nodes {
        id
        frontmatter {
          title
          author
          conference
          format
          slug
        }
      }
    }
  }
`;

export default PublicationPage;
