import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
  split,
} from '@apollo/client';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';
const wsLink = (process as any).browser
  ? new WebSocketLink({
      // if you instantiate in the server, the error will be thrown
      uri: `ws://localhost:4000/graphql`,
      options: {
        reconnect: true,
      },
    })
  : null;

const httplink = new HttpLink({
  uri: 'http://localhost:4000/graphql',
  credentials: 'include',
});

const splitLink = (process as any).browser
  ? split(
      //only create the split in the browser
      // split based on operation type
      ({ query }) => {
        const { kind, operation } = getMainDefinition(query) as any;
        return kind === 'OperationDefinition' && operation === 'subscription';
      },
      wsLink as any,
      httplink
    )
  : httplink;
class GraphQlClient {
  private static client: ApolloClient<NormalizedCacheObject>;
  public static getClient() {
    if (this.client) {
      return this.client;
    }
    this.client = new ApolloClient({
      cache: new InMemoryCache(),
      link: splitLink,
    });

    return this.client;
  }
}
export { GraphQlClient };
