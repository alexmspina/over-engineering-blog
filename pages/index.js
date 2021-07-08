import React from 'react';
import FeaturedPostPreview from '../components/FeaturedPostPreview/FeaturedPostPreview';
import PageLayout from '../components/PageLayout/PageLayout';
import { indexQuery, authorAvatarImageQuery } from '../sanity/queries';
import { getClient, overlayDrafts } from '../sanity/sanity.server';

export default function Home({ allPosts, currentUser }) {
  const featuredPostPreview = allPosts[0];
  const featuredPostPreviewProps = {
    publishedDate: featuredPostPreview.publishedDate,
    featuredImageUrl: featuredPostPreview.featuredImage.imageUrl,
    authorImageUrl: featuredPostPreview.author.imageUrl,
    authorName: featuredPostPreview.authorName,
    title: featuredPostPreview.title,
    excerpt: featuredPostPreview.excerpt,
  };
  return (
    <PageLayout currentUser={currentUser}>
      <FeaturedPostPreview post={featuredPostPreviewProps} />
    </PageLayout>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = overlayDrafts(await getClient(preview).fetch(indexQuery));

  const currentUser = await getClient(preview).fetch(authorAvatarImageQuery);
  return {
    props: { allPosts, preview, currentUser },
  };
}
