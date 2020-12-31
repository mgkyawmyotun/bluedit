import http from 'k6/http';

export default function () {
  let jar = http.cookieJar();
  jar.set(
    'http://localhost:3000',
    'bid',
    's%3AO1vBW9p1OAcdvC9fXHas6G3HpqUhzPwy.KzxL5fp%2BZE%2FEt9zhoqcQJa1%2Bsba5FiksYfi5KedAdxs',
    {
      domain: 'localhost',
      path: '/',
      secure: false,
    }
  );
  const data = {
    operationName: 'getPosts',
    query:
      'query getPosts {↵  getPosts {↵    post_id↵    post_text↵    title↵    link↵    sub {↵      name↵      __typename↵    }↵    vote_count↵    images↵    videos↵    user {↵      username↵      __typename↵    }↵    comment_count↵    __typename↵  }↵}↵',
    variables: {},
  };
  let res = http.post('http://localhost:4000/graphql', JSON.stringify(data), {
    cookies: {
      bid:
        's%3AO1vBW9p1OAcdvC9fXHas6G3HpqUhzPwy.KzxL5fp%2BZE%2FEt9zhoqcQJa1%2Bsba5FiksYfi5KedAdxs',
    },
  });
  console.log(JSON.stringify(res));
}
