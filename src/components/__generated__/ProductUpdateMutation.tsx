// 🛑 NOTICE: __generated__ folders should be added to .gitignore
// 🛑 In this repo I keep generated files only for demo purposes!
import * as Types from '../../__generated__/types';

import { DocumentNode } from 'graphql';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from 'app/utils/apolloHooks';



export type ProductUpdateVariables = {
  _id: Types.Scalars['MongoID'];
  record: Types.UpdateByIdProductInput;
};


export type ProductUpdate = (
  { __typename: 'Mutation' }
  & { updateProduct?: Types.Maybe<(
    { __typename: 'UpdateByIdProductPayload' }
    & Pick<Types.UpdateByIdProductPayload, 'recordId'>
    & { record?: Types.Maybe<(
      { __typename: 'Product' }
      & Pick<Types.Product, 'name'>
    )> }
  )> }
);


export const ProductUpdateDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ProductUpdate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MongoID"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"record"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateByIdProductInput"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateProduct"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"_id"}}},{"kind":"Argument","name":{"kind":"Name","value":"record"},"value":{"kind":"Variable","name":{"kind":"Name","value":"record"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"recordId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"record"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]}]}}]}}]}}]};
export type ProductUpdateMutationFn = ApolloReactCommon.MutationFunction<ProductUpdate, ProductUpdateVariables>;

/**
 * __useProductUpdate__
 *
 * To run a mutation, you first call `useProductUpdate` within a React component and pass it any options that fit your needs.
 * When your component renders, `useProductUpdate` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [productUpdate, { data, loading, error }] = useProductUpdate({
 *   variables: {
 *      _id: // value for '_id'
 *      record: // value for 'record'
 *   },
 * });
 */
export function useProductUpdate(baseOptions?: ApolloReactHooks.MutationHookOptions<ProductUpdate, ProductUpdateVariables>) {
        return ApolloReactHooks.useMutation<ProductUpdate, ProductUpdateVariables>(ProductUpdateDocument, baseOptions);
      }
export type ProductUpdateHookResult = ReturnType<typeof useProductUpdate>;
export type ProductUpdateMutationResult = ApolloReactCommon.MutationResult<ProductUpdate>;
export type ProductUpdateMutationOptions = ApolloReactCommon.BaseMutationOptions<ProductUpdate, ProductUpdateVariables>;