import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import PageLayout from "../components/PageLayout";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import PubItem from "../components/PubItem";
import { IndexPageQuery } from "graphql-types";
import ExpItem from "../components/ExpItem";

type Props = {
  data: IndexPageQuery;
};
dayjs.extend(localizedFormat);

function IndexPage({ data }: Props) {
  return (
    <PageLayout>
      <div className="prose">
        <div className="text-2xl mb-2">Introduction</div>
        <div>Introduction</div>
        <div className="text-xs text-slate-600">Last Update: 2022.10.16</div>
      </div>

      <div className="border-t border-gray-200 mt-4"></div>
      <div className="flex mt-4 mb-2 items-end prose">
        <div className="text-2xl">Publications</div>
        {/* <Link to='/publication' className='ml-2 hover:text-blue-500'>
          (see all)
        </Link> */}
      </div>

      <div>
        {data.allMdx.nodes.map((node) => (
          <PubItem
            slug={node.frontmatter.slug}
            thumbnail={node.frontmatter.thumbnail}
            title={node.frontmatter.title}
            author={node.frontmatter.author}
            conference={node.frontmatter.conference}
            key={node.id}
          />
        ))}
      </div>

      <div className="border-t border-gray-200 mt-4"></div>
      <div className="mt-4 mb-2 items-end prose">
        <div className="text-2xl">Research Experiences</div>
      </div>
      <div className="text-gray-600">
        <ExpItem
          title="Visiting Researcher at Kixlab, School of Computing, KAIST, Korea
          (Sep. 2020 ~ Jun. 2021)"
          content="Doing a research about a system that supports moderator to configure
          the automated moderation bot."
        />
        <ExpItem
          title="Research Intern at HCI+D Lab, Dept. of Communication, Seoul National
            University, Korea (Jul. 2017 ~ Aug. 2017)"
          content="Participate in a study about sexual harassment prevention system for
            online games."
        />
      </div>

      <div className="border-t border-gray-200 mt-4"></div>
      <div className="flex mt-4 mb-2 items-end prose">
        <div className="text-2xl">Academic Services</div>
      </div>
      <div className="text-gray-600">
        Student Volunteer: CSCW2020, CHI2021, CHI2022
      </div>

      {/* <div className='border-t border-gray-200 mt-4'></div>
      <div className='mt-4 mb-2 items-end prose'>
        <div className='text-2xl'>Education</div>
      </div>
      <div className='text-gray-600'>
        <div>
          <div>M.S. in School of Computing, KAIST</div>
          <div className='text-sm'>Sep. 2021 - present</div>
        </div>
        <div className='mt-4'>
          <div>B.S. in Convergence IT Engineering, POSTECH</div>
          <div className='text-sm'>Mar. 2014 - Aug. 2020</div>
        </div>
      </div> */}
    </PageLayout>
  );
}

export const query = graphql`
  query IndexPage {
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
          thumbnail {
            childImageSharp {
              gatsbyImageData(
                layout: CONSTRAINED
                width: 200
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
                transformOptions: { fit: CONTAIN }
              )
            }
          }
          paper_pdf {
            publicURL
          }
          poster_pdf {
            publicURL
          }
          github_url
          slug
        }
      }
    }
  }
`;

export default IndexPage;
