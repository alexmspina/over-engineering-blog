import React from 'react';
import FeaturedPostPreview from '../components/FeaturedPostPreview/FeaturedPostPreview';
import PageLayout from '../components/PageLayout/PageLayout';
import { indexQuery, authorAvatarImageQuery } from '../sanity/queries';
import { getClient, overlayDrafts } from '../sanity/sanity.server';
import { Spacer } from '@chakra-ui/react';
import PostPreviewGrid from '../components/PostPreviewGrid/PostPreviewGrid';

export default function Home({ allPosts, currentUser }) {
  const posts = allPosts.reduce((array, post) => {
    const postPreviewProps = {
      id: post._id,
      publishedDate: post.publishedDate,
      featuredImageUrl: post.featuredImage.imageUrl,
      authorImageUrl: post.author.imageUrl,
      authorName: post.authorName,
      title: post.title,
      excerpt: post.excerpt,
    };

    array.push(postPreviewProps);

    return array;
  }, []);

  const featuredPostPreview = posts.shift();

  return (
    <PageLayout currentUser={currentUser}>
      <FeaturedPostPreview post={featuredPostPreview} />
      <Spacer className={'featured-post-post-grid-spacer'} p={'3%'} />
      <PostPreviewGrid posts={posts} />
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
