import { FC } from 'react';
interface GraphQLConnectorProps {
  children: JSX.Element;
  // uri: string;
}
export const GraphQLConnector: FC<GraphQLConnectorProps> = ({
  children,
  // uri,
}) => {
  console.log('Hello');
  return children;
};

//  <ApolloProvider
//       client={
//         new ApolloClient({
//           uri,
//           cache: new InMemoryCache(),
//         })
//       }
//     >
//       {children}
//     </ApolloProvider>
