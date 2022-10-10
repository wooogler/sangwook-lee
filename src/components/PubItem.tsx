import { Link } from "gatsby";
import {
  GatsbyImage,
  getImage,
  ImageDataLike,
  StaticImage,
} from "gatsby-plugin-image";
import { PublicationIndexQuery, PublicationQuery } from "graphql-types";
import React from "react";
import HighlightedText from "./HighlightedText";

type Props = {
  slug?: string;
  title: string;
  author: string;
  conference: string;
  thumbnail?: {
    childImageSharp?: {
      gatsbyImageData: any;
    };
  };
};

function PubItem({ slug, title, author, conference, thumbnail }: Props) {
  const thumnailImage = getImage(thumbnail as ImageDataLike);

  return (
    <div className="flex items-center">
      {thumbnail && (
        <div className="flex mr-4">
          <GatsbyImage
            image={thumnailImage}
            alt={`Thumbnail image of ${title}`}
          />
        </div>
      )}
      <div className="flex flex-1 flex-col mb-4 text-gray-600">
        <Link
          to={`/publication/${slug}`}
          className="text-lg hover:text-blue-500"
        >
          {title}
        </Link>
        <HighlightedText text={author} query="Sangwook Lee" />
        <div>{conference}</div>
      </div>
    </div>
  );
}

export default PubItem;
