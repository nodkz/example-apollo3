// 🛑 NOTICE: __generated__ folders should be added to .gitignore
// 🛑 In this repo I keep generated files only for demo purposes!
import * as Types from '../../__generated__/types';

import { DocumentNode } from 'graphql';



export type OrderList_item = (
  { __typename: 'Order' }
  & Pick<Types.Order, '_id' | 'orderID' | 'orderDate' | 'customerID' | 'employeeID' | 'freight'>
  & { employee?: Types.Maybe<(
    { __typename: 'Employee' }
    & Pick<Types.Employee, 'firstName' | 'lastName' | 'birthDate'>
  )>, customer?: Types.Maybe<(
    { __typename: 'Customer' }
    & Customer_data
  )> }
);

export type Customer_data = (
  { __typename: 'Customer' }
  & Pick<Types.Customer, 'companyName'>
  & { address?: Types.Maybe<(
    { __typename: 'CustomerAddress' }
    & Pick<Types.CustomerAddress, 'city'>
  )> }
);

export const Customer_data: DocumentNode = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Customer_data"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Customer"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"companyName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"address"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"city"},"arguments":[],"directives":[]}]}}]}}]};
export const OrderList_item: DocumentNode = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrderList_item"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Order"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"orderID"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"orderDate"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"customerID"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"employeeID"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"employee"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"lastName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"birthDate"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Customer_data"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"freight"},"arguments":[],"directives":[]}]}},...Customer_data.definitions]};