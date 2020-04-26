// 🛑 NOTICE: __generated__ folders should be added to .gitignore
// 🛑 In this repo I keep generated files only for demo purposes!
import * as Types from '../../__generated__/types';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from 'app/utils/apolloHooks';



export type OrderDeleteSubscriptionVariables = {};


export type OrderDeleteSubscription = (
  { __typename: 'Subscription' }
  & Pick<Types.Subscription, 'orderRemoved'>
);


export const OrderDeleteSubscriptionDocument = gql`
    subscription OrderDeleteSubscription {
  orderRemoved
}
    `;

/**
 * __useOrderDeleteSubscription__
 *
 * To run a query within a React component, call `useOrderDeleteSubscription` and pass it any options that fit your needs.
 * When your component renders, `useOrderDeleteSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrderDeleteSubscription({
 *   variables: {
 *   },
 * });
 */
export function useOrderDeleteSubscription(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<OrderDeleteSubscription, OrderDeleteSubscriptionVariables>) {
        return ApolloReactHooks.useSubscription<OrderDeleteSubscription, OrderDeleteSubscriptionVariables>(OrderDeleteSubscriptionDocument, baseOptions);
      }
export type OrderDeleteSubscriptionHookResult = ReturnType<typeof useOrderDeleteSubscription>;
export type OrderDeleteSubscriptionSubscriptionResult = ApolloReactCommon.SubscriptionResult<OrderDeleteSubscription>;