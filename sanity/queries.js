const postFields = `
  _id,
  "publishedDate": _createdAt,
  title,
  publishedAt,
  excerpt,
  "featuredImage": {"imageUrl": mainImage.asset->url},
  body,
  "slug": slug.current,
  "author": author->{name, "imageUrl": image.asset->url},
`;

export const indexQuery = `
*[_type == "post"] | order(date desc, _updatedAt desc) {
  ${postFields}
}`;

export const postQuery = `
{
  "post": *[_type == "post" && slug.current == $slug] | order(_updatedAt desc) | [0] {
    content,
    ${postFields}
  },
  "morePosts": *[_type == "post" && slug.current != $slug] | order(date desc, _updatedAt desc) | [0...2] {
    content,
    ${postFields}
  }
}`;

export const postSlugsQuery = `
*[_type == "post" && defined(slug.current)][].slug.current
`;

export const postBySlugQuery = `
*[_type == "post" && slug.current == $slug][0] {
  ${postFields}
}
`;

export const authorAvatarImageQuery = `
*[_type == "author" ][0] {
  name,
  "imageUrl": image.asset->url
}
`;
