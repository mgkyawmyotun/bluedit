import http from 'k6/http';

const query = `
query getPosts {
  getPosts {
    post_id
    post_text
    title
    link
    sub{
      name
    }
    vote_count
    images
    videos
 	 user {
    username
    displayName
    email
  }
    comment_count
  }
}
`;
export default function () {
  let jar = http.cookieJar();
  jar.set(
    'http://localhost:4000/graphql',
    'bid',
    's%3AO1vBW9p1OAcdvC9fXHas6G3HpqUhzPwy.KzxL5fp%2BZE%2FEt9zhoqcQJa1%2Bsba5FiksYfi5KedAdxs',
    {
      domain: 'localhost',
      path: '/',
      secure: false,
    }
  );
  let res = http.post(
    'http://localhost:4000/graphql',
    JSON.stringify({ query: query })
  );
}
