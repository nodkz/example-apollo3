// 🛑 NOTICE: __generated__ folders should be added to .gitignore
// 🛑 In this repo I keep generated files only for demo purposes!
import * as Types from '../../__generated__/types';

import { DocumentNode } from 'graphql';
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


export const OrderEditMutationDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"OrderEditMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"record"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateByIdOrderInput"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateOrder"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"record"},"value":{"kind":"Variable","name":{"kind":"Name","value":"record"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"record"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"orderID"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"freight"},"arguments":[],"directives":[]}]}}]}}]}}]};
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