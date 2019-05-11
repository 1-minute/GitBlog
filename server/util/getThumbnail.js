import marked from 'marked';
import { JSDOM } from 'jsdom';

export default (markdown) => {
  const html = marked(markdown);
  const {
    window: { document },
  } = new JSDOM(html);

  const img = document.querySelector('img');
  return img ? img.src : '';
};
