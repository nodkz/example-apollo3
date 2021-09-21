// 🛑 NOTICE: __generated__ folders should be added to .gitignore
// 🛑 In this repo I keep generated files only for demo purposes!
import * as Types from '../../../__generated__/types';

import { DocumentNode } from 'graphql';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from 'app/utils/extendApolloHooks';
const defaultOptions =  {}
export type ProductDeleteSubscriptionVariables = Types.Exact<{ [key: string]: never; }>;


export type ProductDeleteSubscription = { __typename: 'Subscription', productRemoved?: Types.Maybe<any> };


export const ProductDeleteSubscriptionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"ProductDeleteSubscription"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"productRemoved"}}]}}]} as unknown as DocumentNode;

/**
 * __useProductDeleteSubscription__
 *
 * To run a query within a React component, call `useProductDeleteSubscription` and pass it any options that fit your needs.
 * When your component renders, `useProductDeleteSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductDeleteSubscription({
 *   variables: {
 *   },
 * });
 */
export function useProductDeleteSubscription(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<ProductDeleteSubscription, ProductDeleteSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useSubscription<ProductDeleteSubscription, ProductDeleteSubscriptionVariables>(ProductDeleteSubscriptionDocument, options);
      }
export type ProductDeleteSubscriptionHookResult = ReturnType<typeof useProductDeleteSubscription>;
export type ProductDeleteSubscriptionSubscriptionResult = Apollo.SubscriptionResult<ProductDeleteSubscription>;