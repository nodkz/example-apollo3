// DEPRECATED vscode plugin until end of 2021
//   use GraphQL.vscode-graphql instead
//
// For vscode extension:
// https://marketplace.visualstudio.com/items?itemName=apollographql.vscode-apollo

module.exports = {
  client: {
    service: {
      name: 'client',
      localSchemaFile: './schema.graphql',
    },
    // tagName: 'gql',
  },
};
