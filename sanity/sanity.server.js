/**
 * Server-side Sanity utilities. By having these in a separate file from the
 * utilities we use on the client side, we are able to tree-shake (remove)
 * code that is not used on the client side.
 */
import { createClient } from 'next-sanity';
import sanityConfig from './config';

export const getClient = (preview) => {
  if (preview) {
    return createClient({
      ...sanityConfig,
      useCdn: false,
      token: process.env.SANITY_API_TOKEN,
    });
  }
  return createClient(sanityConfig);
};

export function overlayDrafts(documents = []) {
  const overlayed = documents.reduce((map, doc) => {
    console.log(doc);
    const { id: docId } = doc;
    if (!docId) {
      throw new Error('Ensure that `id` is included in query projection');
    }

    const isDraft = docId.startsWith('drafts.');
    const id = isDraft ? docId.slice(7) : docId;

    if (isDraft) {
      return map;
    }
    return map.set(id, doc);
  }, new Map());

  return Array.from(overlayed.values());
}
