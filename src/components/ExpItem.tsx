import React from "react";

type Props = {
  title: string;
  content: string;
};

function ExpItem({ title, content }: Props) {
  return (
    <div className="mt-4">
      <div>{title}</div>
      <div className="text-sm mt-1">{content}</div>
    </div>
  );
}

export default ExpItem;
