import React from "react";

type Props = {
  text: string;
  query: string;
};

function HighlightedText({ text, query }: Props) {
  if (query !== "" && text && text.includes(query)) {
    const parts = text.split(new RegExp(`(${query})`, "gi"));

    return (
      <span className="text-sm mt-1">
        {parts.map((part, index) =>
          part.toLowerCase() === query.toLowerCase() ? (
            <strong className="text-blue-700" key={index}>
              {part}
            </strong>
          ) : (
            <span>{part}</span>
          )
        )}
      </span>
    );
  }

  return <span>{text}</span>;
}

export default HighlightedText;
