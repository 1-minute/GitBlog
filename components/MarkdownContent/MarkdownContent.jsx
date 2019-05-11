import React from 'react';
import marked from 'marked';

const MarkdwonContent = ({ markdown }) => (
  <div
    className='markdown-body'
    dangerouslySetInnerHTML={{ __html: marked(markdown) }}
  />
);

export default MarkdwonContent;
