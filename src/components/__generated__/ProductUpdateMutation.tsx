// 🛑 NOTICE: __generated__ folders should be added to .gitignore
// 🛑 In this repo I keep generated files only for demo purposes!
import * as Types from '../../__generated__/types';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from 'app/utils/apolloHooks';



export type ProductUpdateVariables = {
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


export const ProductUpdateDocument = gql`
    mutation ProductUpdate($record: UpdateByIdProductInput!) {
  updateProduct(record: $record) {
    recordId
    record {
      name
    }
  }
}
    `;
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