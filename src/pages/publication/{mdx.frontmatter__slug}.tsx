import { graphql } from "gatsby";
import { PublicationQuery } from "graphql-types";
import React from "react";
import PageLayout from "../../components/PageLayout";
import HighlightedText from "../../components/HighlightedText";
import { AiFillGithub, AiOutlineFilePdf, AiOutlineLink } from "react-icons/ai";
import Utterances from "../../components/Utterances";

type Props = {
  data: PublicationQuery;
};

function PublicationPost({ data: { mdx }, children }: Props) {
  const {
    title,
    author,
    conference,
    publication_date,
    publication_url,
    paper_pdf,
    github_url,
  } = mdx.frontmatter;
  return (
    <PageLayout>
      <div className="text-3xl">{title}</div>
      <HighlightedText text={author} query="Sangwook Lee" />
      <div className="flex">
        {publication_url && (
          <a
            href={publication_url}
            className="flex items-center underline mr-2"
            target="_blank"
            rel="noreferrer noopener"
          >
            <AiOutlineLink /> Link
          </a>
        )}

        {paper_pdf && (
          <a
            href={paper_pdf.publicURL}
            download
            className="flex items-center text-red-600 underline mr-2"
          >
            <AiOutlineFilePdf />
            PDF
          </a>
        )}
        {github_url && (
          <a
            href={github_url}
            download
            className="flex items-center text-purple-600 underline"
          >
            <AiFillGithub />
            Code
          </a>
        )}
      </div>
      <div className="mb-2">{conference}</div>
      {children}
      <div className="mt-2">
        <Utterances repo="wooogler/sangwook-lee" />
      </div>
    </PageLayout>
  );
}

export const query = graphql`
  query Publication($id: String) {
    mdx(id: { eq: $id }) {
      id
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
