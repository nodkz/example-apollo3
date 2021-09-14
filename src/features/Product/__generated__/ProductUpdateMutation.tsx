// 🛑 NOTICE: __generated__ folders should be added to .gitignore
// 🛑 In this repo I keep generated files only for demo purposes!
import * as Types from '../../../__generated__/types';

import { DocumentNode } from 'graphql';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from 'app/utils/extendApolloHooks';
const defaultOptions =  {}
export type ProductUpdateMutationVariables = Types.Exact<{
  _id: Types.Scalars['MongoID'];
  record: Types.UpdateByIdProductInput;
}>;


export type ProductUpdateMutation = { __typename: 'Mutation', updateProduct?: Types.Maybe<{ __typename: 'UpdateByIdProductPayload', recordId?: Types.Maybe<any>, record?: Types.Maybe<{ __typename: 'Product', name?: Types.Maybe<string> }> }> };


export const ProductUpdateMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ProductUpdateMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MongoID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"record"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateByIdProductInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateProduct"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"_id"}}},{"kind":"Argument","name":{"kind":"Name","value":"record"},"value":{"kind":"Variable","name":{"kind":"Name","value":"record"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"recordId"}},{"kind":"Field","name":{"kind":"Name","value":"record"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode;
export type ProductUpdateMutationMutationFn = Apollo.MutationFunction<ProductUpdateMutation, ProductUpdateMutationVariables>;

/**
 * __useProductUpdateMutation__
 *
 * To run a mutation, you first call `useProductUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useProductUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [productUpdateMutation, { data, loading, error }] = useProductUpdateMutation({
 *   variables: {
 *      _id: // value for '_id'
 *      record: // value for 'record'
 *   },
 * });
 */
export function useProductUpdateMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ProductUpdateMutation, ProductUpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<ProductUpdateMutation, ProductUpdateMutationVariables>(ProductUpdateMutationDocument, options);
      }
export type ProductUpdateMutationHookResult = ReturnType<typeof useProductUpdateMutation>;
export type ProductUpdateMutationMutationResult = Apollo.MutationResult<ProductUpdateMutation>;
export type ProductUpdateMutationMutationOptions = Apollo.BaseMutationOptions<ProductUpdateMutation, ProductUpdateMutationVariables>;