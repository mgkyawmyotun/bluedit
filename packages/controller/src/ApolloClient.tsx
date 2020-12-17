import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';
class GraphQlClient {
  private static client: ApolloClient<NormalizedCacheObject>;
  public static getClient() {
    if (this.client) {
      return this.client;
    }
    this.client = new ApolloClient({
      uri: 'http://localhost:4000/graphql',
      cache: new InMemoryCache(),
      credentials: 'include',
    });

    return this.client;
  }
}
export { GraphQlClient };
