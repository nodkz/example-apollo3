// 🛑 NOTICE: __generated__ folders should be added to .gitignore
// 🛑 In this repo I keep generated files only for demo purposes!
import * as Types from '../../../__generated__/types';

import { DocumentNode } from 'graphql';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from 'app/utils/extendApolloHooks';
const defaultOptions =  {}
export type ProductListQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type ProductListQuery = { __typename: 'Query', viewer?: Types.Maybe<{ __typename: 'Viewer', productList: Array<{ __typename: 'Product', productID?: Types.Maybe<number>, name?: Types.Maybe<string>, unitPrice?: Types.Maybe<number>, supplier?: Types.Maybe<{ __typename: 'Supplier', companyName?: Types.Maybe<string> }> }> }> };


export const ProductListQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ProductListQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"viewer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"productList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"productID"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"unitPrice"}},{"kind":"Field","name":{"kind":"Name","value":"supplier"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"companyName"}}]}}]}}]}}]}}]} as unknown as DocumentNode;

/**
 * __useProductListQuery__
 *
 * To run a query within a React component, call `useProductListQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductListQuery({
 *   variables: {
 *   },
 * });
 */
export function useProductListQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ProductListQuery, ProductListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<ProductListQuery, ProductListQueryVariables>(ProductListQueryDocument, options);
      }
export function useProductListQueryLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ProductListQuery, ProductListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<ProductListQuery, ProductListQueryVariables>(ProductListQueryDocument, options);
        }
export type ProductListQueryHookResult = ReturnType<typeof useProductListQuery>;
export type ProductListQueryLazyQueryHookResult = ReturnType<typeof useProductListQueryLazyQuery>;
export type ProductListQueryQueryResult = Apollo.QueryResult<ProductListQuery, ProductListQueryVariables>;