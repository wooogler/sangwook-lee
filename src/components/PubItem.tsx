import React from 'react';
import Highlighter from 'react-highlight-words';

type Props = {
  pub: {
    id: string;
    frontmatter?: {
      title: string;
      author?: string;
      conference?: string;
    };
  };
};

function PubItem({ pub }: Props) {
  return (
    <div key={pub.id}>
      <div className='font-bold text-lg'>{pub.frontmatter.title}</div>
      <Highlighter
        highlightTag='strong'
        searchWords={['Sangwook Lee']}
        textToHighlight={pub.frontmatter.author}
      />
      <div>{pub.frontmatter.conference}</div>
    </div>
  );
}

export default PubItem;
