export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  /** 
 * The `ID` scalar type represents a unique MongoDB identifier in collection.
   * MongoDB by default use 12-byte ObjectId value
   * (https://docs.mongodb.com/manual/reference/bson-types/#objectid). But MongoDB
   * also may accepts string or integer as correct values for _id field.
 */
  MongoID: any,
  Date: any,
};

export type _IdOperatorsFilterFindManyCategoryInput = {
  gt?: Maybe<Scalars['MongoID']>,
  gte?: Maybe<Scalars['MongoID']>,
  lt?: Maybe<Scalars['MongoID']>,
  lte?: Maybe<Scalars['MongoID']>,
  ne?: Maybe<Scalars['MongoID']>,
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
};

export type _IdOperatorsFilterFindManyCustomerInput = {
  gt?: Maybe<Scalars['MongoID']>,
  gte?: Maybe<Scalars['MongoID']>,
  lt?: Maybe<Scalars['MongoID']>,
  lte?: Maybe<Scalars['MongoID']>,
  ne?: Maybe<Scalars['MongoID']>,
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
};

export type _IdOperatorsFilterFindManyEmployeeInput = {
  gt?: Maybe<Scalars['MongoID']>,
  gte?: Maybe<Scalars['MongoID']>,
  lt?: Maybe<Scalars['MongoID']>,
  lte?: Maybe<Scalars['MongoID']>,
  ne?: Maybe<Scalars['MongoID']>,
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
};

export type _IdOperatorsFilterFindManyOrderInput = {
  gt?: Maybe<Scalars['MongoID']>,
  gte?: Maybe<Scalars['MongoID']>,
  lt?: Maybe<Scalars['MongoID']>,
  lte?: Maybe<Scalars['MongoID']>,
  ne?: Maybe<Scalars['MongoID']>,
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
};

export type _IdOperatorsFilterFindManyProductInput = {
  gt?: Maybe<Scalars['MongoID']>,
  gte?: Maybe<Scalars['MongoID']>,
  lt?: Maybe<Scalars['MongoID']>,
  lte?: Maybe<Scalars['MongoID']>,
  ne?: Maybe<Scalars['MongoID']>,
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
};

export type _IdOperatorsFilterFindManyRegionInput = {
  gt?: Maybe<Scalars['MongoID']>,
  gte?: Maybe<Scalars['MongoID']>,
  lt?: Maybe<Scalars['MongoID']>,
  lte?: Maybe<Scalars['MongoID']>,
  ne?: Maybe<Scalars['MongoID']>,
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
};

export type _IdOperatorsFilterFindManyShipperInput = {
  gt?: Maybe<Scalars['MongoID']>,
  gte?: Maybe<Scalars['MongoID']>,
  lt?: Maybe<Scalars['MongoID']>,
  lte?: Maybe<Scalars['MongoID']>,
  ne?: Maybe<Scalars['MongoID']>,
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
};

export type _IdOperatorsFilterFindManySupplierInput = {
  gt?: Maybe<Scalars['MongoID']>,
  gte?: Maybe<Scalars['MongoID']>,
  lt?: Maybe<Scalars['MongoID']>,
  lte?: Maybe<Scalars['MongoID']>,
  ne?: Maybe<Scalars['MongoID']>,
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
};

export type _IdOperatorsFilterFindOneCategoryInput = {
  gt?: Maybe<Scalars['MongoID']>,
  gte?: Maybe<Scalars['MongoID']>,
  lt?: Maybe<Scalars['MongoID']>,
  lte?: Maybe<Scalars['MongoID']>,
  ne?: Maybe<Scalars['MongoID']>,
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
};

export type _IdOperatorsFilterFindOneCustomerInput = {
  gt?: Maybe<Scalars['MongoID']>,
  gte?: Maybe<Scalars['MongoID']>,
  lt?: Maybe<Scalars['MongoID']>,
  lte?: Maybe<Scalars['MongoID']>,
  ne?: Maybe<Scalars['MongoID']>,
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
};

export type _IdOperatorsFilterFindOneEmployeeInput = {
  gt?: Maybe<Scalars['MongoID']>,
  gte?: Maybe<Scalars['MongoID']>,
  lt?: Maybe<Scalars['MongoID']>,
  lte?: Maybe<Scalars['MongoID']>,
  ne?: Maybe<Scalars['MongoID']>,
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
};

export type _IdOperatorsFilterFindOneOrderInput = {
  gt?: Maybe<Scalars['MongoID']>,
  gte?: Maybe<Scalars['MongoID']>,
  lt?: Maybe<Scalars['MongoID']>,
  lte?: Maybe<Scalars['MongoID']>,
  ne?: Maybe<Scalars['MongoID']>,
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
};

export type _IdOperatorsFilterFindOneProductInput = {
  gt?: Maybe<Scalars['MongoID']>,
  gte?: Maybe<Scalars['MongoID']>,
  lt?: Maybe<Scalars['MongoID']>,
  lte?: Maybe<Scalars['MongoID']>,
  ne?: Maybe<Scalars['MongoID']>,
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
};

export type _IdOperatorsFilterFindOneRegionInput = {
  gt?: Maybe<Scalars['MongoID']>,
  gte?: Maybe<Scalars['MongoID']>,
  lt?: Maybe<Scalars['MongoID']>,
  lte?: Maybe<Scalars['MongoID']>,
  ne?: Maybe<Scalars['MongoID']>,
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
};

export type _IdOperatorsFilterFindOneShipperInput = {
  gt?: Maybe<Scalars['MongoID']>,
  gte?: Maybe<Scalars['MongoID']>,
  lt?: Maybe<Scalars['MongoID']>,
  lte?: Maybe<Scalars['MongoID']>,
  ne?: Maybe<Scalars['MongoID']>,
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
};

export type _IdOperatorsFilterFindOneSupplierInput = {
  gt?: Maybe<Scalars['MongoID']>,
  gte?: Maybe<Scalars['MongoID']>,
  lt?: Maybe<Scalars['MongoID']>,
  lte?: Maybe<Scalars['MongoID']>,
  ne?: Maybe<Scalars['MongoID']>,
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
};

export type _IdOperatorsFilterRemoveOneOrderInput = {
  gt?: Maybe<Scalars['MongoID']>,
  gte?: Maybe<Scalars['MongoID']>,
  lt?: Maybe<Scalars['MongoID']>,
  lte?: Maybe<Scalars['MongoID']>,
  ne?: Maybe<Scalars['MongoID']>,
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
};

export type _IdOperatorsFilterRemoveOneProductInput = {
  gt?: Maybe<Scalars['MongoID']>,
  gte?: Maybe<Scalars['MongoID']>,
  lt?: Maybe<Scalars['MongoID']>,
  lte?: Maybe<Scalars['MongoID']>,
  ne?: Maybe<Scalars['MongoID']>,
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
};

export type Category = {
   __typename?: 'Category',
  /** Category unique ID */
  categoryID?: Maybe<Scalars['Float']>,
  name?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  _id: Scalars['MongoID'],
  productConnection?: Maybe<ProductConnection>,
  productList?: Maybe<Array<Maybe<Product>>>,
};


export type CategoryProductConnectionArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  sort?: Maybe<SortConnectionProductEnum>
};


export type CategoryProductListArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  sort?: Maybe<SortFindManyProductInput>
};

export type CategoryIdOperatorsFilterFindManyCategoryInput = {
  /** Category unique ID */
  gt?: Maybe<Scalars['Float']>,
  /** Category unique ID */
  gte?: Maybe<Scalars['Float']>,
  /** Category unique ID */
  lt?: Maybe<Scalars['Float']>,
  /** Category unique ID */
  lte?: Maybe<Scalars['Float']>,
  /** Category unique ID */
  ne?: Maybe<Scalars['Float']>,
  /** Category unique ID */
  in?: Maybe<Array<Maybe<Scalars['Float']>>>,
  /** Category unique ID */
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>,
};

export type CategoryIdOperatorsFilterFindOneCategoryInput = {
  /** Category unique ID */
  gt?: Maybe<Scalars['Float']>,
  /** Category unique ID */
  gte?: Maybe<Scalars['Float']>,
  /** Category unique ID */
  lt?: Maybe<Scalars['Float']>,
  /** Category unique ID */
  lte?: Maybe<Scalars['Float']>,
  /** Category unique ID */
  ne?: Maybe<Scalars['Float']>,
  /** Category unique ID */
  in?: Maybe<Array<Maybe<Scalars['Float']>>>,
  /** Category unique ID */
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>,
};

export type CompanyNameOperatorsFilterFindManyCustomerInput = {
  gt?: Maybe<Scalars['String']>,
  gte?: Maybe<Scalars['String']>,
  lt?: Maybe<Scalars['String']>,
  lte?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type CompanyNameOperatorsFilterFindManySupplierInput = {
  gt?: Maybe<Scalars['String']>,
  gte?: Maybe<Scalars['String']>,
  lt?: Maybe<Scalars['String']>,
  lte?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type CompanyNameOperatorsFilterFindOneCustomerInput = {
  gt?: Maybe<Scalars['String']>,
  gte?: Maybe<Scalars['String']>,
  lt?: Maybe<Scalars['String']>,
  lte?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type CompanyNameOperatorsFilterFindOneSupplierInput = {
  gt?: Maybe<Scalars['String']>,
  gte?: Maybe<Scalars['String']>,
  lt?: Maybe<Scalars['String']>,
  lte?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type CreateOneOrderInput = {
  /** Order unique ID */
  orderID?: Maybe<Scalars['Float']>,
  customerID?: Maybe<Scalars['String']>,
  employeeID?: Maybe<Scalars['Float']>,
  orderDate?: Maybe<Scalars['Date']>,
  requiredDate?: Maybe<Scalars['Date']>,
  shippedDate?: Maybe<Scalars['Date']>,
  shipVia?: Maybe<Scalars['Float']>,
  freight?: Maybe<Scalars['Float']>,
  shipName?: Maybe<Scalars['String']>,
  shipAddress?: Maybe<CustomerAddressInput>,
  /** List of ordered products */
  details?: Maybe<Array<Maybe<OrderDetailsInput>>>,
};

export type CreateOneOrderPayload = {
   __typename?: 'CreateOneOrderPayload',
  /** Created document ID */
  recordId?: Maybe<Scalars['MongoID']>,
  /** Created document */
  record?: Maybe<Order>,
  query?: Maybe<Query>,
};

export type CreateOneProductInput = {
  /** Unique product id */
  productID?: Maybe<Scalars['Float']>,
  name?: Maybe<Scalars['String']>,
  supplierID?: Maybe<Scalars['Float']>,
  categoryID?: Maybe<Scalars['Float']>,
  quantityPerUnit?: Maybe<Scalars['String']>,
  unitPrice?: Maybe<Scalars['Float']>,
  unitsInStock?: Maybe<Scalars['Float']>,
  unitsOnOrder?: Maybe<Scalars['Float']>,
  reorderLevel?: Maybe<Scalars['Float']>,
  discontinued?: Maybe<Scalars['Boolean']>,
};

export type CreateOneProductPayload = {
   __typename?: 'CreateOneProductPayload',
  /** Created document ID */
  recordId?: Maybe<Scalars['MongoID']>,
  /** Created document */
  record?: Maybe<Product>,
  query?: Maybe<Query>,
};

export type Customer = {
   __typename?: 'Customer',
  /** Customer unique ID */
  customerID?: Maybe<Scalars['String']>,
  companyName?: Maybe<Scalars['String']>,
  contactName?: Maybe<Scalars['String']>,
  contactTitle?: Maybe<Scalars['String']>,
  address?: Maybe<CustomerAddress>,
  _id: Scalars['MongoID'],
  orderConnection?: Maybe<OrderConnection>,
  orderList?: Maybe<Array<Maybe<Order>>>,
};


export type CustomerOrderConnectionArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  sort?: Maybe<SortConnectionOrderEnum>
};


export type CustomerOrderListArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  sort?: Maybe<SortFindManyOrderInput>
};

export type CustomerAddress = {
   __typename?: 'CustomerAddress',
  street?: Maybe<Scalars['String']>,
  city?: Maybe<Scalars['String']>,
  region?: Maybe<Scalars['String']>,
  postalCode?: Maybe<Scalars['String']>,
  country?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
};

export type CustomerAddressInput = {
  street?: Maybe<Scalars['String']>,
  city?: Maybe<Scalars['String']>,
  region?: Maybe<Scalars['String']>,
  postalCode?: Maybe<Scalars['String']>,
  country?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
};

/** A connection to a list of items. */
export type CustomerConnection = {
   __typename?: 'CustomerConnection',
  /** Total object count. */
  count: Scalars['Int'],
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** Information to aid in pagination. */
  edges: Array<CustomerEdge>,
};

/** An edge in a connection. */
export type CustomerEdge = {
   __typename?: 'CustomerEdge',
  /** The item at the end of the edge */
  node: Customer,
  /** A cursor for use in pagination */
  cursor: Scalars['String'],
};

export type CustomerIdOperatorsFilterFindManyCustomerInput = {
  /** Customer unique ID */
  gt?: Maybe<Scalars['String']>,
  /** Customer unique ID */
  gte?: Maybe<Scalars['String']>,
  /** Customer unique ID */
  lt?: Maybe<Scalars['String']>,
  /** Customer unique ID */
  lte?: Maybe<Scalars['String']>,
  /** Customer unique ID */
  ne?: Maybe<Scalars['String']>,
  /** Customer unique ID */
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** Customer unique ID */
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type CustomerIdOperatorsFilterFindOneCustomerInput = {
  /** Customer unique ID */
  gt?: Maybe<Scalars['String']>,
  /** Customer unique ID */
  gte?: Maybe<Scalars['String']>,
  /** Customer unique ID */
  lt?: Maybe<Scalars['String']>,
  /** Customer unique ID */
  lte?: Maybe<Scalars['String']>,
  /** Customer unique ID */
  ne?: Maybe<Scalars['String']>,
  /** Customer unique ID */
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** Customer unique ID */
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

/** List of items with pagination. */
export type CustomerPagination = {
   __typename?: 'CustomerPagination',
  /** Total object count. */
  count?: Maybe<Scalars['Int']>,
  /** Array of objects. */
  items?: Maybe<Array<Maybe<Customer>>>,
  /** Information to aid in pagination. */
  pageInfo: PaginationInfo,
};


export type DetailsOperatorsFilterFindManyOrderInput = {
  /** List of ordered products */
  gt?: Maybe<OrderDetailsInput>,
  /** List of ordered products */
  gte?: Maybe<OrderDetailsInput>,
  /** List of ordered products */
  lt?: Maybe<OrderDetailsInput>,
  /** List of ordered products */
  lte?: Maybe<OrderDetailsInput>,
  /** List of ordered products */
  ne?: Maybe<OrderDetailsInput>,
  /** List of ordered products */
  in?: Maybe<Array<Maybe<OrderDetailsInput>>>,
  /** List of ordered products */
  nin?: Maybe<Array<Maybe<OrderDetailsInput>>>,
};

export type DetailsOperatorsFilterFindOneOrderInput = {
  /** List of ordered products */
  gt?: Maybe<OrderDetailsInput>,
  /** List of ordered products */
  gte?: Maybe<OrderDetailsInput>,
  /** List of ordered products */
  lt?: Maybe<OrderDetailsInput>,
  /** List of ordered products */
  lte?: Maybe<OrderDetailsInput>,
  /** List of ordered products */
  ne?: Maybe<OrderDetailsInput>,
  /** List of ordered products */
  in?: Maybe<Array<Maybe<OrderDetailsInput>>>,
  /** List of ordered products */
  nin?: Maybe<Array<Maybe<OrderDetailsInput>>>,
};

export type DetailsOperatorsFilterRemoveOneOrderInput = {
  /** List of ordered products */
  gt?: Maybe<OrderDetailsInput>,
  /** List of ordered products */
  gte?: Maybe<OrderDetailsInput>,
  /** List of ordered products */
  lt?: Maybe<OrderDetailsInput>,
  /** List of ordered products */
  lte?: Maybe<OrderDetailsInput>,
  /** List of ordered products */
  ne?: Maybe<OrderDetailsInput>,
  /** List of ordered products */
  in?: Maybe<Array<Maybe<OrderDetailsInput>>>,
  /** List of ordered products */
  nin?: Maybe<Array<Maybe<OrderDetailsInput>>>,
};

export type Employee = {
   __typename?: 'Employee',
  /** Category unique ID */
  employeeID?: Maybe<Scalars['Float']>,
  lastName?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  titleOfCourtesy?: Maybe<Scalars['String']>,
  birthDate?: Maybe<Scalars['Date']>,
  hireDate?: Maybe<Scalars['Date']>,
  address?: Maybe<CustomerAddress>,
  notes?: Maybe<Scalars['String']>,
  /** ID of chief */
  reportsTo?: Maybe<Scalars['Float']>,
  /** Attached territory ID from region collection */
  territoryIDs?: Maybe<Array<Maybe<Scalars['Float']>>>,
  _id: Scalars['MongoID'],
  chief?: Maybe<Employee>,
  subordinates?: Maybe<Array<Maybe<Employee>>>,
  orderConnection?: Maybe<OrderConnection>,
};


export type EmployeeSubordinatesArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  sort?: Maybe<SortFindManyEmployeeInput>
};


export type EmployeeOrderConnectionArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  sort?: Maybe<SortConnectionOrderEnum>
};

export type EmployeeIdOperatorsFilterFindManyEmployeeInput = {
  /** Category unique ID */
  gt?: Maybe<Scalars['Float']>,
  /** Category unique ID */
  gte?: Maybe<Scalars['Float']>,
  /** Category unique ID */
  lt?: Maybe<Scalars['Float']>,
  /** Category unique ID */
  lte?: Maybe<Scalars['Float']>,
  /** Category unique ID */
  ne?: Maybe<Scalars['Float']>,
  /** Category unique ID */
  in?: Maybe<Array<Maybe<Scalars['Float']>>>,
  /** Category unique ID */
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>,
};

export type EmployeeIdOperatorsFilterFindOneEmployeeInput = {
  /** Category unique ID */
  gt?: Maybe<Scalars['Float']>,
  /** Category unique ID */
  gte?: Maybe<Scalars['Float']>,
  /** Category unique ID */
  lt?: Maybe<Scalars['Float']>,
  /** Category unique ID */
  lte?: Maybe<Scalars['Float']>,
  /** Category unique ID */
  ne?: Maybe<Scalars['Float']>,
  /** Category unique ID */
  in?: Maybe<Array<Maybe<Scalars['Float']>>>,
  /** Category unique ID */
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>,
};

/** List of items with pagination. */
export type EmployeePagination = {
   __typename?: 'EmployeePagination',
  /** Total object count. */
  count?: Maybe<Scalars['Int']>,
  /** Array of objects. */
  items?: Maybe<Array<Maybe<Employee>>>,
  /** Information to aid in pagination. */
  pageInfo: PaginationInfo,
};

export type FilterFindManyCategoryInput = {
  /** Category unique ID */
  categoryID?: Maybe<Scalars['Float']>,
  name?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  _id?: Maybe<Scalars['MongoID']>,
  _ids?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<OperatorsFilterFindManyCategoryInput>,
  OR?: Maybe<Array<FilterFindManyCategoryInput>>,
  AND?: Maybe<Array<FilterFindManyCategoryInput>>,
};

export type FilterFindManyCustomerInput = {
  /** Customer unique ID */
  customerID?: Maybe<Scalars['String']>,
  companyName?: Maybe<Scalars['String']>,
  contactName?: Maybe<Scalars['String']>,
  contactTitle?: Maybe<Scalars['String']>,
  address?: Maybe<CustomerAddressInput>,
  _id?: Maybe<Scalars['MongoID']>,
  _ids?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<OperatorsFilterFindManyCustomerInput>,
  OR?: Maybe<Array<FilterFindManyCustomerInput>>,
  AND?: Maybe<Array<FilterFindManyCustomerInput>>,
};

export type FilterFindManyEmployeeInput = {
  /** Category unique ID */
  employeeID?: Maybe<Scalars['Float']>,
  lastName?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  titleOfCourtesy?: Maybe<Scalars['String']>,
  birthDate?: Maybe<Scalars['Date']>,
  hireDate?: Maybe<Scalars['Date']>,
  address?: Maybe<CustomerAddressInput>,
  notes?: Maybe<Scalars['String']>,
  /** ID of chief */
  reportsTo?: Maybe<Scalars['Float']>,
  /** Attached territory ID from region collection */
  territoryIDs?: Maybe<Array<Maybe<Scalars['Float']>>>,
  _id?: Maybe<Scalars['MongoID']>,
  _ids?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<OperatorsFilterFindManyEmployeeInput>,
  OR?: Maybe<Array<FilterFindManyEmployeeInput>>,
  AND?: Maybe<Array<FilterFindManyEmployeeInput>>,
  /** Fulltext search with mongodb stemming and weights */
  fullTextSearch?: Maybe<Scalars['String']>,
};

export type FilterFindManyOrderInput = {
  /** Order unique ID */
  orderID?: Maybe<Scalars['Float']>,
  customerID?: Maybe<Scalars['String']>,
  employeeID?: Maybe<Scalars['Float']>,
  orderDate?: Maybe<Scalars['Date']>,
  requiredDate?: Maybe<Scalars['Date']>,
  shippedDate?: Maybe<Scalars['Date']>,
  shipVia?: Maybe<Scalars['Float']>,
  freight?: Maybe<Scalars['Float']>,
  shipName?: Maybe<Scalars['String']>,
  shipAddress?: Maybe<CustomerAddressInput>,
  /** List of ordered products */
  details?: Maybe<Array<Maybe<OrderDetailsInput>>>,
  _id?: Maybe<Scalars['MongoID']>,
  _ids?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<OperatorsFilterFindManyOrderInput>,
  OR?: Maybe<Array<FilterFindManyOrderInput>>,
  AND?: Maybe<Array<FilterFindManyOrderInput>>,
};

export type FilterFindManyProductInput = {
  /** Unique product id */
  productID?: Maybe<Scalars['Float']>,
  name?: Maybe<Scalars['String']>,
  supplierID?: Maybe<Scalars['Float']>,
  categoryID?: Maybe<Scalars['Float']>,
  quantityPerUnit?: Maybe<Scalars['String']>,
  unitPrice?: Maybe<Scalars['Float']>,
  unitsInStock?: Maybe<Scalars['Float']>,
  unitsOnOrder?: Maybe<Scalars['Float']>,
  reorderLevel?: Maybe<Scalars['Float']>,
  discontinued?: Maybe<Scalars['Boolean']>,
  _id?: Maybe<Scalars['MongoID']>,
  _ids?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<OperatorsFilterFindManyProductInput>,
  OR?: Maybe<Array<FilterFindManyProductInput>>,
  AND?: Maybe<Array<FilterFindManyProductInput>>,
  /** Search by regExp */
  nameRegexp?: Maybe<Scalars['String']>,
};

export type FilterFindManyRegionInput = {
  /** Region unique ID */
  regionID?: Maybe<Scalars['Float']>,
  name?: Maybe<Scalars['String']>,
  territories?: Maybe<Array<Maybe<RegionTerritoriesInput>>>,
  _id?: Maybe<Scalars['MongoID']>,
  _ids?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<OperatorsFilterFindManyRegionInput>,
  OR?: Maybe<Array<FilterFindManyRegionInput>>,
  AND?: Maybe<Array<FilterFindManyRegionInput>>,
};

export type FilterFindManyShipperInput = {
  /** Shipper unique ID */
  shipperID?: Maybe<Scalars['Float']>,
  companyName?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  _id?: Maybe<Scalars['MongoID']>,
  _ids?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<OperatorsFilterFindManyShipperInput>,
  OR?: Maybe<Array<FilterFindManyShipperInput>>,
  AND?: Maybe<Array<FilterFindManyShipperInput>>,
};

export type FilterFindManySupplierInput = {
  /** Supplier unique ID */
  supplierID?: Maybe<Scalars['Float']>,
  companyName?: Maybe<Scalars['String']>,
  contactName?: Maybe<Scalars['String']>,
  contactTitle?: Maybe<Scalars['String']>,
  address?: Maybe<CustomerAddressInput>,
  _id?: Maybe<Scalars['MongoID']>,
  _ids?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<OperatorsFilterFindManySupplierInput>,
  OR?: Maybe<Array<FilterFindManySupplierInput>>,
  AND?: Maybe<Array<FilterFindManySupplierInput>>,
};

export type FilterFindOneCategoryInput = {
  /** Category unique ID */
  categoryID?: Maybe<Scalars['Float']>,
  name?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  _id?: Maybe<Scalars['MongoID']>,
  _ids?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<OperatorsFilterFindOneCategoryInput>,
  OR?: Maybe<Array<FilterFindOneCategoryInput>>,
  AND?: Maybe<Array<FilterFindOneCategoryInput>>,
};

export type FilterFindOneCustomerInput = {
  /** Customer unique ID */
  customerID?: Maybe<Scalars['String']>,
  companyName?: Maybe<Scalars['String']>,
  contactName?: Maybe<Scalars['String']>,
  contactTitle?: Maybe<Scalars['String']>,
  address?: Maybe<CustomerAddressInput>,
  _id?: Maybe<Scalars['MongoID']>,
  _ids?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<OperatorsFilterFindOneCustomerInput>,
  OR?: Maybe<Array<FilterFindOneCustomerInput>>,
  AND?: Maybe<Array<FilterFindOneCustomerInput>>,
};

export type FilterFindOneEmployeeInput = {
  /** Category unique ID */
  employeeID?: Maybe<Scalars['Float']>,
  lastName?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  titleOfCourtesy?: Maybe<Scalars['String']>,
  birthDate?: Maybe<Scalars['Date']>,
  hireDate?: Maybe<Scalars['Date']>,
  address?: Maybe<CustomerAddressInput>,
  notes?: Maybe<Scalars['String']>,
  /** ID of chief */
  reportsTo?: Maybe<Scalars['Float']>,
  /** Attached territory ID from region collection */
  territoryIDs?: Maybe<Array<Maybe<Scalars['Float']>>>,
  _id?: Maybe<Scalars['MongoID']>,
  _ids?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<OperatorsFilterFindOneEmployeeInput>,
  OR?: Maybe<Array<FilterFindOneEmployeeInput>>,
  AND?: Maybe<Array<FilterFindOneEmployeeInput>>,
};

export type FilterFindOneOrderInput = {
  /** Order unique ID */
  orderID?: Maybe<Scalars['Float']>,
  customerID?: Maybe<Scalars['String']>,
  employeeID?: Maybe<Scalars['Float']>,
  orderDate?: Maybe<Scalars['Date']>,
  requiredDate?: Maybe<Scalars['Date']>,
  shippedDate?: Maybe<Scalars['Date']>,
  shipVia?: Maybe<Scalars['Float']>,
  freight?: Maybe<Scalars['Float']>,
  shipName?: Maybe<Scalars['String']>,
  shipAddress?: Maybe<CustomerAddressInput>,
  /** List of ordered products */
  details?: Maybe<Array<Maybe<OrderDetailsInput>>>,
  _id?: Maybe<Scalars['MongoID']>,
  _ids?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<OperatorsFilterFindOneOrderInput>,
  OR?: Maybe<Array<FilterFindOneOrderInput>>,
  AND?: Maybe<Array<FilterFindOneOrderInput>>,
};

export type FilterFindOneProductInput = {
  /** Unique product id */
  productID?: Maybe<Scalars['Float']>,
  name?: Maybe<Scalars['String']>,
  supplierID?: Maybe<Scalars['Float']>,
  categoryID?: Maybe<Scalars['Float']>,
  quantityPerUnit?: Maybe<Scalars['String']>,
  unitPrice?: Maybe<Scalars['Float']>,
  unitsInStock?: Maybe<Scalars['Float']>,
  unitsOnOrder?: Maybe<Scalars['Float']>,
  reorderLevel?: Maybe<Scalars['Float']>,
  discontinued?: Maybe<Scalars['Boolean']>,
  _id?: Maybe<Scalars['MongoID']>,
  _ids?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<OperatorsFilterFindOneProductInput>,
  OR?: Maybe<Array<FilterFindOneProductInput>>,
  AND?: Maybe<Array<FilterFindOneProductInput>>,
};

export type FilterFindOneRegionInput = {
  /** Region unique ID */
  regionID?: Maybe<Scalars['Float']>,
  name?: Maybe<Scalars['String']>,
  territories?: Maybe<Array<Maybe<RegionTerritoriesInput>>>,
  _id?: Maybe<Scalars['MongoID']>,
  _ids?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<OperatorsFilterFindOneRegionInput>,
  OR?: Maybe<Array<FilterFindOneRegionInput>>,
  AND?: Maybe<Array<FilterFindOneRegionInput>>,
};

export type FilterFindOneShipperInput = {
  /** Shipper unique ID */
  shipperID?: Maybe<Scalars['Float']>,
  companyName?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  _id?: Maybe<Scalars['MongoID']>,
  _ids?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<OperatorsFilterFindOneShipperInput>,
  OR?: Maybe<Array<FilterFindOneShipperInput>>,
  AND?: Maybe<Array<FilterFindOneShipperInput>>,
};

export type FilterFindOneSupplierInput = {
  /** Supplier unique ID */
  supplierID?: Maybe<Scalars['Float']>,
  companyName?: Maybe<Scalars['String']>,
  contactName?: Maybe<Scalars['String']>,
  contactTitle?: Maybe<Scalars['String']>,
  address?: Maybe<CustomerAddressInput>,
  _id?: Maybe<Scalars['MongoID']>,
  _ids?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<OperatorsFilterFindOneSupplierInput>,
  OR?: Maybe<Array<FilterFindOneSupplierInput>>,
  AND?: Maybe<Array<FilterFindOneSupplierInput>>,
};

export type FilterRemoveOneOrderInput = {
  /** Order unique ID */
  orderID?: Maybe<Scalars['Float']>,
  customerID?: Maybe<Scalars['String']>,
  employeeID?: Maybe<Scalars['Float']>,
  orderDate?: Maybe<Scalars['Date']>,
  requiredDate?: Maybe<Scalars['Date']>,
  shippedDate?: Maybe<Scalars['Date']>,
  shipVia?: Maybe<Scalars['Float']>,
  freight?: Maybe<Scalars['Float']>,
  shipName?: Maybe<Scalars['String']>,
  shipAddress?: Maybe<CustomerAddressInput>,
  /** List of ordered products */
  details?: Maybe<Array<Maybe<OrderDetailsInput>>>,
  _id?: Maybe<Scalars['MongoID']>,
  _ids?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<OperatorsFilterRemoveOneOrderInput>,
  OR?: Maybe<Array<FilterRemoveOneOrderInput>>,
  AND?: Maybe<Array<FilterRemoveOneOrderInput>>,
};

export type FilterRemoveOneProductInput = {
  /** Unique product id */
  productID?: Maybe<Scalars['Float']>,
  name?: Maybe<Scalars['String']>,
  supplierID?: Maybe<Scalars['Float']>,
  categoryID?: Maybe<Scalars['Float']>,
  quantityPerUnit?: Maybe<Scalars['String']>,
  unitPrice?: Maybe<Scalars['Float']>,
  unitsInStock?: Maybe<Scalars['Float']>,
  unitsOnOrder?: Maybe<Scalars['Float']>,
  reorderLevel?: Maybe<Scalars['Float']>,
  discontinued?: Maybe<Scalars['Boolean']>,
  _id?: Maybe<Scalars['MongoID']>,
  _ids?: Maybe<Array<Maybe<Scalars['MongoID']>>>,
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<OperatorsFilterRemoveOneProductInput>,
  OR?: Maybe<Array<FilterRemoveOneProductInput>>,
  AND?: Maybe<Array<FilterRemoveOneProductInput>>,
};

export type LastNameOperatorsFilterFindManyEmployeeInput = {
  gt?: Maybe<Scalars['String']>,
  gte?: Maybe<Scalars['String']>,
  lt?: Maybe<Scalars['String']>,
  lte?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type LastNameOperatorsFilterFindOneEmployeeInput = {
  gt?: Maybe<Scalars['String']>,
  gte?: Maybe<Scalars['String']>,
  lt?: Maybe<Scalars['String']>,
  lte?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};


export type Mutation = {
   __typename?: 'Mutation',
  /** Create one document with mongoose defaults, setters, hooks and validation */
  createProduct?: Maybe<CreateOneProductPayload>,
  /** 
 * Update one document: 1) Retrieve one document by findById. 2) Apply updates to
   * mongoose document. 3) Mongoose applies defaults, setters, hooks and
   * validation. 4) And save it.
 */
  updateProduct?: Maybe<UpdateByIdProductPayload>,
  /** Remove one document: 1) Remove with hooks via findOneAndRemove. 2) Return removed document. */
  removeProduct?: Maybe<RemoveOneProductPayload>,
  /** Create one document with mongoose defaults, setters, hooks and validation */
  createOrder?: Maybe<CreateOneOrderPayload>,
  /** 
 * Update one document: 1) Retrieve one document by findById. 2) Apply updates to
   * mongoose document. 3) Mongoose applies defaults, setters, hooks and
   * validation. 4) And save it.
 */
  updateOrder?: Maybe<UpdateByIdOrderPayload>,
  /** Remove one document: 1) Remove with hooks via findOneAndRemove. 2) Return removed document. */
  removeOrder?: Maybe<RemoveOneOrderPayload>,
  /** 
 * Update one document: 1) Retrieve one document by findById. 2) Apply updates to
   * mongoose document. 3) Mongoose applies defaults, setters, hooks and
   * validation. 4) And save it.
 */
  updateEmployee?: Maybe<UpdateByIdEmployeePayload>,
  /** Remove all data and seed DB from scratch. Anyway data automatically reloaded every 30 minutes. */
  resetData?: Maybe<Scalars['String']>,
};


export type MutationCreateProductArgs = {
  record: CreateOneProductInput
};


export type MutationUpdateProductArgs = {
  record: UpdateByIdProductInput
};


export type MutationRemoveProductArgs = {
  filter?: Maybe<FilterRemoveOneProductInput>,
  sort?: Maybe<SortRemoveOneProductInput>
};


export type MutationCreateOrderArgs = {
  record: CreateOneOrderInput
};


export type MutationUpdateOrderArgs = {
  record: UpdateByIdOrderInput
};


export type MutationRemoveOrderArgs = {
  filter?: Maybe<FilterRemoveOneOrderInput>,
  sort?: Maybe<SortRemoveOneOrderInput>
};


export type MutationUpdateEmployeeArgs = {
  record: UpdateByIdEmployeeInput
};

export type NameOperatorsFilterFindManyCategoryInput = {
  gt?: Maybe<Scalars['String']>,
  gte?: Maybe<Scalars['String']>,
  lt?: Maybe<Scalars['String']>,
  lte?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type NameOperatorsFilterFindManyProductInput = {
  gt?: Maybe<Scalars['String']>,
  gte?: Maybe<Scalars['String']>,
  lt?: Maybe<Scalars['String']>,
  lte?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type NameOperatorsFilterFindOneCategoryInput = {
  gt?: Maybe<Scalars['String']>,
  gte?: Maybe<Scalars['String']>,
  lt?: Maybe<Scalars['String']>,
  lte?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type NameOperatorsFilterFindOneProductInput = {
  gt?: Maybe<Scalars['String']>,
  gte?: Maybe<Scalars['String']>,
  lt?: Maybe<Scalars['String']>,
  lte?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type NameOperatorsFilterRemoveOneProductInput = {
  gt?: Maybe<Scalars['String']>,
  gte?: Maybe<Scalars['String']>,
  lt?: Maybe<Scalars['String']>,
  lte?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
};

/** For performance reason this type contains only *indexed* fields. */
export type OperatorsFilterFindManyCategoryInput = {
  categoryID?: Maybe<CategoryIdOperatorsFilterFindManyCategoryInput>,
  name?: Maybe<NameOperatorsFilterFindManyCategoryInput>,
  _id?: Maybe<_IdOperatorsFilterFindManyCategoryInput>,
};

/** For performance reason this type contains only *indexed* fields. */
export type OperatorsFilterFindManyCustomerInput = {
  customerID?: Maybe<CustomerIdOperatorsFilterFindManyCustomerInput>,
  companyName?: Maybe<CompanyNameOperatorsFilterFindManyCustomerInput>,
  _id?: Maybe<_IdOperatorsFilterFindManyCustomerInput>,
};

/** For performance reason this type contains only *indexed* fields. */
export type OperatorsFilterFindManyEmployeeInput = {
  employeeID?: Maybe<EmployeeIdOperatorsFilterFindManyEmployeeInput>,
  lastName?: Maybe<LastNameOperatorsFilterFindManyEmployeeInput>,
  territoryIDs?: Maybe<TerritoryIDsOperatorsFilterFindManyEmployeeInput>,
  _id?: Maybe<_IdOperatorsFilterFindManyEmployeeInput>,
};

/** For performance reason this type contains only *indexed* fields. */
export type OperatorsFilterFindManyOrderInput = {
  orderID?: Maybe<OrderIdOperatorsFilterFindManyOrderInput>,
  details?: Maybe<DetailsOperatorsFilterFindManyOrderInput>,
  _id?: Maybe<_IdOperatorsFilterFindManyOrderInput>,
};

/** For performance reason this type contains only *indexed* fields. */
export type OperatorsFilterFindManyProductInput = {
  productID?: Maybe<ProductIdOperatorsFilterFindManyProductInput>,
  name?: Maybe<NameOperatorsFilterFindManyProductInput>,
  unitPrice?: Maybe<UnitPriceOperatorsFilterFindManyProductInput>,
  _id?: Maybe<_IdOperatorsFilterFindManyProductInput>,
};

/** For performance reason this type contains only *indexed* fields. */
export type OperatorsFilterFindManyRegionInput = {
  regionID?: Maybe<RegionIdOperatorsFilterFindManyRegionInput>,
  _id?: Maybe<_IdOperatorsFilterFindManyRegionInput>,
};

/** For performance reason this type contains only *indexed* fields. */
export type OperatorsFilterFindManyShipperInput = {
  shipperID?: Maybe<ShipperIdOperatorsFilterFindManyShipperInput>,
  _id?: Maybe<_IdOperatorsFilterFindManyShipperInput>,
};

/** For performance reason this type contains only *indexed* fields. */
export type OperatorsFilterFindManySupplierInput = {
  supplierID?: Maybe<SupplierIdOperatorsFilterFindManySupplierInput>,
  companyName?: Maybe<CompanyNameOperatorsFilterFindManySupplierInput>,
  _id?: Maybe<_IdOperatorsFilterFindManySupplierInput>,
};

/** For performance reason this type contains only *indexed* fields. */
export type OperatorsFilterFindOneCategoryInput = {
  categoryID?: Maybe<CategoryIdOperatorsFilterFindOneCategoryInput>,
  name?: Maybe<NameOperatorsFilterFindOneCategoryInput>,
  _id?: Maybe<_IdOperatorsFilterFindOneCategoryInput>,
};

/** For performance reason this type contains only *indexed* fields. */
export type OperatorsFilterFindOneCustomerInput = {
  customerID?: Maybe<CustomerIdOperatorsFilterFindOneCustomerInput>,
  companyName?: Maybe<CompanyNameOperatorsFilterFindOneCustomerInput>,
  _id?: Maybe<_IdOperatorsFilterFindOneCustomerInput>,
};

/** For performance reason this type contains only *indexed* fields. */
export type OperatorsFilterFindOneEmployeeInput = {
  employeeID?: Maybe<EmployeeIdOperatorsFilterFindOneEmployeeInput>,
  lastName?: Maybe<LastNameOperatorsFilterFindOneEmployeeInput>,
  territoryIDs?: Maybe<TerritoryIDsOperatorsFilterFindOneEmployeeInput>,
  _id?: Maybe<_IdOperatorsFilterFindOneEmployeeInput>,
};

/** For performance reason this type contains only *indexed* fields. */
export type OperatorsFilterFindOneOrderInput = {
  orderID?: Maybe<OrderIdOperatorsFilterFindOneOrderInput>,
  details?: Maybe<DetailsOperatorsFilterFindOneOrderInput>,
  _id?: Maybe<_IdOperatorsFilterFindOneOrderInput>,
};

/** For performance reason this type contains only *indexed* fields. */
export type OperatorsFilterFindOneProductInput = {
  productID?: Maybe<ProductIdOperatorsFilterFindOneProductInput>,
  name?: Maybe<NameOperatorsFilterFindOneProductInput>,
  unitPrice?: Maybe<UnitPriceOperatorsFilterFindOneProductInput>,
  _id?: Maybe<_IdOperatorsFilterFindOneProductInput>,
};

/** For performance reason this type contains only *indexed* fields. */
export type OperatorsFilterFindOneRegionInput = {
  regionID?: Maybe<RegionIdOperatorsFilterFindOneRegionInput>,
  _id?: Maybe<_IdOperatorsFilterFindOneRegionInput>,
};

/** For performance reason this type contains only *indexed* fields. */
export type OperatorsFilterFindOneShipperInput = {
  shipperID?: Maybe<ShipperIdOperatorsFilterFindOneShipperInput>,
  _id?: Maybe<_IdOperatorsFilterFindOneShipperInput>,
};

/** For performance reason this type contains only *indexed* fields. */
export type OperatorsFilterFindOneSupplierInput = {
  supplierID?: Maybe<SupplierIdOperatorsFilterFindOneSupplierInput>,
  companyName?: Maybe<CompanyNameOperatorsFilterFindOneSupplierInput>,
  _id?: Maybe<_IdOperatorsFilterFindOneSupplierInput>,
};

/** For performance reason this type contains only *indexed* fields. */
export type OperatorsFilterRemoveOneOrderInput = {
  orderID?: Maybe<OrderIdOperatorsFilterRemoveOneOrderInput>,
  details?: Maybe<DetailsOperatorsFilterRemoveOneOrderInput>,
  _id?: Maybe<_IdOperatorsFilterRemoveOneOrderInput>,
};

/** For performance reason this type contains only *indexed* fields. */
export type OperatorsFilterRemoveOneProductInput = {
  productID?: Maybe<ProductIdOperatorsFilterRemoveOneProductInput>,
  name?: Maybe<NameOperatorsFilterRemoveOneProductInput>,
  unitPrice?: Maybe<UnitPriceOperatorsFilterRemoveOneProductInput>,
  _id?: Maybe<_IdOperatorsFilterRemoveOneProductInput>,
};

export type Order = {
   __typename?: 'Order',
  /** Order unique ID */
  orderID?: Maybe<Scalars['Float']>,
  customerID?: Maybe<Scalars['String']>,
  employeeID?: Maybe<Scalars['Float']>,
  orderDate?: Maybe<Scalars['Date']>,
  requiredDate?: Maybe<Scalars['Date']>,
  shippedDate?: Maybe<Scalars['Date']>,
  shipVia?: Maybe<Scalars['Float']>,
  freight?: Maybe<Scalars['Float']>,
  shipName?: Maybe<Scalars['String']>,
  shipAddress?: Maybe<CustomerAddress>,
  /** List of ordered products */
  details?: Maybe<Array<Maybe<OrderDetails>>>,
  _id: Scalars['MongoID'],
  customer?: Maybe<Customer>,
  employee?: Maybe<Employee>,
  shipper?: Maybe<Shipper>,
};

/** A connection to a list of items. */
export type OrderConnection = {
   __typename?: 'OrderConnection',
  /** Total object count. */
  count: Scalars['Int'],
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** Information to aid in pagination. */
  edges: Array<OrderEdge>,
};

export type OrderDetails = {
   __typename?: 'OrderDetails',
  productID?: Maybe<Scalars['Float']>,
  unitPrice?: Maybe<Scalars['Float']>,
  quantity?: Maybe<Scalars['Float']>,
  discount?: Maybe<Scalars['Float']>,
  product?: Maybe<Product>,
};

export type OrderDetailsInput = {
  productID?: Maybe<Scalars['Float']>,
  unitPrice?: Maybe<Scalars['Float']>,
  quantity?: Maybe<Scalars['Float']>,
  discount?: Maybe<Scalars['Float']>,
};

/** An edge in a connection. */
export type OrderEdge = {
   __typename?: 'OrderEdge',
  /** The item at the end of the edge */
  node: Order,
  /** A cursor for use in pagination */
  cursor: Scalars['String'],
};

export type OrderIdOperatorsFilterFindManyOrderInput = {
  /** Order unique ID */
  gt?: Maybe<Scalars['Float']>,
  /** Order unique ID */
  gte?: Maybe<Scalars['Float']>,
  /** Order unique ID */
  lt?: Maybe<Scalars['Float']>,
  /** Order unique ID */
  lte?: Maybe<Scalars['Float']>,
  /** Order unique ID */
  ne?: Maybe<Scalars['Float']>,
  /** Order unique ID */
  in?: Maybe<Array<Maybe<Scalars['Float']>>>,
  /** Order unique ID */
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>,
};

export type OrderIdOperatorsFilterFindOneOrderInput = {
  /** Order unique ID */
  gt?: Maybe<Scalars['Float']>,
  /** Order unique ID */
  gte?: Maybe<Scalars['Float']>,
  /** Order unique ID */
  lt?: Maybe<Scalars['Float']>,
  /** Order unique ID */
  lte?: Maybe<Scalars['Float']>,
  /** Order unique ID */
  ne?: Maybe<Scalars['Float']>,
  /** Order unique ID */
  in?: Maybe<Array<Maybe<Scalars['Float']>>>,
  /** Order unique ID */
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>,
};

export type OrderIdOperatorsFilterRemoveOneOrderInput = {
  /** Order unique ID */
  gt?: Maybe<Scalars['Float']>,
  /** Order unique ID */
  gte?: Maybe<Scalars['Float']>,
  /** Order unique ID */
  lt?: Maybe<Scalars['Float']>,
  /** Order unique ID */
  lte?: Maybe<Scalars['Float']>,
  /** Order unique ID */
  ne?: Maybe<Scalars['Float']>,
  /** Order unique ID */
  in?: Maybe<Array<Maybe<Scalars['Float']>>>,
  /** Order unique ID */
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>,
};

/** List of items with pagination. */
export type OrderPagination = {
   __typename?: 'OrderPagination',
  /** Total object count. */
  count?: Maybe<Scalars['Int']>,
  /** Array of objects. */
  items?: Maybe<Array<Maybe<Order>>>,
  /** Information to aid in pagination. */
  pageInfo: PaginationInfo,
};

/** Information about pagination in a connection. */
export type PageInfo = {
   __typename?: 'PageInfo',
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'],
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'],
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>,
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>,
};

export type PaginationInfo = {
   __typename?: 'PaginationInfo',
  currentPage: Scalars['Int'],
  perPage: Scalars['Int'],
  pageCount?: Maybe<Scalars['Int']>,
  itemCount?: Maybe<Scalars['Int']>,
  hasNextPage?: Maybe<Scalars['Boolean']>,
  hasPreviousPage?: Maybe<Scalars['Boolean']>,
};

export type Product = {
   __typename?: 'Product',
  /** Unique product id */
  productID?: Maybe<Scalars['Float']>,
  name?: Maybe<Scalars['String']>,
  supplierID?: Maybe<Scalars['Float']>,
  categoryID?: Maybe<Scalars['Float']>,
  quantityPerUnit?: Maybe<Scalars['String']>,
  unitPrice?: Maybe<Scalars['Float']>,
  unitsInStock?: Maybe<Scalars['Float']>,
  unitsOnOrder?: Maybe<Scalars['Float']>,
  reorderLevel?: Maybe<Scalars['Float']>,
  discontinued?: Maybe<Scalars['Boolean']>,
  _id: Scalars['MongoID'],
  orderConnection?: Maybe<OrderConnection>,
  orderList?: Maybe<Array<Maybe<Order>>>,
  supplier?: Maybe<Supplier>,
  category?: Maybe<Category>,
};


export type ProductOrderConnectionArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  sort?: Maybe<SortConnectionOrderEnum>
};


export type ProductOrderListArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  sort?: Maybe<SortFindManyOrderInput>
};

/** A connection to a list of items. */
export type ProductConnection = {
   __typename?: 'ProductConnection',
  /** Total object count. */
  count: Scalars['Int'],
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** Information to aid in pagination. */
  edges: Array<ProductEdge>,
};

/** An edge in a connection. */
export type ProductEdge = {
   __typename?: 'ProductEdge',
  /** The item at the end of the edge */
  node: Product,
  /** A cursor for use in pagination */
  cursor: Scalars['String'],
};

export type ProductIdOperatorsFilterFindManyProductInput = {
  /** Unique product id */
  gt?: Maybe<Scalars['Float']>,
  /** Unique product id */
  gte?: Maybe<Scalars['Float']>,
  /** Unique product id */
  lt?: Maybe<Scalars['Float']>,
  /** Unique product id */
  lte?: Maybe<Scalars['Float']>,
  /** Unique product id */
  ne?: Maybe<Scalars['Float']>,
  /** Unique product id */
  in?: Maybe<Array<Maybe<Scalars['Float']>>>,
  /** Unique product id */
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>,
};

export type ProductIdOperatorsFilterFindOneProductInput = {
  /** Unique product id */
  gt?: Maybe<Scalars['Float']>,
  /** Unique product id */
  gte?: Maybe<Scalars['Float']>,
  /** Unique product id */
  lt?: Maybe<Scalars['Float']>,
  /** Unique product id */
  lte?: Maybe<Scalars['Float']>,
  /** Unique product id */
  ne?: Maybe<Scalars['Float']>,
  /** Unique product id */
  in?: Maybe<Array<Maybe<Scalars['Float']>>>,
  /** Unique product id */
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>,
};

export type ProductIdOperatorsFilterRemoveOneProductInput = {
  /** Unique product id */
  gt?: Maybe<Scalars['Float']>,
  /** Unique product id */
  gte?: Maybe<Scalars['Float']>,
  /** Unique product id */
  lt?: Maybe<Scalars['Float']>,
  /** Unique product id */
  lte?: Maybe<Scalars['Float']>,
  /** Unique product id */
  ne?: Maybe<Scalars['Float']>,
  /** Unique product id */
  in?: Maybe<Array<Maybe<Scalars['Float']>>>,
  /** Unique product id */
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>,
};

/** List of items with pagination. */
export type ProductPagination = {
   __typename?: 'ProductPagination',
  /** Total object count. */
  count?: Maybe<Scalars['Int']>,
  /** Array of objects. */
  items?: Maybe<Array<Maybe<Product>>>,
  /** Information to aid in pagination. */
  pageInfo: PaginationInfo,
};

export type Query = {
   __typename?: 'Query',
  /** Data under client context */
  viewer?: Maybe<Viewer>,
};

export type Region = {
   __typename?: 'Region',
  /** Region unique ID */
  regionID?: Maybe<Scalars['Float']>,
  name?: Maybe<Scalars['String']>,
  territories?: Maybe<Array<Maybe<RegionTerritories>>>,
  _id: Scalars['MongoID'],
  employees?: Maybe<Array<Maybe<Employee>>>,
};


export type RegionEmployeesArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  sort?: Maybe<SortFindManyEmployeeInput>
};

export type RegionIdOperatorsFilterFindManyRegionInput = {
  /** Region unique ID */
  gt?: Maybe<Scalars['Float']>,
  /** Region unique ID */
  gte?: Maybe<Scalars['Float']>,
  /** Region unique ID */
  lt?: Maybe<Scalars['Float']>,
  /** Region unique ID */
  lte?: Maybe<Scalars['Float']>,
  /** Region unique ID */
  ne?: Maybe<Scalars['Float']>,
  /** Region unique ID */
  in?: Maybe<Array<Maybe<Scalars['Float']>>>,
  /** Region unique ID */
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>,
};

export type RegionIdOperatorsFilterFindOneRegionInput = {
  /** Region unique ID */
  gt?: Maybe<Scalars['Float']>,
  /** Region unique ID */
  gte?: Maybe<Scalars['Float']>,
  /** Region unique ID */
  lt?: Maybe<Scalars['Float']>,
  /** Region unique ID */
  lte?: Maybe<Scalars['Float']>,
  /** Region unique ID */
  ne?: Maybe<Scalars['Float']>,
  /** Region unique ID */
  in?: Maybe<Array<Maybe<Scalars['Float']>>>,
  /** Region unique ID */
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>,
};

export type RegionTerritories = {
   __typename?: 'RegionTerritories',
  territoryID?: Maybe<Scalars['Float']>,
  name?: Maybe<Scalars['String']>,
};

export type RegionTerritoriesInput = {
  territoryID?: Maybe<Scalars['Float']>,
  name?: Maybe<Scalars['String']>,
};

export type RemoveOneOrderPayload = {
   __typename?: 'RemoveOneOrderPayload',
  /** Removed document ID */
  recordId?: Maybe<Scalars['MongoID']>,
  /** Removed document */
  record?: Maybe<Order>,
  query?: Maybe<Query>,
};

export type RemoveOneProductPayload = {
   __typename?: 'RemoveOneProductPayload',
  /** Removed document ID */
  recordId?: Maybe<Scalars['MongoID']>,
  /** Removed document */
  record?: Maybe<Product>,
  query?: Maybe<Query>,
};

export type Shipper = {
   __typename?: 'Shipper',
  /** Shipper unique ID */
  shipperID?: Maybe<Scalars['Float']>,
  companyName?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  _id: Scalars['MongoID'],
  orderConnection?: Maybe<OrderConnection>,
};


export type ShipperOrderConnectionArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  sort?: Maybe<SortConnectionOrderEnum>
};

export type ShipperIdOperatorsFilterFindManyShipperInput = {
  /** Shipper unique ID */
  gt?: Maybe<Scalars['Float']>,
  /** Shipper unique ID */
  gte?: Maybe<Scalars['Float']>,
  /** Shipper unique ID */
  lt?: Maybe<Scalars['Float']>,
  /** Shipper unique ID */
  lte?: Maybe<Scalars['Float']>,
  /** Shipper unique ID */
  ne?: Maybe<Scalars['Float']>,
  /** Shipper unique ID */
  in?: Maybe<Array<Maybe<Scalars['Float']>>>,
  /** Shipper unique ID */
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>,
};

export type ShipperIdOperatorsFilterFindOneShipperInput = {
  /** Shipper unique ID */
  gt?: Maybe<Scalars['Float']>,
  /** Shipper unique ID */
  gte?: Maybe<Scalars['Float']>,
  /** Shipper unique ID */
  lt?: Maybe<Scalars['Float']>,
  /** Shipper unique ID */
  lte?: Maybe<Scalars['Float']>,
  /** Shipper unique ID */
  ne?: Maybe<Scalars['Float']>,
  /** Shipper unique ID */
  in?: Maybe<Array<Maybe<Scalars['Float']>>>,
  /** Shipper unique ID */
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>,
};

export enum SortConnectionCustomerEnum {
  IdDesc = '_ID_DESC',
  IdAsc = '_ID_ASC',
  CustomeridDesc = 'CUSTOMERID_DESC',
  CustomeridAsc = 'CUSTOMERID_ASC',
  CompanynameDesc = 'COMPANYNAME_DESC',
  CompanynameAsc = 'COMPANYNAME_ASC'
}

export enum SortConnectionOrderEnum {
  IdDesc = '_ID_DESC',
  IdAsc = '_ID_ASC',
  OrderidDesc = 'ORDERID_DESC',
  OrderidAsc = 'ORDERID_ASC'
}

export enum SortConnectionProductEnum {
  IdDesc = '_ID_DESC',
  IdAsc = '_ID_ASC',
  ProductidDesc = 'PRODUCTID_DESC',
  ProductidAsc = 'PRODUCTID_ASC',
  NameSupplieridDesc = 'NAME__SUPPLIERID_DESC',
  NameSupplieridAsc = 'NAME__SUPPLIERID_ASC'
}

export enum SortConnectionSupplierEnum {
  IdDesc = '_ID_DESC',
  IdAsc = '_ID_ASC',
  SupplieridDesc = 'SUPPLIERID_DESC',
  SupplieridAsc = 'SUPPLIERID_ASC',
  CompanynameDesc = 'COMPANYNAME_DESC',
  CompanynameAsc = 'COMPANYNAME_ASC'
}

export enum SortFindManyCategoryInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  CategoryidAsc = 'CATEGORYID_ASC',
  CategoryidDesc = 'CATEGORYID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC'
}

export enum SortFindManyCustomerInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  CustomeridAsc = 'CUSTOMERID_ASC',
  CustomeridDesc = 'CUSTOMERID_DESC',
  CompanynameAsc = 'COMPANYNAME_ASC',
  CompanynameDesc = 'COMPANYNAME_DESC'
}

export enum SortFindManyEmployeeInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  EmployeeidAsc = 'EMPLOYEEID_ASC',
  EmployeeidDesc = 'EMPLOYEEID_DESC',
  TerritoryidsAsc = 'TERRITORYIDS_ASC',
  TerritoryidsDesc = 'TERRITORYIDS_DESC',
  LastnameAsc = 'LASTNAME_ASC',
  LastnameDesc = 'LASTNAME_DESC',
  LastnameFirstnameAsc = 'LASTNAME__FIRSTNAME_ASC',
  LastnameFirstnameDesc = 'LASTNAME__FIRSTNAME_DESC'
}

export enum SortFindManyOrderInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  OrderidAsc = 'ORDERID_ASC',
  OrderidDesc = 'ORDERID_DESC',
  DetailsAsc = 'DETAILS_ASC',
  DetailsDesc = 'DETAILS_DESC'
}

export enum SortFindManyProductInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  ProductidAsc = 'PRODUCTID_ASC',
  ProductidDesc = 'PRODUCTID_DESC',
  UnitpriceAsc = 'UNITPRICE_ASC',
  UnitpriceDesc = 'UNITPRICE_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  NameSupplieridAsc = 'NAME__SUPPLIERID_ASC',
  NameSupplieridDesc = 'NAME__SUPPLIERID_DESC'
}

export enum SortFindManyRegionInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  RegionidAsc = 'REGIONID_ASC',
  RegionidDesc = 'REGIONID_DESC'
}

export enum SortFindManyShipperInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  ShipperidAsc = 'SHIPPERID_ASC',
  ShipperidDesc = 'SHIPPERID_DESC'
}

export enum SortFindOneCategoryInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  CategoryidAsc = 'CATEGORYID_ASC',
  CategoryidDesc = 'CATEGORYID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC'
}

export enum SortFindOneCustomerInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  CustomeridAsc = 'CUSTOMERID_ASC',
  CustomeridDesc = 'CUSTOMERID_DESC',
  CompanynameAsc = 'COMPANYNAME_ASC',
  CompanynameDesc = 'COMPANYNAME_DESC'
}

export enum SortFindOneEmployeeInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  EmployeeidAsc = 'EMPLOYEEID_ASC',
  EmployeeidDesc = 'EMPLOYEEID_DESC',
  TerritoryidsAsc = 'TERRITORYIDS_ASC',
  TerritoryidsDesc = 'TERRITORYIDS_DESC',
  LastnameAsc = 'LASTNAME_ASC',
  LastnameDesc = 'LASTNAME_DESC',
  LastnameFirstnameAsc = 'LASTNAME__FIRSTNAME_ASC',
  LastnameFirstnameDesc = 'LASTNAME__FIRSTNAME_DESC'
}

export enum SortFindOneOrderInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  OrderidAsc = 'ORDERID_ASC',
  OrderidDesc = 'ORDERID_DESC',
  DetailsAsc = 'DETAILS_ASC',
  DetailsDesc = 'DETAILS_DESC'
}

export enum SortFindOneProductInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  ProductidAsc = 'PRODUCTID_ASC',
  ProductidDesc = 'PRODUCTID_DESC',
  UnitpriceAsc = 'UNITPRICE_ASC',
  UnitpriceDesc = 'UNITPRICE_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  NameSupplieridAsc = 'NAME__SUPPLIERID_ASC',
  NameSupplieridDesc = 'NAME__SUPPLIERID_DESC'
}

export enum SortFindOneRegionInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  RegionidAsc = 'REGIONID_ASC',
  RegionidDesc = 'REGIONID_DESC'
}

export enum SortFindOneShipperInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  ShipperidAsc = 'SHIPPERID_ASC',
  ShipperidDesc = 'SHIPPERID_DESC'
}

export enum SortFindOneSupplierInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  SupplieridAsc = 'SUPPLIERID_ASC',
  SupplieridDesc = 'SUPPLIERID_DESC',
  CompanynameAsc = 'COMPANYNAME_ASC',
  CompanynameDesc = 'COMPANYNAME_DESC'
}

export enum SortRemoveOneOrderInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  OrderidAsc = 'ORDERID_ASC',
  OrderidDesc = 'ORDERID_DESC',
  DetailsAsc = 'DETAILS_ASC',
  DetailsDesc = 'DETAILS_DESC'
}

export enum SortRemoveOneProductInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  ProductidAsc = 'PRODUCTID_ASC',
  ProductidDesc = 'PRODUCTID_DESC',
  UnitpriceAsc = 'UNITPRICE_ASC',
  UnitpriceDesc = 'UNITPRICE_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  NameSupplieridAsc = 'NAME__SUPPLIERID_ASC',
  NameSupplieridDesc = 'NAME__SUPPLIERID_DESC'
}

export type Subscription = {
   __typename?: 'Subscription',
  orderCreated?: Maybe<Order>,
  orderUpdated?: Maybe<Order>,
  orderRemoved?: Maybe<Scalars['MongoID']>,
};

export type Supplier = {
   __typename?: 'Supplier',
  /** Supplier unique ID */
  supplierID?: Maybe<Scalars['Float']>,
  companyName?: Maybe<Scalars['String']>,
  contactName?: Maybe<Scalars['String']>,
  contactTitle?: Maybe<Scalars['String']>,
  address?: Maybe<CustomerAddress>,
  _id: Scalars['MongoID'],
  productConnection?: Maybe<ProductConnection>,
};


export type SupplierProductConnectionArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  sort?: Maybe<SortConnectionProductEnum>
};

/** A connection to a list of items. */
export type SupplierConnection = {
   __typename?: 'SupplierConnection',
  /** Total object count. */
  count: Scalars['Int'],
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** Information to aid in pagination. */
  edges: Array<SupplierEdge>,
};

/** An edge in a connection. */
export type SupplierEdge = {
   __typename?: 'SupplierEdge',
  /** The item at the end of the edge */
  node: Supplier,
  /** A cursor for use in pagination */
  cursor: Scalars['String'],
};

export type SupplierIdOperatorsFilterFindManySupplierInput = {
  /** Supplier unique ID */
  gt?: Maybe<Scalars['Float']>,
  /** Supplier unique ID */
  gte?: Maybe<Scalars['Float']>,
  /** Supplier unique ID */
  lt?: Maybe<Scalars['Float']>,
  /** Supplier unique ID */
  lte?: Maybe<Scalars['Float']>,
  /** Supplier unique ID */
  ne?: Maybe<Scalars['Float']>,
  /** Supplier unique ID */
  in?: Maybe<Array<Maybe<Scalars['Float']>>>,
  /** Supplier unique ID */
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>,
};

export type SupplierIdOperatorsFilterFindOneSupplierInput = {
  /** Supplier unique ID */
  gt?: Maybe<Scalars['Float']>,
  /** Supplier unique ID */
  gte?: Maybe<Scalars['Float']>,
  /** Supplier unique ID */
  lt?: Maybe<Scalars['Float']>,
  /** Supplier unique ID */
  lte?: Maybe<Scalars['Float']>,
  /** Supplier unique ID */
  ne?: Maybe<Scalars['Float']>,
  /** Supplier unique ID */
  in?: Maybe<Array<Maybe<Scalars['Float']>>>,
  /** Supplier unique ID */
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>,
};

export type TerritoryIDsOperatorsFilterFindManyEmployeeInput = {
  /** Attached territory ID from region collection */
  gt?: Maybe<Scalars['Float']>,
  /** Attached territory ID from region collection */
  gte?: Maybe<Scalars['Float']>,
  /** Attached territory ID from region collection */
  lt?: Maybe<Scalars['Float']>,
  /** Attached territory ID from region collection */
  lte?: Maybe<Scalars['Float']>,
  /** Attached territory ID from region collection */
  ne?: Maybe<Scalars['Float']>,
  /** Attached territory ID from region collection */
  in?: Maybe<Array<Maybe<Scalars['Float']>>>,
  /** Attached territory ID from region collection */
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>,
};

export type TerritoryIDsOperatorsFilterFindOneEmployeeInput = {
  /** Attached territory ID from region collection */
  gt?: Maybe<Scalars['Float']>,
  /** Attached territory ID from region collection */
  gte?: Maybe<Scalars['Float']>,
  /** Attached territory ID from region collection */
  lt?: Maybe<Scalars['Float']>,
  /** Attached territory ID from region collection */
  lte?: Maybe<Scalars['Float']>,
  /** Attached territory ID from region collection */
  ne?: Maybe<Scalars['Float']>,
  /** Attached territory ID from region collection */
  in?: Maybe<Array<Maybe<Scalars['Float']>>>,
  /** Attached territory ID from region collection */
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>,
};

export type UnitPriceOperatorsFilterFindManyProductInput = {
  gt?: Maybe<Scalars['Float']>,
  gte?: Maybe<Scalars['Float']>,
  lt?: Maybe<Scalars['Float']>,
  lte?: Maybe<Scalars['Float']>,
  ne?: Maybe<Scalars['Float']>,
  in?: Maybe<Array<Maybe<Scalars['Float']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>,
};

export type UnitPriceOperatorsFilterFindOneProductInput = {
  gt?: Maybe<Scalars['Float']>,
  gte?: Maybe<Scalars['Float']>,
  lt?: Maybe<Scalars['Float']>,
  lte?: Maybe<Scalars['Float']>,
  ne?: Maybe<Scalars['Float']>,
  in?: Maybe<Array<Maybe<Scalars['Float']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>,
};

export type UnitPriceOperatorsFilterRemoveOneProductInput = {
  gt?: Maybe<Scalars['Float']>,
  gte?: Maybe<Scalars['Float']>,
  lt?: Maybe<Scalars['Float']>,
  lte?: Maybe<Scalars['Float']>,
  ne?: Maybe<Scalars['Float']>,
  in?: Maybe<Array<Maybe<Scalars['Float']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>,
};

export type UpdateByIdEmployeeInput = {
  /** Category unique ID */
  employeeID?: Maybe<Scalars['Float']>,
  lastName?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  titleOfCourtesy?: Maybe<Scalars['String']>,
  birthDate?: Maybe<Scalars['Date']>,
  hireDate?: Maybe<Scalars['Date']>,
  address?: Maybe<CustomerAddressInput>,
  notes?: Maybe<Scalars['String']>,
  /** ID of chief */
  reportsTo?: Maybe<Scalars['Float']>,
  /** Attached territory ID from region collection */
  territoryIDs?: Maybe<Array<Maybe<Scalars['Float']>>>,
  _id: Scalars['MongoID'],
};

export type UpdateByIdEmployeePayload = {
   __typename?: 'UpdateByIdEmployeePayload',
  /** Updated document ID */
  recordId?: Maybe<Scalars['MongoID']>,
  /** Updated document */
  record?: Maybe<Employee>,
  query?: Maybe<Query>,
};

export type UpdateByIdOrderInput = {
  /** Order unique ID */
  orderID?: Maybe<Scalars['Float']>,
  customerID?: Maybe<Scalars['String']>,
  employeeID?: Maybe<Scalars['Float']>,
  orderDate?: Maybe<Scalars['Date']>,
  requiredDate?: Maybe<Scalars['Date']>,
  shippedDate?: Maybe<Scalars['Date']>,
  shipVia?: Maybe<Scalars['Float']>,
  freight?: Maybe<Scalars['Float']>,
  shipName?: Maybe<Scalars['String']>,
  shipAddress?: Maybe<CustomerAddressInput>,
  /** List of ordered products */
  details?: Maybe<Array<Maybe<OrderDetailsInput>>>,
  _id: Scalars['MongoID'],
};

export type UpdateByIdOrderPayload = {
   __typename?: 'UpdateByIdOrderPayload',
  /** Updated document ID */
  recordId?: Maybe<Scalars['MongoID']>,
  /** Updated document */
  record?: Maybe<Order>,
  query?: Maybe<Query>,
};

export type UpdateByIdProductInput = {
  /** Unique product id */
  productID?: Maybe<Scalars['Float']>,
  name?: Maybe<Scalars['String']>,
  supplierID?: Maybe<Scalars['Float']>,
  categoryID?: Maybe<Scalars['Float']>,
  quantityPerUnit?: Maybe<Scalars['String']>,
  unitPrice?: Maybe<Scalars['Float']>,
  unitsInStock?: Maybe<Scalars['Float']>,
  unitsOnOrder?: Maybe<Scalars['Float']>,
  reorderLevel?: Maybe<Scalars['Float']>,
  discontinued?: Maybe<Scalars['Boolean']>,
  _id: Scalars['MongoID'],
};

export type UpdateByIdProductPayload = {
   __typename?: 'UpdateByIdProductPayload',
  /** Updated document ID */
  recordId?: Maybe<Scalars['MongoID']>,
  /** Updated document */
  record?: Maybe<Product>,
  query?: Maybe<Query>,
};

export type Viewer = {
   __typename?: 'Viewer',
  category?: Maybe<Category>,
  categoryList?: Maybe<Array<Maybe<Category>>>,
  customer?: Maybe<Customer>,
  customerPagination?: Maybe<CustomerPagination>,
  customerConnection?: Maybe<CustomerConnection>,
  employee?: Maybe<Employee>,
  employeeList?: Maybe<Array<Maybe<Employee>>>,
  employeePagination?: Maybe<EmployeePagination>,
  order?: Maybe<Order>,
  orderPagination?: Maybe<OrderPagination>,
  orderConnection?: Maybe<OrderConnection>,
  product?: Maybe<Product>,
  productList?: Maybe<Array<Maybe<Product>>>,
  productPagination?: Maybe<ProductPagination>,
  productConnection?: Maybe<ProductConnection>,
  region?: Maybe<Region>,
  regionList?: Maybe<Array<Maybe<Region>>>,
  shipper?: Maybe<Shipper>,
  shipperList?: Maybe<Array<Maybe<Shipper>>>,
  supplier?: Maybe<Supplier>,
  supplierConnection?: Maybe<SupplierConnection>,
};


export type ViewerCategoryArgs = {
  filter?: Maybe<FilterFindOneCategoryInput>,
  skip?: Maybe<Scalars['Int']>,
  sort?: Maybe<SortFindOneCategoryInput>
};


export type ViewerCategoryListArgs = {
  filter?: Maybe<FilterFindManyCategoryInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  sort?: Maybe<SortFindManyCategoryInput>
};


export type ViewerCustomerArgs = {
  filter?: Maybe<FilterFindOneCustomerInput>,
  skip?: Maybe<Scalars['Int']>,
  sort?: Maybe<SortFindOneCustomerInput>
};


export type ViewerCustomerPaginationArgs = {
  page?: Maybe<Scalars['Int']>,
  perPage?: Maybe<Scalars['Int']>,
  filter?: Maybe<FilterFindManyCustomerInput>,
  sort?: Maybe<SortFindManyCustomerInput>
};


export type ViewerCustomerConnectionArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  filter?: Maybe<FilterFindManyCustomerInput>,
  sort?: Maybe<SortConnectionCustomerEnum>
};


export type ViewerEmployeeArgs = {
  filter?: Maybe<FilterFindOneEmployeeInput>,
  skip?: Maybe<Scalars['Int']>,
  sort?: Maybe<SortFindOneEmployeeInput>
};


export type ViewerEmployeeListArgs = {
  filter?: Maybe<FilterFindManyEmployeeInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  sort?: Maybe<SortFindManyEmployeeInput>
};


export type ViewerEmployeePaginationArgs = {
  page?: Maybe<Scalars['Int']>,
  perPage?: Maybe<Scalars['Int']>,
  filter?: Maybe<FilterFindManyEmployeeInput>,
  sort?: Maybe<SortFindManyEmployeeInput>
};


export type ViewerOrderArgs = {
  filter?: Maybe<FilterFindOneOrderInput>,
  skip?: Maybe<Scalars['Int']>,
  sort?: Maybe<SortFindOneOrderInput>
};


export type ViewerOrderPaginationArgs = {
  page?: Maybe<Scalars['Int']>,
  perPage?: Maybe<Scalars['Int']>,
  filter?: Maybe<FilterFindManyOrderInput>,
  sort?: Maybe<SortFindManyOrderInput>
};


export type ViewerOrderConnectionArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  filter?: Maybe<FilterFindManyOrderInput>,
  sort?: Maybe<SortConnectionOrderEnum>
};


export type ViewerProductArgs = {
  filter?: Maybe<FilterFindOneProductInput>,
  skip?: Maybe<Scalars['Int']>,
  sort?: Maybe<SortFindOneProductInput>
};


export type ViewerProductListArgs = {
  filter?: Maybe<FilterFindManyProductInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  sort?: Maybe<SortFindManyProductInput>
};


export type ViewerProductPaginationArgs = {
  page?: Maybe<Scalars['Int']>,
  perPage?: Maybe<Scalars['Int']>,
  filter?: Maybe<FilterFindManyProductInput>,
  sort?: Maybe<SortFindManyProductInput>
};


export type ViewerProductConnectionArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  filter?: Maybe<FilterFindManyProductInput>,
  sort?: Maybe<SortConnectionProductEnum>
};


export type ViewerRegionArgs = {
  filter?: Maybe<FilterFindOneRegionInput>,
  skip?: Maybe<Scalars['Int']>,
  sort?: Maybe<SortFindOneRegionInput>
};


export type ViewerRegionListArgs = {
  filter?: Maybe<FilterFindManyRegionInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  sort?: Maybe<SortFindManyRegionInput>
};


export type ViewerShipperArgs = {
  filter?: Maybe<FilterFindOneShipperInput>,
  skip?: Maybe<Scalars['Int']>,
  sort?: Maybe<SortFindOneShipperInput>
};


export type ViewerShipperListArgs = {
  filter?: Maybe<FilterFindManyShipperInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  sort?: Maybe<SortFindManyShipperInput>
};


export type ViewerSupplierArgs = {
  filter?: Maybe<FilterFindOneSupplierInput>,
  skip?: Maybe<Scalars['Int']>,
  sort?: Maybe<SortFindOneSupplierInput>
};


export type ViewerSupplierConnectionArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  filter?: Maybe<FilterFindManySupplierInput>,
  sort?: Maybe<SortConnectionSupplierEnum>
};
