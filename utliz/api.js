const API_URL = process.env.WORDPRESS_API_URL;

async function fetchAPI(query, { variables } = {}) {
  const headers = { "content-type": "application/json" };

  if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
    headers[
      "Authorization"
    ] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`;
  }

  const res = await fetch(API_URL, {
    method: "POST",
    headers,
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    console.log("error occear", json.errors);
  }
  console.log(json);

  return json.data;
}

export async function getPreviewPost(id, idType = "DATABASE_ID") {
  const data = await fetchAPI(
    `
    query PreviewPost($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        content
    date
    title
      }
    }`,
    {
      variables: {
        id,
        idType,
      },
    }
  );
  return data.post;
}

export async function getAllPostsWithSlug() {
  const data = await fetchAPI(`posts(first: 1000) {
         posts(first: 10000) {
    nodes {
      slug
    }
  }`);
  return data.posts;
}

export async function getAllPostsPreview() {
  const data = await fetchAPI(
    `
    query NewQuery($first: Int = 20) {
      posts(first: $first) {
        edges {
          node {
            categories {
              edges {
                node {
                  name
                }
              }
            }
            date
            excerpt
            id
            slug
            title
            featuredImage {
              node {
                mediaItemUrl
              }
            }
          }
        }
      }
    }
    `
  );
  return data.posts;
}
