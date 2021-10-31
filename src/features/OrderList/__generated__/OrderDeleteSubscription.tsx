// 🛑 NOTICE: __generated__ folders should be added to .gitignore
// 🛑 In this repo I keep generated files only for demo purposes!
import * as Types from '../../../__generated__/types';

import { DocumentNode } from 'graphql';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from 'app/utils/extendApolloHooks';
const defaultOptions =  {}
export type OrderDeleteSubscriptionVariables = Types.Exact<{ [key: string]: never; }>;


export type OrderDeleteSubscription = { __typename: 'Subscription', orderRemoved?: any | null | undefined };


export const OrderDeleteSubscriptionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"OrderDeleteSubscription"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"orderRemoved"}}]}}]} as unknown as DocumentNode;

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
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useSubscription<OrderDeleteSubscription, OrderDeleteSubscriptionVariables>(OrderDeleteSubscriptionDocument, options);
      }
export type OrderDeleteSubscriptionHookResult = ReturnType<typeof useOrderDeleteSubscription>;
export type OrderDeleteSubscriptionSubscriptionResult = Apollo.SubscriptionResult<OrderDeleteSubscription>;