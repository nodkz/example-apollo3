// 🛑 NOTICE: __generated__ folders should be added to .gitignore
// 🛑 In this repo I keep generated files only for demo purposes!
import * as Types from '../../../__generated__/types';

import { DocumentNode } from 'graphql';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from 'app/utils/extendApolloHooks';
const defaultOptions =  {}
export type ProductUpdatePriceMutationVariables = Types.Exact<{
  id: Types.Scalars['MongoID'];
  newPrice: Types.Scalars['Float'];
}>;


export type ProductUpdatePriceMutation = { __typename: 'Mutation', updateProduct?: Types.Maybe<{ __typename: 'UpdateByIdProductPayload', record?: Types.Maybe<{ __typename: 'Product', _id: any, unitPrice?: Types.Maybe<number> }> }> };


export const ProductUpdatePriceMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ProductUpdatePriceMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MongoID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"newPrice"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateProduct"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"record"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"unitPrice"},"value":{"kind":"Variable","name":{"kind":"Name","value":"newPrice"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"record"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"unitPrice"}}]}}]}}]}}]} as unknown as DocumentNode;
export type ProductUpdatePriceMutationMutationFn = Apollo.MutationFunction<ProductUpdatePriceMutation, ProductUpdatePriceMutationVariables>;

/**
 * __useProductUpdatePriceMutation__
 *
 * To run a mutation, you first call `useProductUpdatePriceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useProductUpdatePriceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [productUpdatePriceMutation, { data, loading, error }] = useProductUpdatePriceMutation({
 *   variables: {
 *      id: // value for 'id'
 *      newPrice: // value for 'newPrice'
 *   },
 * });
 */
export function useProductUpdatePriceMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ProductUpdatePriceMutation, ProductUpdatePriceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<ProductUpdatePriceMutation, ProductUpdatePriceMutationVariables>(ProductUpdatePriceMutationDocument, options);
      }
export type ProductUpdatePriceMutationHookResult = ReturnType<typeof useProductUpdatePriceMutation>;
export type ProductUpdatePriceMutationMutationResult = Apollo.MutationResult<ProductUpdatePriceMutation>;
export type ProductUpdatePriceMutationMutationOptions = Apollo.BaseMutationOptions<ProductUpdatePriceMutation, ProductUpdatePriceMutationVariables>;