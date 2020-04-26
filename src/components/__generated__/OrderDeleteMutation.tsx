// 🛑 NOTICE: __generated__ folders should be added to .gitignore
// 🛑 In this repo I keep generated files only for demo purposes!
import * as Types from '../../__generated__/types';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from 'app/utils/apolloHooks';



export type OrderDeleteMutationVariables = {
  filter: Types.FilterRemoveOneOrderInput;
};


export type OrderDeleteMutation = (
  { __typename: 'Mutation' }
  & { removeOrder?: Types.Maybe<(
    { __typename: 'RemoveOneOrderPayload' }
    & { record?: Types.Maybe<(
      { __typename: 'Order' }
      & Pick<Types.Order, 'orderID'>
    )> }
  )> }
);


export const OrderDeleteMutationDocument = gql`
    mutation OrderDeleteMutation($filter: FilterRemoveOneOrderInput!) {
  removeOrder(filter: $filter) {
    record {
      orderID
    }
  }
}
    `;
export type OrderDeleteMutationMutationFn = ApolloReactCommon.MutationFunction<OrderDeleteMutation, OrderDeleteMutationVariables>;

/**
 * __useOrderDeleteMutation__
 *
 * To run a mutation, you first call `useOrderDeleteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useOrderDeleteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [orderDeleteMutation, { data, loading, error }] = useOrderDeleteMutation({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useOrderDeleteMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<OrderDeleteMutation, OrderDeleteMutationVariables>) {
        return ApolloReactHooks.useMutation<OrderDeleteMutation, OrderDeleteMutationVariables>(OrderDeleteMutationDocument, baseOptions);
      }
export type OrderDeleteMutationHookResult = ReturnType<typeof useOrderDeleteMutation>;
export type OrderDeleteMutationMutationResult = ApolloReactCommon.MutationResult<OrderDeleteMutation>;
export type OrderDeleteMutationMutationOptions = ApolloReactCommon.BaseMutationOptions<OrderDeleteMutation, OrderDeleteMutationVariables>;