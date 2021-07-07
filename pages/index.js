import React from 'react';
import PageLayout from '../components/PageLayout/PageLayout';
import { indexQuery, authorAvatarImageQuery } from '../sanity/queries';
import { getClient, overlayDrafts } from '../sanity/sanity.server';

export default function Home({ allPosts, currentUser }) {
  return <PageLayout currentUser={currentUser} />;
}

export async function getStaticProps({ preview = false }) {
  const allPosts = overlayDrafts(await getClient(preview).fetch(indexQuery));

  const currentUser = await getClient(preview).fetch(authorAvatarImageQuery);
  return {
    props: { allPosts, preview, currentUser },
  };
}
