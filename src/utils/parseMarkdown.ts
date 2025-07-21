import { load } from 'cheerio';
import { smartNumber } from './number';

type OutputBlock =
  | { type: 'text'; content: { text: string } }
  | { type: 'title'; content: { title: string } }
  | { type: 'list'; content: { cards: { text: string; number: string }[] } };

export const parseHtmlToBlocks = (html: string) => {
  const $ = load(html);
  const blocks: OutputBlock[] = [];

  $('body')
    .children()
    .each((_, el) => {
      const tag = el.tagName.toLowerCase();

      if (tag === 'p') {
        const text = $(el).text().trim();
        if (text) {
          blocks.push({
            type: 'text',
            content: { text },
          });
        }
      }

      if (/^h[1-6]$/.test(tag)) {
        const title = $(el).text().trim();
        if (title) {
          blocks.push({
            type: 'title',
            content: { title },
          });
        }
      }

      if (tag === 'ul' || tag === 'ol') {
        const items = $(el)
          .children('li')
          .map((i, li) => ({
            text: $(li).text().trim(),
            number: smartNumber(i + 1),
          }))
          .get();

        if (items.length > 0) {
          blocks.push({
            type: 'list',
            content: { cards: items },
          });
        }
      }
    });

  return blocks;
};
