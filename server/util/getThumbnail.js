import marked from 'marked';
import { JSDOM } from 'jsdom';

export default (markdown) => {
  const html = marked(markdown);
  const {
    window: { document },
  } = new JSDOM(html);

  return document.querySelector('img').src;
};
