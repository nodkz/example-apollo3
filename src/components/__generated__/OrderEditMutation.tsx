// 🛑 NOTICE: __generated__ folders should be added to .gitignore
// 🛑 In this repo I keep generated files only for demo purposes!
import * as Types from '../../__generated__/types';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from 'app/utils/apolloHooks';



export type OrderEditMutationVariables = {
  record: Types.UpdateByIdOrderInput;
};


export type OrderEditMutation = (
  { __typename: 'Mutation' }
  & { updateOrder?: Types.Maybe<(
    { __typename: 'UpdateByIdOrderPayload' }
    & { record?: Types.Maybe<(
      { __typename: 'Order' }
      & Pick<Types.Order, 'orderID' | 'freight'>
    )> }
  )> }
);


export const OrderEditMutationDocument = gql`
    mutation OrderEditMutation($record: UpdateByIdOrderInput!) {
  updateOrder(record: $record) {
    record {
      __typename
      orderID
      freight
    }
  }
}
    `;
export type OrderEditMutationMutationFn = ApolloReactCommon.MutationFunction<OrderEditMutation, OrderEditMutationVariables>;

/**
 * __useOrderEditMutation__
 *
 * To run a mutation, you first call `useOrderEditMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useOrderEditMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [orderEditMutation, { data, loading, error }] = useOrderEditMutation({
 *   variables: {
 *      record: // value for 'record'
 *   },
 * });
 */
export function useOrderEditMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<OrderEditMutation, OrderEditMutationVariables>) {
        return ApolloReactHooks.useMutation<OrderEditMutation, OrderEditMutationVariables>(OrderEditMutationDocument, baseOptions);
      }
export type OrderEditMutationHookResult = ReturnType<typeof useOrderEditMutation>;
export type OrderEditMutationMutationResult = ApolloReactCommon.MutationResult<OrderEditMutation>;
export type OrderEditMutationMutationOptions = ApolloReactCommon.BaseMutationOptions<OrderEditMutation, OrderEditMutationVariables>;