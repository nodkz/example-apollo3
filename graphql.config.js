// For vscode extension:
// https://marketplace.visualstudio.com/items?itemName=GraphQL.vscode-graphql

module.exports = {
  projects: {
    app: {
      schema: ['schema.graphql'],
      documents: ['src/**/*.graphql'],
      extensions: {
        endpoints: {
          default: {
            url: 'https://graphql-compose.herokuapp.com/northwind',
          },
        },
        languageService: {
          // skip generated_schema.graphql file with GoTo definition
          useSchemaFileDefinitions: true,
        },
      },
    },
  },
};
