export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: string;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `ID` scalar type represents a unique MongoDB identifier in collection. MongoDB by default use 12-byte ObjectId value (https://docs.mongodb.com/manual/reference/bson-types/#objectid). But MongoDB also may accepts string or integer as correct values for _id field. */
  MongoID: string;
  /** The string representation of JavaScript regexp. You may provide it with flags "/^abc.*\/i" or without flags like "^abc.*". More info about RegExp characters and flags: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions */
  RegExpAsString: string;
};

export type Category = {
  __typename?: 'Category';
  _id: Scalars['MongoID'];
  /** Category unique ID */
  categoryID?: Maybe<Scalars['Float']>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  productConnection?: Maybe<ProductConnection>;
  productList: Array<Product>;
};


export type CategoryProductConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortConnectionProductEnum>;
};


export type CategoryProductListArgs = {
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyProductInput>;
};

export type CreateOneOrderInput = {
  customerID?: Maybe<Scalars['String']>;
  /** List of ordered products */
  details?: Maybe<Array<Maybe<OrderDetailsInput>>>;
  employeeID?: Maybe<Scalars['Float']>;
  freight?: Maybe<Scalars['Float']>;
  orderDate?: Maybe<Scalars['Date']>;
  /** Order unique ID */
  orderID?: Maybe<Scalars['Float']>;
  requiredDate?: Maybe<Scalars['Date']>;
  shipAddress?: Maybe<CustomerAddressInput>;
  shipName?: Maybe<Scalars['String']>;
  shipVia?: Maybe<Scalars['Float']>;
  shippedDate?: Maybe<Scalars['Date']>;
};

export type CreateOneOrderPayload = {
  __typename?: 'CreateOneOrderPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  query?: Maybe<Query>;
  /** Created document */
  record?: Maybe<Order>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
};

export type CreateOneProductInput = {
  categoryID?: Maybe<Scalars['Float']>;
  discontinued?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  /** Unique product id */
  productID?: Maybe<Scalars['Float']>;
  quantityPerUnit?: Maybe<Scalars['String']>;
  reorderLevel?: Maybe<Scalars['Float']>;
  supplierID?: Maybe<Scalars['Float']>;
  unitPrice?: Maybe<Scalars['Float']>;
  unitsInStock?: Maybe<Scalars['Float']>;
  unitsOnOrder?: Maybe<Scalars['Float']>;
};

export type CreateOneProductPayload = {
  __typename?: 'CreateOneProductPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  query?: Maybe<Query>;
  /** Created document */
  record?: Maybe<Product>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
};

export type Customer = {
  __typename?: 'Customer';
  _id: Scalars['MongoID'];
  address?: Maybe<CustomerAddress>;
  companyName?: Maybe<Scalars['String']>;
  contactName?: Maybe<Scalars['String']>;
  contactTitle?: Maybe<Scalars['String']>;
  /** Customer unique ID */
  customerID?: Maybe<Scalars['String']>;
  orderConnection?: Maybe<OrderConnection>;
  orderList: Array<Order>;
};


export type CustomerOrderConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortConnectionOrderEnum>;
};


export type CustomerOrderListArgs = {
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyOrderInput>;
};

export type CustomerAddress = {
  __typename?: 'CustomerAddress';
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
};

export type CustomerAddressInput = {
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
};

/** A connection to a list of items. */
export type CustomerConnection = {
  __typename?: 'CustomerConnection';
  /** Total object count. */
  count: Scalars['Int'];
  /** Information to aid in pagination. */
  edges: Array<CustomerEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type CustomerEdge = {
  __typename?: 'CustomerEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node: Customer;
};

/** List of items with pagination. */
export type CustomerPagination = {
  __typename?: 'CustomerPagination';
  /** Total object count. */
  count?: Maybe<Scalars['Int']>;
  /** Array of objects. */
  items?: Maybe<Array<Customer>>;
  /** Information to aid in pagination. */
  pageInfo: PaginationInfo;
};

export type Employee = {
  __typename?: 'Employee';
  _id: Scalars['MongoID'];
  address?: Maybe<CustomerAddress>;
  birthDate?: Maybe<Scalars['Date']>;
  chief?: Maybe<Employee>;
  /** Category unique ID */
  employeeID?: Maybe<Scalars['Float']>;
  firstName?: Maybe<Scalars['String']>;
  hireDate?: Maybe<Scalars['Date']>;
  lastName?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  orderConnection?: Maybe<OrderConnection>;
  /** ID of chief */
  reportsTo?: Maybe<Scalars['Float']>;
  subordinates: Array<Employee>;
  /** Attached territory ID from region collection */
  territoryIDs?: Maybe<Array<Maybe<Scalars['Float']>>>;
  title?: Maybe<Scalars['String']>;
  titleOfCourtesy?: Maybe<Scalars['String']>;
};


export type EmployeeOrderConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortConnectionOrderEnum>;
};


export type EmployeeSubordinatesArgs = {
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyEmployeeInput>;
};

/** List of items with pagination. */
export type EmployeePagination = {
  __typename?: 'EmployeePagination';
  /** Total object count. */
  count?: Maybe<Scalars['Int']>;
  /** Array of objects. */
  items?: Maybe<Array<Employee>>;
  /** Information to aid in pagination. */
  pageInfo: PaginationInfo;
};

export type ErrorInterface = {
  /** Generic error message */
  message?: Maybe<Scalars['String']>;
};

export type FilterFindManyCategoryCategoryIdOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindManyCategoryInput = {
  AND?: Maybe<Array<FilterFindManyCategoryInput>>;
  OR?: Maybe<Array<FilterFindManyCategoryInput>>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindManyCategoryOperatorsInput>;
  /** Category unique ID */
  categoryID?: Maybe<Scalars['Float']>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type FilterFindManyCategoryNameOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyCategoryOperatorsInput = {
  _id?: Maybe<FilterFindManyCategory_IdOperatorsInput>;
  categoryID?: Maybe<FilterFindManyCategoryCategoryIdOperatorsInput>;
  name?: Maybe<FilterFindManyCategoryNameOperatorsInput>;
};

export type FilterFindManyCategory_IdOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
};

export type FilterFindManyCustomerAddressInput = {
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
};

export type FilterFindManyCustomerCompanyNameOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyCustomerCustomerIdOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManyCustomerInput = {
  AND?: Maybe<Array<FilterFindManyCustomerInput>>;
  OR?: Maybe<Array<FilterFindManyCustomerInput>>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindManyCustomerOperatorsInput>;
  address?: Maybe<FilterFindManyCustomerAddressInput>;
  companyName?: Maybe<Scalars['String']>;
  contactName?: Maybe<Scalars['String']>;
  contactTitle?: Maybe<Scalars['String']>;
  /** Customer unique ID */
  customerID?: Maybe<Scalars['String']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyCustomerOperatorsInput = {
  _id?: Maybe<FilterFindManyCustomer_IdOperatorsInput>;
  companyName?: Maybe<FilterFindManyCustomerCompanyNameOperatorsInput>;
  customerID?: Maybe<FilterFindManyCustomerCustomerIdOperatorsInput>;
};

export type FilterFindManyCustomer_IdOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
};

export type FilterFindManyEmployeeEmployeeIdOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindManyEmployeeInput = {
  AND?: Maybe<Array<FilterFindManyEmployeeInput>>;
  OR?: Maybe<Array<FilterFindManyEmployeeInput>>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindManyEmployeeOperatorsInput>;
  address?: Maybe<FilterFindManyCustomerAddressInput>;
  birthDate?: Maybe<Scalars['Date']>;
  /** Category unique ID */
  employeeID?: Maybe<Scalars['Float']>;
  firstName?: Maybe<Scalars['String']>;
  /** Fulltext search with mongodb stemming and weights */
  fullTextSearch?: Maybe<Scalars['String']>;
  hireDate?: Maybe<Scalars['Date']>;
  lastName?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  /** ID of chief */
  reportsTo?: Maybe<Scalars['Float']>;
  /** Attached territory ID from region collection */
  territoryIDs?: Maybe<Array<Maybe<Scalars['Float']>>>;
  title?: Maybe<Scalars['String']>;
  titleOfCourtesy?: Maybe<Scalars['String']>;
};

export type FilterFindManyEmployeeLastNameOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyEmployeeOperatorsInput = {
  _id?: Maybe<FilterFindManyEmployee_IdOperatorsInput>;
  employeeID?: Maybe<FilterFindManyEmployeeEmployeeIdOperatorsInput>;
  lastName?: Maybe<FilterFindManyEmployeeLastNameOperatorsInput>;
  territoryIDs?: Maybe<FilterFindManyEmployeeTerritoryIDsOperatorsInput>;
};

export type FilterFindManyEmployeeTerritoryIDsOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindManyEmployee_IdOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
};

export type FilterFindManyOrderDetailsInput = {
  discount?: Maybe<Scalars['Float']>;
  productID?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  unitPrice?: Maybe<Scalars['Float']>;
};

export type FilterFindManyOrderInput = {
  AND?: Maybe<Array<FilterFindManyOrderInput>>;
  OR?: Maybe<Array<FilterFindManyOrderInput>>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindManyOrderOperatorsInput>;
  customerID?: Maybe<Scalars['String']>;
  /** List of ordered products */
  details?: Maybe<Array<Maybe<FilterFindManyOrderDetailsInput>>>;
  employeeID?: Maybe<Scalars['Float']>;
  freight?: Maybe<Scalars['Float']>;
  orderDate?: Maybe<Scalars['Date']>;
  /** Order unique ID */
  orderID?: Maybe<Scalars['Float']>;
  requiredDate?: Maybe<Scalars['Date']>;
  shipAddress?: Maybe<FilterFindManyCustomerAddressInput>;
  shipName?: Maybe<Scalars['String']>;
  shipVia?: Maybe<Scalars['Float']>;
  shippedDate?: Maybe<Scalars['Date']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyOrderOperatorsInput = {
  _id?: Maybe<FilterFindManyOrder_IdOperatorsInput>;
  orderID?: Maybe<FilterFindManyOrderOrderIdOperatorsInput>;
};

export type FilterFindManyOrderOrderIdOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindManyOrder_IdOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
};

export type FilterFindManyProductInput = {
  AND?: Maybe<Array<FilterFindManyProductInput>>;
  OR?: Maybe<Array<FilterFindManyProductInput>>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindManyProductOperatorsInput>;
  categoryID?: Maybe<Scalars['Float']>;
  discontinued?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  /** Search by regExp */
  nameRegexp?: Maybe<Scalars['String']>;
  /** Unique product id */
  productID?: Maybe<Scalars['Float']>;
  quantityPerUnit?: Maybe<Scalars['String']>;
  reorderLevel?: Maybe<Scalars['Float']>;
  supplierID?: Maybe<Scalars['Float']>;
  unitPrice?: Maybe<Scalars['Float']>;
  unitsInStock?: Maybe<Scalars['Float']>;
  unitsOnOrder?: Maybe<Scalars['Float']>;
};

export type FilterFindManyProductNameOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyProductOperatorsInput = {
  _id?: Maybe<FilterFindManyProduct_IdOperatorsInput>;
  name?: Maybe<FilterFindManyProductNameOperatorsInput>;
  productID?: Maybe<FilterFindManyProductProductIdOperatorsInput>;
  unitPrice?: Maybe<FilterFindManyProductUnitPriceOperatorsInput>;
};

export type FilterFindManyProductProductIdOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindManyProductUnitPriceOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindManyProduct_IdOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
};

export type FilterFindManyRegionInput = {
  AND?: Maybe<Array<FilterFindManyRegionInput>>;
  OR?: Maybe<Array<FilterFindManyRegionInput>>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindManyRegionOperatorsInput>;
  name?: Maybe<Scalars['String']>;
  /** Region unique ID */
  regionID?: Maybe<Scalars['Float']>;
  territories?: Maybe<Array<Maybe<FilterFindManyRegionTerritoriesInput>>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyRegionOperatorsInput = {
  _id?: Maybe<FilterFindManyRegion_IdOperatorsInput>;
  regionID?: Maybe<FilterFindManyRegionRegionIdOperatorsInput>;
};

export type FilterFindManyRegionRegionIdOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindManyRegionTerritoriesInput = {
  name?: Maybe<Scalars['String']>;
  territoryID?: Maybe<Scalars['Float']>;
};

export type FilterFindManyRegion_IdOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
};

export type FilterFindManyShipperInput = {
  AND?: Maybe<Array<FilterFindManyShipperInput>>;
  OR?: Maybe<Array<FilterFindManyShipperInput>>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindManyShipperOperatorsInput>;
  companyName?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  /** Shipper unique ID */
  shipperID?: Maybe<Scalars['Float']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyShipperOperatorsInput = {
  _id?: Maybe<FilterFindManyShipper_IdOperatorsInput>;
  shipperID?: Maybe<FilterFindManyShipperShipperIdOperatorsInput>;
};

export type FilterFindManyShipperShipperIdOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindManyShipper_IdOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
};

export type FilterFindManySupplierCompanyNameOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindManySupplierInput = {
  AND?: Maybe<Array<FilterFindManySupplierInput>>;
  OR?: Maybe<Array<FilterFindManySupplierInput>>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindManySupplierOperatorsInput>;
  address?: Maybe<FilterFindManyCustomerAddressInput>;
  companyName?: Maybe<Scalars['String']>;
  contactName?: Maybe<Scalars['String']>;
  contactTitle?: Maybe<Scalars['String']>;
  /** Supplier unique ID */
  supplierID?: Maybe<Scalars['Float']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManySupplierOperatorsInput = {
  _id?: Maybe<FilterFindManySupplier_IdOperatorsInput>;
  companyName?: Maybe<FilterFindManySupplierCompanyNameOperatorsInput>;
  supplierID?: Maybe<FilterFindManySupplierSupplierIdOperatorsInput>;
};

export type FilterFindManySupplierSupplierIdOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindManySupplier_IdOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
};

export type FilterFindOneCategoryCategoryIdOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindOneCategoryInput = {
  AND?: Maybe<Array<FilterFindOneCategoryInput>>;
  OR?: Maybe<Array<FilterFindOneCategoryInput>>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindOneCategoryOperatorsInput>;
  /** Category unique ID */
  categoryID?: Maybe<Scalars['Float']>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type FilterFindOneCategoryNameOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneCategoryOperatorsInput = {
  _id?: Maybe<FilterFindOneCategory_IdOperatorsInput>;
  categoryID?: Maybe<FilterFindOneCategoryCategoryIdOperatorsInput>;
  name?: Maybe<FilterFindOneCategoryNameOperatorsInput>;
};

export type FilterFindOneCategory_IdOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
};

export type FilterFindOneCustomerAddressInput = {
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
};

export type FilterFindOneCustomerCompanyNameOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneCustomerCustomerIdOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneCustomerInput = {
  AND?: Maybe<Array<FilterFindOneCustomerInput>>;
  OR?: Maybe<Array<FilterFindOneCustomerInput>>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindOneCustomerOperatorsInput>;
  address?: Maybe<FilterFindOneCustomerAddressInput>;
  companyName?: Maybe<Scalars['String']>;
  contactName?: Maybe<Scalars['String']>;
  contactTitle?: Maybe<Scalars['String']>;
  /** Customer unique ID */
  customerID?: Maybe<Scalars['String']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneCustomerOperatorsInput = {
  _id?: Maybe<FilterFindOneCustomer_IdOperatorsInput>;
  companyName?: Maybe<FilterFindOneCustomerCompanyNameOperatorsInput>;
  customerID?: Maybe<FilterFindOneCustomerCustomerIdOperatorsInput>;
};

export type FilterFindOneCustomer_IdOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
};

export type FilterFindOneEmployeeEmployeeIdOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindOneEmployeeInput = {
  AND?: Maybe<Array<FilterFindOneEmployeeInput>>;
  OR?: Maybe<Array<FilterFindOneEmployeeInput>>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindOneEmployeeOperatorsInput>;
  address?: Maybe<FilterFindOneCustomerAddressInput>;
  birthDate?: Maybe<Scalars['Date']>;
  /** Category unique ID */
  employeeID?: Maybe<Scalars['Float']>;
  firstName?: Maybe<Scalars['String']>;
  hireDate?: Maybe<Scalars['Date']>;
  lastName?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  /** ID of chief */
  reportsTo?: Maybe<Scalars['Float']>;
  /** Attached territory ID from region collection */
  territoryIDs?: Maybe<Array<Maybe<Scalars['Float']>>>;
  title?: Maybe<Scalars['String']>;
  titleOfCourtesy?: Maybe<Scalars['String']>;
};

export type FilterFindOneEmployeeLastNameOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneEmployeeOperatorsInput = {
  _id?: Maybe<FilterFindOneEmployee_IdOperatorsInput>;
  employeeID?: Maybe<FilterFindOneEmployeeEmployeeIdOperatorsInput>;
  lastName?: Maybe<FilterFindOneEmployeeLastNameOperatorsInput>;
  territoryIDs?: Maybe<FilterFindOneEmployeeTerritoryIDsOperatorsInput>;
};

export type FilterFindOneEmployeeTerritoryIDsOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindOneEmployee_IdOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
};

export type FilterFindOneOrderDetailsInput = {
  discount?: Maybe<Scalars['Float']>;
  productID?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  unitPrice?: Maybe<Scalars['Float']>;
};

export type FilterFindOneOrderInput = {
  AND?: Maybe<Array<FilterFindOneOrderInput>>;
  OR?: Maybe<Array<FilterFindOneOrderInput>>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindOneOrderOperatorsInput>;
  customerID?: Maybe<Scalars['String']>;
  /** List of ordered products */
  details?: Maybe<Array<Maybe<FilterFindOneOrderDetailsInput>>>;
  employeeID?: Maybe<Scalars['Float']>;
  freight?: Maybe<Scalars['Float']>;
  orderDate?: Maybe<Scalars['Date']>;
  /** Order unique ID */
  orderID?: Maybe<Scalars['Float']>;
  requiredDate?: Maybe<Scalars['Date']>;
  shipAddress?: Maybe<FilterFindOneCustomerAddressInput>;
  shipName?: Maybe<Scalars['String']>;
  shipVia?: Maybe<Scalars['Float']>;
  shippedDate?: Maybe<Scalars['Date']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneOrderOperatorsInput = {
  _id?: Maybe<FilterFindOneOrder_IdOperatorsInput>;
  orderID?: Maybe<FilterFindOneOrderOrderIdOperatorsInput>;
};

export type FilterFindOneOrderOrderIdOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindOneOrder_IdOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
};

export type FilterFindOneProductInput = {
  AND?: Maybe<Array<FilterFindOneProductInput>>;
  OR?: Maybe<Array<FilterFindOneProductInput>>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindOneProductOperatorsInput>;
  categoryID?: Maybe<Scalars['Float']>;
  discontinued?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  /** Unique product id */
  productID?: Maybe<Scalars['Float']>;
  quantityPerUnit?: Maybe<Scalars['String']>;
  reorderLevel?: Maybe<Scalars['Float']>;
  supplierID?: Maybe<Scalars['Float']>;
  unitPrice?: Maybe<Scalars['Float']>;
  unitsInStock?: Maybe<Scalars['Float']>;
  unitsOnOrder?: Maybe<Scalars['Float']>;
};

export type FilterFindOneProductNameOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneProductOperatorsInput = {
  _id?: Maybe<FilterFindOneProduct_IdOperatorsInput>;
  name?: Maybe<FilterFindOneProductNameOperatorsInput>;
  productID?: Maybe<FilterFindOneProductProductIdOperatorsInput>;
  unitPrice?: Maybe<FilterFindOneProductUnitPriceOperatorsInput>;
};

export type FilterFindOneProductProductIdOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindOneProductUnitPriceOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindOneProduct_IdOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
};

export type FilterFindOneRegionInput = {
  AND?: Maybe<Array<FilterFindOneRegionInput>>;
  OR?: Maybe<Array<FilterFindOneRegionInput>>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindOneRegionOperatorsInput>;
  name?: Maybe<Scalars['String']>;
  /** Region unique ID */
  regionID?: Maybe<Scalars['Float']>;
  territories?: Maybe<Array<Maybe<FilterFindOneRegionTerritoriesInput>>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneRegionOperatorsInput = {
  _id?: Maybe<FilterFindOneRegion_IdOperatorsInput>;
  regionID?: Maybe<FilterFindOneRegionRegionIdOperatorsInput>;
};

export type FilterFindOneRegionRegionIdOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindOneRegionTerritoriesInput = {
  name?: Maybe<Scalars['String']>;
  territoryID?: Maybe<Scalars['Float']>;
};

export type FilterFindOneRegion_IdOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
};

export type FilterFindOneShipperInput = {
  AND?: Maybe<Array<FilterFindOneShipperInput>>;
  OR?: Maybe<Array<FilterFindOneShipperInput>>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindOneShipperOperatorsInput>;
  companyName?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  /** Shipper unique ID */
  shipperID?: Maybe<Scalars['Float']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneShipperOperatorsInput = {
  _id?: Maybe<FilterFindOneShipper_IdOperatorsInput>;
  shipperID?: Maybe<FilterFindOneShipperShipperIdOperatorsInput>;
};

export type FilterFindOneShipperShipperIdOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindOneShipper_IdOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
};

export type FilterFindOneSupplierCompanyNameOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

export type FilterFindOneSupplierInput = {
  AND?: Maybe<Array<FilterFindOneSupplierInput>>;
  OR?: Maybe<Array<FilterFindOneSupplierInput>>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindOneSupplierOperatorsInput>;
  address?: Maybe<FilterFindOneCustomerAddressInput>;
  companyName?: Maybe<Scalars['String']>;
  contactName?: Maybe<Scalars['String']>;
  contactTitle?: Maybe<Scalars['String']>;
  /** Supplier unique ID */
  supplierID?: Maybe<Scalars['Float']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneSupplierOperatorsInput = {
  _id?: Maybe<FilterFindOneSupplier_IdOperatorsInput>;
  companyName?: Maybe<FilterFindOneSupplierCompanyNameOperatorsInput>;
  supplierID?: Maybe<FilterFindOneSupplierSupplierIdOperatorsInput>;
};

export type FilterFindOneSupplierSupplierIdOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterFindOneSupplier_IdOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
};

export type FilterRemoveOneCustomerAddressInput = {
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
};

export type FilterRemoveOneOrderDetailsInput = {
  discount?: Maybe<Scalars['Float']>;
  productID?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  unitPrice?: Maybe<Scalars['Float']>;
};

export type FilterRemoveOneOrderInput = {
  AND?: Maybe<Array<FilterRemoveOneOrderInput>>;
  OR?: Maybe<Array<FilterRemoveOneOrderInput>>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterRemoveOneOrderOperatorsInput>;
  customerID?: Maybe<Scalars['String']>;
  /** List of ordered products */
  details?: Maybe<Array<Maybe<FilterRemoveOneOrderDetailsInput>>>;
  employeeID?: Maybe<Scalars['Float']>;
  freight?: Maybe<Scalars['Float']>;
  orderDate?: Maybe<Scalars['Date']>;
  /** Order unique ID */
  orderID?: Maybe<Scalars['Float']>;
  requiredDate?: Maybe<Scalars['Date']>;
  shipAddress?: Maybe<FilterRemoveOneCustomerAddressInput>;
  shipName?: Maybe<Scalars['String']>;
  shipVia?: Maybe<Scalars['Float']>;
  shippedDate?: Maybe<Scalars['Date']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterRemoveOneOrderOperatorsInput = {
  _id?: Maybe<FilterRemoveOneOrder_IdOperatorsInput>;
  orderID?: Maybe<FilterRemoveOneOrderOrderIdOperatorsInput>;
};

export type FilterRemoveOneOrderOrderIdOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterRemoveOneOrder_IdOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
};

export type FilterRemoveOneProductInput = {
  AND?: Maybe<Array<FilterRemoveOneProductInput>>;
  OR?: Maybe<Array<FilterRemoveOneProductInput>>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterRemoveOneProductOperatorsInput>;
  categoryID?: Maybe<Scalars['Float']>;
  discontinued?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  /** Unique product id */
  productID?: Maybe<Scalars['Float']>;
  quantityPerUnit?: Maybe<Scalars['String']>;
  reorderLevel?: Maybe<Scalars['Float']>;
  supplierID?: Maybe<Scalars['Float']>;
  unitPrice?: Maybe<Scalars['Float']>;
  unitsInStock?: Maybe<Scalars['Float']>;
  unitsOnOrder?: Maybe<Scalars['Float']>;
};

export type FilterRemoveOneProductNameOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterRemoveOneProductOperatorsInput = {
  _id?: Maybe<FilterRemoveOneProduct_IdOperatorsInput>;
  name?: Maybe<FilterRemoveOneProductNameOperatorsInput>;
  productID?: Maybe<FilterRemoveOneProductProductIdOperatorsInput>;
  unitPrice?: Maybe<FilterRemoveOneProductUnitPriceOperatorsInput>;
};

export type FilterRemoveOneProductProductIdOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterRemoveOneProductUnitPriceOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FilterRemoveOneProduct_IdOperatorsInput = {
  exists?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
};

export type MongoError = ErrorInterface & {
  __typename?: 'MongoError';
  /** MongoDB error code */
  code?: Maybe<Scalars['Int']>;
  /** MongoDB error message */
  message?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Create one document with mongoose defaults, setters, hooks and validation */
  createOrder?: Maybe<CreateOneOrderPayload>;
  /** Create one document with mongoose defaults, setters, hooks and validation */
  createProduct?: Maybe<CreateOneProductPayload>;
  /** Remove one document: 1) Remove with hooks via findOneAndRemove. 2) Return removed document. */
  removeOrder?: Maybe<RemoveOneOrderPayload>;
  /** Remove one document: 1) Remove with hooks via findOneAndRemove. 2) Return removed document. */
  removeProduct?: Maybe<RemoveOneProductPayload>;
  /** Remove all data and seed DB from scratch. Anyway data automatically reloaded every 30 minutes. */
  resetData?: Maybe<Scalars['String']>;
  /** Update one document: 1) Retrieve one document by findById. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  updateEmployee?: Maybe<UpdateByIdEmployeePayload>;
  /** Update one document: 1) Retrieve one document by findById. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  updateOrder?: Maybe<UpdateByIdOrderPayload>;
  /** Update one document: 1) Retrieve one document by findById. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  updateProduct?: Maybe<UpdateByIdProductPayload>;
};


export type MutationCreateOrderArgs = {
  record: CreateOneOrderInput;
};


export type MutationCreateProductArgs = {
  record: CreateOneProductInput;
};


export type MutationRemoveOrderArgs = {
  filter?: Maybe<FilterRemoveOneOrderInput>;
  sort?: Maybe<SortRemoveOneOrderInput>;
};


export type MutationRemoveProductArgs = {
  filter?: Maybe<FilterRemoveOneProductInput>;
  sort?: Maybe<SortRemoveOneProductInput>;
};


export type MutationUpdateEmployeeArgs = {
  _id: Scalars['MongoID'];
  record: UpdateByIdEmployeeInput;
};


export type MutationUpdateOrderArgs = {
  _id: Scalars['MongoID'];
  record: UpdateByIdOrderInput;
};


export type MutationUpdateProductArgs = {
  _id: Scalars['MongoID'];
  record: UpdateByIdProductInput;
};

export type Order = {
  __typename?: 'Order';
  _id: Scalars['MongoID'];
  customer?: Maybe<Customer>;
  customerID?: Maybe<Scalars['String']>;
  /** List of ordered products */
  details?: Maybe<Array<Maybe<OrderDetails>>>;
  employee?: Maybe<Employee>;
  employeeID?: Maybe<Scalars['Float']>;
  freight?: Maybe<Scalars['Float']>;
  orderDate?: Maybe<Scalars['Date']>;
  /** Order unique ID */
  orderID?: Maybe<Scalars['Float']>;
  requiredDate?: Maybe<Scalars['Date']>;
  shipAddress?: Maybe<CustomerAddress>;
  shipName?: Maybe<Scalars['String']>;
  shipName1234?: Maybe<Scalars['String']>;
  shipVia?: Maybe<Scalars['Float']>;
  shippedDate?: Maybe<Scalars['Date']>;
  shipper?: Maybe<Shipper>;
  time?: Maybe<Scalars['String']>;
};

/** A connection to a list of items. */
export type OrderConnection = {
  __typename?: 'OrderConnection';
  /** Total object count. */
  count: Scalars['Int'];
  /** Information to aid in pagination. */
  edges: Array<OrderEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type OrderDetails = {
  __typename?: 'OrderDetails';
  discount?: Maybe<Scalars['Float']>;
  product?: Maybe<Product>;
  productID?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  unitPrice?: Maybe<Scalars['Float']>;
};

export type OrderDetailsInput = {
  discount?: Maybe<Scalars['Float']>;
  productID?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  unitPrice?: Maybe<Scalars['Float']>;
};

/** An edge in a connection. */
export type OrderEdge = {
  __typename?: 'OrderEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node: Order;
};

/** List of items with pagination. */
export type OrderPagination = {
  __typename?: 'OrderPagination';
  /** Total object count. */
  count?: Maybe<Scalars['Int']>;
  /** Array of objects. */
  items?: Maybe<Array<Order>>;
  /** Information to aid in pagination. */
  pageInfo: PaginationInfo;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

export type PaginationInfo = {
  __typename?: 'PaginationInfo';
  currentPage: Scalars['Int'];
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPreviousPage?: Maybe<Scalars['Boolean']>;
  itemCount?: Maybe<Scalars['Int']>;
  pageCount?: Maybe<Scalars['Int']>;
  perPage: Scalars['Int'];
};

export type Product = {
  __typename?: 'Product';
  _id: Scalars['MongoID'];
  category?: Maybe<Category>;
  categoryID?: Maybe<Scalars['Float']>;
  discontinued?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  orderConnection?: Maybe<OrderConnection>;
  orderList: Array<Order>;
  /** Unique product id */
  productID?: Maybe<Scalars['Float']>;
  quantityPerUnit?: Maybe<Scalars['String']>;
  reorderLevel?: Maybe<Scalars['Float']>;
  supplier?: Maybe<Supplier>;
  supplierID?: Maybe<Scalars['Float']>;
  unitPrice?: Maybe<Scalars['Float']>;
  unitsInStock?: Maybe<Scalars['Float']>;
  unitsOnOrder?: Maybe<Scalars['Float']>;
};


export type ProductOrderConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortConnectionOrderEnum>;
};


export type ProductOrderListArgs = {
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyOrderInput>;
};

/** A connection to a list of items. */
export type ProductConnection = {
  __typename?: 'ProductConnection';
  /** Total object count. */
  count: Scalars['Int'];
  /** Information to aid in pagination. */
  edges: Array<ProductEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ProductEdge = {
  __typename?: 'ProductEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node: Product;
};

/** List of items with pagination. */
export type ProductPagination = {
  __typename?: 'ProductPagination';
  /** Total object count. */
  count?: Maybe<Scalars['Int']>;
  /** Array of objects. */
  items?: Maybe<Array<Product>>;
  /** Information to aid in pagination. */
  pageInfo: PaginationInfo;
};

export type Query = {
  __typename?: 'Query';
  /** Data under client context */
  viewer?: Maybe<Viewer>;
};

export type Region = {
  __typename?: 'Region';
  _id: Scalars['MongoID'];
  employees: Array<Employee>;
  name?: Maybe<Scalars['String']>;
  /** Region unique ID */
  regionID?: Maybe<Scalars['Float']>;
  territories?: Maybe<Array<Maybe<RegionTerritories>>>;
};


export type RegionEmployeesArgs = {
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyEmployeeInput>;
};

export type RegionTerritories = {
  __typename?: 'RegionTerritories';
  name?: Maybe<Scalars['String']>;
  territoryID?: Maybe<Scalars['Float']>;
};

export type RemoveOneOrderPayload = {
  __typename?: 'RemoveOneOrderPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  query?: Maybe<Query>;
  /** Removed document */
  record?: Maybe<Order>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
};

export type RemoveOneProductPayload = {
  __typename?: 'RemoveOneProductPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  query?: Maybe<Query>;
  /** Removed document */
  record?: Maybe<Product>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
};

export type RuntimeError = ErrorInterface & {
  __typename?: 'RuntimeError';
  /** Runtime error message */
  message?: Maybe<Scalars['String']>;
};

export type Shipper = {
  __typename?: 'Shipper';
  _id: Scalars['MongoID'];
  companyName?: Maybe<Scalars['String']>;
  orderConnection?: Maybe<OrderConnection>;
  phone?: Maybe<Scalars['String']>;
  /** Shipper unique ID */
  shipperID?: Maybe<Scalars['Float']>;
};


export type ShipperOrderConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortConnectionOrderEnum>;
};

export enum SortConnectionCustomerEnum {
  CompanynameAsc = 'COMPANYNAME_ASC',
  CompanynameDesc = 'COMPANYNAME_DESC',
  CustomeridAsc = 'CUSTOMERID_ASC',
  CustomeridDesc = 'CUSTOMERID_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortConnectionOrderEnum {
  OrderidAsc = 'ORDERID_ASC',
  OrderidDesc = 'ORDERID_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortConnectionProductEnum {
  NameSupplieridAsc = 'NAME__SUPPLIERID_ASC',
  NameSupplieridDesc = 'NAME__SUPPLIERID_DESC',
  ProductidAsc = 'PRODUCTID_ASC',
  ProductidDesc = 'PRODUCTID_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortConnectionSupplierEnum {
  CompanynameAsc = 'COMPANYNAME_ASC',
  CompanynameDesc = 'COMPANYNAME_DESC',
  SupplieridAsc = 'SUPPLIERID_ASC',
  SupplieridDesc = 'SUPPLIERID_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManyCategoryInput {
  CategoryidAsc = 'CATEGORYID_ASC',
  CategoryidDesc = 'CATEGORYID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManyCustomerInput {
  CompanynameAsc = 'COMPANYNAME_ASC',
  CompanynameDesc = 'COMPANYNAME_DESC',
  CustomeridAsc = 'CUSTOMERID_ASC',
  CustomeridDesc = 'CUSTOMERID_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManyEmployeeInput {
  EmployeeidAsc = 'EMPLOYEEID_ASC',
  EmployeeidDesc = 'EMPLOYEEID_DESC',
  LastnameAsc = 'LASTNAME_ASC',
  LastnameDesc = 'LASTNAME_DESC',
  LastnameFirstnameAsc = 'LASTNAME__FIRSTNAME_ASC',
  LastnameFirstnameDesc = 'LASTNAME__FIRSTNAME_DESC',
  TerritoryidsAsc = 'TERRITORYIDS_ASC',
  TerritoryidsDesc = 'TERRITORYIDS_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManyOrderInput {
  OrderidAsc = 'ORDERID_ASC',
  OrderidDesc = 'ORDERID_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManyProductInput {
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  NameSupplieridAsc = 'NAME__SUPPLIERID_ASC',
  NameSupplieridDesc = 'NAME__SUPPLIERID_DESC',
  ProductidAsc = 'PRODUCTID_ASC',
  ProductidDesc = 'PRODUCTID_DESC',
  UnitpriceAsc = 'UNITPRICE_ASC',
  UnitpriceDesc = 'UNITPRICE_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManyRegionInput {
  RegionidAsc = 'REGIONID_ASC',
  RegionidDesc = 'REGIONID_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManyShipperInput {
  ShipperidAsc = 'SHIPPERID_ASC',
  ShipperidDesc = 'SHIPPERID_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindOneCategoryInput {
  CategoryidAsc = 'CATEGORYID_ASC',
  CategoryidDesc = 'CATEGORYID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindOneCustomerInput {
  CompanynameAsc = 'COMPANYNAME_ASC',
  CompanynameDesc = 'COMPANYNAME_DESC',
  CustomeridAsc = 'CUSTOMERID_ASC',
  CustomeridDesc = 'CUSTOMERID_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindOneEmployeeInput {
  EmployeeidAsc = 'EMPLOYEEID_ASC',
  EmployeeidDesc = 'EMPLOYEEID_DESC',
  LastnameAsc = 'LASTNAME_ASC',
  LastnameDesc = 'LASTNAME_DESC',
  LastnameFirstnameAsc = 'LASTNAME__FIRSTNAME_ASC',
  LastnameFirstnameDesc = 'LASTNAME__FIRSTNAME_DESC',
  TerritoryidsAsc = 'TERRITORYIDS_ASC',
  TerritoryidsDesc = 'TERRITORYIDS_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindOneOrderInput {
  OrderidAsc = 'ORDERID_ASC',
  OrderidDesc = 'ORDERID_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindOneProductInput {
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  NameSupplieridAsc = 'NAME__SUPPLIERID_ASC',
  NameSupplieridDesc = 'NAME__SUPPLIERID_DESC',
  ProductidAsc = 'PRODUCTID_ASC',
  ProductidDesc = 'PRODUCTID_DESC',
  UnitpriceAsc = 'UNITPRICE_ASC',
  UnitpriceDesc = 'UNITPRICE_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindOneRegionInput {
  RegionidAsc = 'REGIONID_ASC',
  RegionidDesc = 'REGIONID_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindOneShipperInput {
  ShipperidAsc = 'SHIPPERID_ASC',
  ShipperidDesc = 'SHIPPERID_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindOneSupplierInput {
  CompanynameAsc = 'COMPANYNAME_ASC',
  CompanynameDesc = 'COMPANYNAME_DESC',
  SupplieridAsc = 'SUPPLIERID_ASC',
  SupplieridDesc = 'SUPPLIERID_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortRemoveOneOrderInput {
  OrderidAsc = 'ORDERID_ASC',
  OrderidDesc = 'ORDERID_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortRemoveOneProductInput {
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  NameSupplieridAsc = 'NAME__SUPPLIERID_ASC',
  NameSupplieridDesc = 'NAME__SUPPLIERID_DESC',
  ProductidAsc = 'PRODUCTID_ASC',
  ProductidDesc = 'PRODUCTID_DESC',
  UnitpriceAsc = 'UNITPRICE_ASC',
  UnitpriceDesc = 'UNITPRICE_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type Subscription = {
  __typename?: 'Subscription';
  employeeUpdated?: Maybe<Employee>;
  orderCreated?: Maybe<Order>;
  orderRemoved?: Maybe<Scalars['MongoID']>;
  orderUpdated?: Maybe<Order>;
  productCreated?: Maybe<Product>;
  productRemoved?: Maybe<Scalars['MongoID']>;
  productUpdated?: Maybe<Product>;
};

export type Supplier = {
  __typename?: 'Supplier';
  _id: Scalars['MongoID'];
  address?: Maybe<CustomerAddress>;
  companyName?: Maybe<Scalars['String']>;
  contactName?: Maybe<Scalars['String']>;
  contactTitle?: Maybe<Scalars['String']>;
  productConnection?: Maybe<ProductConnection>;
  /** Supplier unique ID */
  supplierID?: Maybe<Scalars['Float']>;
};


export type SupplierProductConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortConnectionProductEnum>;
};

/** A connection to a list of items. */
export type SupplierConnection = {
  __typename?: 'SupplierConnection';
  /** Total object count. */
  count: Scalars['Int'];
  /** Information to aid in pagination. */
  edges: Array<SupplierEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type SupplierEdge = {
  __typename?: 'SupplierEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node: Supplier;
};

export type UpdateByIdCustomerAddressInput = {
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
};

export type UpdateByIdEmployeeInput = {
  address?: Maybe<UpdateByIdCustomerAddressInput>;
  birthDate?: Maybe<Scalars['Date']>;
  /** Category unique ID */
  employeeID?: Maybe<Scalars['Float']>;
  firstName?: Maybe<Scalars['String']>;
  hireDate?: Maybe<Scalars['Date']>;
  lastName?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  /** ID of chief */
  reportsTo?: Maybe<Scalars['Float']>;
  /** Attached territory ID from region collection */
  territoryIDs?: Maybe<Array<Maybe<Scalars['Float']>>>;
  title?: Maybe<Scalars['String']>;
  titleOfCourtesy?: Maybe<Scalars['String']>;
};

export type UpdateByIdEmployeePayload = {
  __typename?: 'UpdateByIdEmployeePayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  query?: Maybe<Query>;
  /** Updated document */
  record?: Maybe<Employee>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
};

export type UpdateByIdOrderDetailsInput = {
  discount?: Maybe<Scalars['Float']>;
  productID?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  unitPrice?: Maybe<Scalars['Float']>;
};

export type UpdateByIdOrderInput = {
  customerID?: Maybe<Scalars['String']>;
  /** List of ordered products */
  details?: Maybe<Array<Maybe<UpdateByIdOrderDetailsInput>>>;
  employeeID?: Maybe<Scalars['Float']>;
  freight?: Maybe<Scalars['Float']>;
  orderDate?: Maybe<Scalars['Date']>;
  /** Order unique ID */
  orderID?: Maybe<Scalars['Float']>;
  requiredDate?: Maybe<Scalars['Date']>;
  shipAddress?: Maybe<UpdateByIdCustomerAddressInput>;
  shipName?: Maybe<Scalars['String']>;
  shipVia?: Maybe<Scalars['Float']>;
  shippedDate?: Maybe<Scalars['Date']>;
};

export type UpdateByIdOrderPayload = {
  __typename?: 'UpdateByIdOrderPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  query?: Maybe<Query>;
  /** Updated document */
  record?: Maybe<Order>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
};

export type UpdateByIdProductInput = {
  categoryID?: Maybe<Scalars['Float']>;
  discontinued?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  /** Unique product id */
  productID?: Maybe<Scalars['Float']>;
  quantityPerUnit?: Maybe<Scalars['String']>;
  reorderLevel?: Maybe<Scalars['Float']>;
  supplierID?: Maybe<Scalars['Float']>;
  unitPrice?: Maybe<Scalars['Float']>;
  unitsInStock?: Maybe<Scalars['Float']>;
  unitsOnOrder?: Maybe<Scalars['Float']>;
};

export type UpdateByIdProductPayload = {
  __typename?: 'UpdateByIdProductPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  query?: Maybe<Query>;
  /** Updated document */
  record?: Maybe<Product>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
};

export type ValidationError = ErrorInterface & {
  __typename?: 'ValidationError';
  /** List of validator errors */
  errors?: Maybe<Array<ValidatorError>>;
  /** Combined error message from all validators */
  message?: Maybe<Scalars['String']>;
};

export type ValidatorError = {
  __typename?: 'ValidatorError';
  /** Input record idx in array which occurs the validation error. This `idx` is useful for createMany operation. For singular operations it always be 0. For *Many operations `idx` represents record index in array received from user. */
  idx: Scalars['Int'];
  /** Validation error message */
  message?: Maybe<Scalars['String']>;
  /** Source of the validation error from the model path */
  path?: Maybe<Scalars['String']>;
  /** Field value which occurs the validation error */
  value?: Maybe<Scalars['JSON']>;
};

export type Viewer = {
  __typename?: 'Viewer';
  category?: Maybe<Category>;
  categoryList: Array<Category>;
  customer?: Maybe<Customer>;
  customerConnection?: Maybe<CustomerConnection>;
  customerPagination?: Maybe<CustomerPagination>;
  employee?: Maybe<Employee>;
  employeeList: Array<Employee>;
  employeePagination?: Maybe<EmployeePagination>;
  order?: Maybe<Order>;
  orderConnection?: Maybe<OrderConnection>;
  orderPagination?: Maybe<OrderPagination>;
  product?: Maybe<Product>;
  productConnection?: Maybe<ProductConnection>;
  productList: Array<Product>;
  productPagination?: Maybe<ProductPagination>;
  region?: Maybe<Region>;
  regionList: Array<Region>;
  shipper?: Maybe<Shipper>;
  shipperList: Array<Shipper>;
  supplier?: Maybe<Supplier>;
  supplierConnection?: Maybe<SupplierConnection>;
};


export type ViewerCategoryArgs = {
  filter?: Maybe<FilterFindOneCategoryInput>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindOneCategoryInput>;
};


export type ViewerCategoryListArgs = {
  filter?: Maybe<FilterFindManyCategoryInput>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyCategoryInput>;
};


export type ViewerCustomerArgs = {
  filter?: Maybe<FilterFindOneCustomerInput>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindOneCustomerInput>;
};


export type ViewerCustomerConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  filter?: Maybe<FilterFindManyCustomerInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortConnectionCustomerEnum>;
};


export type ViewerCustomerPaginationArgs = {
  filter?: Maybe<FilterFindManyCustomerInput>;
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyCustomerInput>;
};


export type ViewerEmployeeArgs = {
  filter?: Maybe<FilterFindOneEmployeeInput>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindOneEmployeeInput>;
};


export type ViewerEmployeeListArgs = {
  filter?: Maybe<FilterFindManyEmployeeInput>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyEmployeeInput>;
};


export type ViewerEmployeePaginationArgs = {
  filter?: Maybe<FilterFindManyEmployeeInput>;
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyEmployeeInput>;
};


export type ViewerOrderArgs = {
  filter?: Maybe<FilterFindOneOrderInput>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindOneOrderInput>;
};


export type ViewerOrderConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  filter?: Maybe<FilterFindManyOrderInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortConnectionOrderEnum>;
};


export type ViewerOrderPaginationArgs = {
  filter?: Maybe<FilterFindManyOrderInput>;
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyOrderInput>;
};


export type ViewerProductArgs = {
  filter?: Maybe<FilterFindOneProductInput>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindOneProductInput>;
};


export type ViewerProductConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  filter?: Maybe<FilterFindManyProductInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortConnectionProductEnum>;
};


export type ViewerProductListArgs = {
  filter?: Maybe<FilterFindManyProductInput>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyProductInput>;
};


export type ViewerProductPaginationArgs = {
  filter?: Maybe<FilterFindManyProductInput>;
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyProductInput>;
};


export type ViewerRegionArgs = {
  filter?: Maybe<FilterFindOneRegionInput>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindOneRegionInput>;
};


export type ViewerRegionListArgs = {
  filter?: Maybe<FilterFindManyRegionInput>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyRegionInput>;
};


export type ViewerShipperArgs = {
  filter?: Maybe<FilterFindOneShipperInput>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindOneShipperInput>;
};


export type ViewerShipperListArgs = {
  filter?: Maybe<FilterFindManyShipperInput>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyShipperInput>;
};


export type ViewerSupplierArgs = {
  filter?: Maybe<FilterFindOneSupplierInput>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindOneSupplierInput>;
};


export type ViewerSupplierConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  filter?: Maybe<FilterFindManySupplierInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortConnectionSupplierEnum>;
};
