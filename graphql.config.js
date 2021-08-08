// For vscode extension:
// https://marketplace.visualstudio.com/items?itemName=GraphQL.vscode-graphql

module.exports = {
  projects: {
    app: {
      schema: ['schema.graphql'],
      documents: ['**/*.graphql'],
      extensions: {
        endpoints: {
          default: {
            url: 'https://graphql-compose.herokuapp.com/northwind',
          },
        },
      },
    },
  },
};
