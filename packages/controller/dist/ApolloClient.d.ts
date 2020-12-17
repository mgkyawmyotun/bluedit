import { ApolloClient, NormalizedCacheObject } from '@apollo/client';
declare class GraphQlClient {
    private static client;
    static getClient(): ApolloClient<NormalizedCacheObject>;
}
export { GraphQlClient };
//# sourceMappingURL=ApolloClient.d.ts.map