import ApolloClient from 'apollo-boost';

const ApiClient = new ApolloClient({
  uri: 'https://sls-sandbox.zizoo.com/graphql',
});

export default ApiClient;
