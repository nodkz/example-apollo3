export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `ID` scalar type represents a unique MongoDB identifier in collection. MongoDB by default use 12-byte ObjectId value (https://docs.mongodb.com/manual/reference/bson-types/#objectid). But MongoDB also may accepts string or integer as correct values for _id field. */
  MongoID: any;
  /** The `Decimal` scalar type uses the IEEE 754 decimal128 decimal-based floating-point numbering format. Supports 34 decimal digits of precision, a max value of approximately 10^6145, and min value of approximately -10^6145 */
  BSONDecimal: any;
  /** The string representation of JavaScript regexp. You may provide it with flags "/^abc.*\/i" or without flags like "^abc.*". More info about RegExp characters and flags: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions */
  RegExpAsString: any;
  Date: any;
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

export type ValidationError = ErrorInterface & {
   __typename?: 'ValidationError';
  /** Combined error message from all validators */
  message?: Maybe<Scalars['String']>;
  /** List of validator errors */
  errors?: Maybe<Array<ValidatorError>>;
};

export type ErrorInterface = {
  /** Generic error message */
  message?: Maybe<Scalars['String']>;
};

export type ValidatorError = {
   __typename?: 'ValidatorError';
  /** Validation error message */
  message?: Maybe<Scalars['String']>;
  /** Source of the validation error from the model path */
  path?: Maybe<Scalars['String']>;
  /** Field value which occurs the validation error */
  value?: Maybe<Scalars['JSON']>;
  /** Input record idx in array which occurs the validation error. This `idx` is useful for createMany operation. For singular operations it always be 0. For *Many operations `idx` represents record index in array received from user. */
  idx: Scalars['Int'];
};


export type MongoError = ErrorInterface & {
   __typename?: 'MongoError';
  /** MongoDB error message */
  message?: Maybe<Scalars['String']>;
  /** MongoDB error code */
  code?: Maybe<Scalars['Int']>;
};

export type RuntimeError = ErrorInterface & {
   __typename?: 'RuntimeError';
  /** Runtime error message */
  message?: Maybe<Scalars['String']>;
};

export type Query = {
   __typename?: 'Query';
  userById?: Maybe<User>;
  userByIds: Array<User>;
  userOne?: Maybe<User>;
  userMany: Array<User>;
  userTotal?: Maybe<Scalars['Int']>;
  userConnection?: Maybe<UserConnection>;
  userPagination?: Maybe<UserPagination>;
  /** Data under client context */
  viewer?: Maybe<Viewer>;
};


export type QueryUserByIdArgs = {
  _id: Scalars['MongoID'];
};


export type QueryUserByIdsArgs = {
  _ids: Array<Scalars['MongoID']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindByIdsUserInput>;
};


export type QueryUserOneArgs = {
  filter?: Maybe<FilterFindOneUserInput>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindOneUserInput>;
};


export type QueryUserManyArgs = {
  filter?: Maybe<FilterFindManyUserInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyUserInput>;
};


export type QueryUserTotalArgs = {
  filter?: Maybe<FilterCountUserInput>;
};


export type QueryUserConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  filter?: Maybe<FilterFindManyUserInput>;
  sort?: Maybe<SortConnectionUserEnum>;
};


export type QueryUserPaginationArgs = {
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  filter?: Maybe<FilterFindManyUserInput>;
  sort?: Maybe<SortFindManyUserInput>;
};

export type User = {
   __typename?: 'User';
  name?: Maybe<Scalars['String']>;
  age?: Maybe<Scalars['Float']>;
  languages?: Maybe<Array<Maybe<UserLanguages>>>;
  contacts?: Maybe<UserContacts>;
  gender?: Maybe<EnumUserGender>;
  address?: Maybe<UserAddress>;
  /** Some dynamic data */
  someMixed?: Maybe<Scalars['JSON']>;
  salaryDecimal?: Maybe<Scalars['BSONDecimal']>;
  _id: Scalars['MongoID'];
  virtualField?: Maybe<Scalars['String']>;
};


export type UserVirtualFieldArgs = {
  lang?: Maybe<Scalars['String']>;
};

export type UserLanguages = {
   __typename?: 'UserLanguages';
  language?: Maybe<Scalars['String']>;
  skill?: Maybe<EnumUserLanguagesSkill>;
};

export enum EnumUserLanguagesSkill {
  Basic = 'basic',
  Fluent = 'fluent',
  Native = 'native'
}

export type UserContacts = {
   __typename?: 'UserContacts';
  email?: Maybe<Scalars['String']>;
  phones?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export enum EnumUserGender {
  Male = 'male',
  Female = 'female',
  Ladyboy = 'ladyboy'
}

export type UserAddress = {
   __typename?: 'UserAddress';
  street?: Maybe<Scalars['String']>;
  geo?: Maybe<Array<Maybe<Scalars['Float']>>>;
  _id?: Maybe<Scalars['MongoID']>;
};



export enum SortFindByIdsUserInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  AgeAsc = 'AGE_ASC',
  AgeDesc = 'AGE_DESC',
  SalarydecimalAsc = 'SALARYDECIMAL_ASC',
  SalarydecimalDesc = 'SALARYDECIMAL_DESC',
  GenderAsc = 'GENDER_ASC',
  GenderDesc = 'GENDER_DESC',
  GenderAgeAsc = 'GENDER__AGE_ASC',
  GenderAgeDesc = 'GENDER__AGE_DESC'
}

export type FilterFindOneUserInput = {
  name?: Maybe<Scalars['String']>;
  age?: Maybe<Scalars['Float']>;
  languages?: Maybe<Array<Maybe<FilterFindOneUserLanguagesInput>>>;
  contacts?: Maybe<FilterFindOneUserContactsInput>;
  gender?: Maybe<EnumUserGender>;
  address?: Maybe<FilterFindOneUserAddressInput>;
  /** Some dynamic data */
  someMixed?: Maybe<Scalars['JSON']>;
  salaryDecimal?: Maybe<Scalars['BSONDecimal']>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindOneUserOperatorsInput>;
  OR?: Maybe<Array<FilterFindOneUserInput>>;
  AND?: Maybe<Array<FilterFindOneUserInput>>;
};

export type FilterFindOneUserLanguagesInput = {
  language?: Maybe<Scalars['String']>;
  skill?: Maybe<EnumUserLanguagesSkill>;
};

export type FilterFindOneUserContactsInput = {
  email?: Maybe<Scalars['String']>;
  phones?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FilterFindOneUserAddressInput = {
  street?: Maybe<Scalars['String']>;
  geo?: Maybe<Array<Maybe<Scalars['Float']>>>;
  _id?: Maybe<Scalars['MongoID']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneUserOperatorsInput = {
  name?: Maybe<FilterFindOneUserNameOperatorsInput>;
  age?: Maybe<FilterFindOneUserAgeOperatorsInput>;
  gender?: Maybe<FilterFindOneUserGenderOperatorsInput>;
  salaryDecimal?: Maybe<FilterFindOneUserSalaryDecimalOperatorsInput>;
  _id?: Maybe<FilterFindOneUser_IdOperatorsInput>;
};

export type FilterFindOneUserNameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};


export type FilterFindOneUserAgeOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneUserGenderOperatorsInput = {
  gt?: Maybe<EnumUserGender>;
  gte?: Maybe<EnumUserGender>;
  lt?: Maybe<EnumUserGender>;
  lte?: Maybe<EnumUserGender>;
  ne?: Maybe<EnumUserGender>;
  in?: Maybe<Array<Maybe<EnumUserGender>>>;
  nin?: Maybe<Array<Maybe<EnumUserGender>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneUserSalaryDecimalOperatorsInput = {
  gt?: Maybe<Scalars['BSONDecimal']>;
  gte?: Maybe<Scalars['BSONDecimal']>;
  lt?: Maybe<Scalars['BSONDecimal']>;
  lte?: Maybe<Scalars['BSONDecimal']>;
  ne?: Maybe<Scalars['BSONDecimal']>;
  in?: Maybe<Array<Maybe<Scalars['BSONDecimal']>>>;
  nin?: Maybe<Array<Maybe<Scalars['BSONDecimal']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneUser_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export enum SortFindOneUserInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  AgeAsc = 'AGE_ASC',
  AgeDesc = 'AGE_DESC',
  SalarydecimalAsc = 'SALARYDECIMAL_ASC',
  SalarydecimalDesc = 'SALARYDECIMAL_DESC',
  GenderAsc = 'GENDER_ASC',
  GenderDesc = 'GENDER_DESC',
  GenderAgeAsc = 'GENDER__AGE_ASC',
  GenderAgeDesc = 'GENDER__AGE_DESC'
}

export type FilterFindManyUserInput = {
  name?: Maybe<Scalars['String']>;
  age?: Maybe<Scalars['Float']>;
  languages?: Maybe<Array<Maybe<FilterFindManyUserLanguagesInput>>>;
  contacts?: Maybe<FilterFindManyUserContactsInput>;
  gender?: Maybe<EnumUserGender>;
  address?: Maybe<FilterFindManyUserAddressInput>;
  /** Some dynamic data */
  someMixed?: Maybe<Scalars['JSON']>;
  salaryDecimal?: Maybe<Scalars['BSONDecimal']>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindManyUserOperatorsInput>;
  OR?: Maybe<Array<FilterFindManyUserInput>>;
  AND?: Maybe<Array<FilterFindManyUserInput>>;
};

export type FilterFindManyUserLanguagesInput = {
  language?: Maybe<Scalars['String']>;
  skill?: Maybe<EnumUserLanguagesSkill>;
};

export type FilterFindManyUserContactsInput = {
  email?: Maybe<Scalars['String']>;
  phones?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FilterFindManyUserAddressInput = {
  street?: Maybe<Scalars['String']>;
  geo?: Maybe<Array<Maybe<Scalars['Float']>>>;
  _id?: Maybe<Scalars['MongoID']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyUserOperatorsInput = {
  name?: Maybe<FilterFindManyUserNameOperatorsInput>;
  age?: Maybe<FilterFindManyUserAgeOperatorsInput>;
  gender?: Maybe<FilterFindManyUserGenderOperatorsInput>;
  salaryDecimal?: Maybe<FilterFindManyUserSalaryDecimalOperatorsInput>;
  _id?: Maybe<FilterFindManyUser_IdOperatorsInput>;
};

export type FilterFindManyUserNameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyUserAgeOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyUserGenderOperatorsInput = {
  gt?: Maybe<EnumUserGender>;
  gte?: Maybe<EnumUserGender>;
  lt?: Maybe<EnumUserGender>;
  lte?: Maybe<EnumUserGender>;
  ne?: Maybe<EnumUserGender>;
  in?: Maybe<Array<Maybe<EnumUserGender>>>;
  nin?: Maybe<Array<Maybe<EnumUserGender>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyUserSalaryDecimalOperatorsInput = {
  gt?: Maybe<Scalars['BSONDecimal']>;
  gte?: Maybe<Scalars['BSONDecimal']>;
  lt?: Maybe<Scalars['BSONDecimal']>;
  lte?: Maybe<Scalars['BSONDecimal']>;
  ne?: Maybe<Scalars['BSONDecimal']>;
  in?: Maybe<Array<Maybe<Scalars['BSONDecimal']>>>;
  nin?: Maybe<Array<Maybe<Scalars['BSONDecimal']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyUser_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export enum SortFindManyUserInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  AgeAsc = 'AGE_ASC',
  AgeDesc = 'AGE_DESC',
  SalarydecimalAsc = 'SALARYDECIMAL_ASC',
  SalarydecimalDesc = 'SALARYDECIMAL_DESC',
  GenderAsc = 'GENDER_ASC',
  GenderDesc = 'GENDER_DESC',
  GenderAgeAsc = 'GENDER__AGE_ASC',
  GenderAgeDesc = 'GENDER__AGE_DESC'
}

export type FilterCountUserInput = {
  name?: Maybe<Scalars['String']>;
  age?: Maybe<Scalars['Float']>;
  languages?: Maybe<Array<Maybe<FilterCountUserLanguagesInput>>>;
  contacts?: Maybe<FilterCountUserContactsInput>;
  gender?: Maybe<EnumUserGender>;
  address?: Maybe<FilterCountUserAddressInput>;
  /** Some dynamic data */
  someMixed?: Maybe<Scalars['JSON']>;
  salaryDecimal?: Maybe<Scalars['BSONDecimal']>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterCountUserOperatorsInput>;
  OR?: Maybe<Array<FilterCountUserInput>>;
  AND?: Maybe<Array<FilterCountUserInput>>;
};

export type FilterCountUserLanguagesInput = {
  language?: Maybe<Scalars['String']>;
  skill?: Maybe<EnumUserLanguagesSkill>;
};

export type FilterCountUserContactsInput = {
  email?: Maybe<Scalars['String']>;
  phones?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FilterCountUserAddressInput = {
  street?: Maybe<Scalars['String']>;
  geo?: Maybe<Array<Maybe<Scalars['Float']>>>;
  _id?: Maybe<Scalars['MongoID']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterCountUserOperatorsInput = {
  name?: Maybe<FilterCountUserNameOperatorsInput>;
  age?: Maybe<FilterCountUserAgeOperatorsInput>;
  gender?: Maybe<FilterCountUserGenderOperatorsInput>;
  salaryDecimal?: Maybe<FilterCountUserSalaryDecimalOperatorsInput>;
  _id?: Maybe<FilterCountUser_IdOperatorsInput>;
};

export type FilterCountUserNameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterCountUserAgeOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterCountUserGenderOperatorsInput = {
  gt?: Maybe<EnumUserGender>;
  gte?: Maybe<EnumUserGender>;
  lt?: Maybe<EnumUserGender>;
  lte?: Maybe<EnumUserGender>;
  ne?: Maybe<EnumUserGender>;
  in?: Maybe<Array<Maybe<EnumUserGender>>>;
  nin?: Maybe<Array<Maybe<EnumUserGender>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterCountUserSalaryDecimalOperatorsInput = {
  gt?: Maybe<Scalars['BSONDecimal']>;
  gte?: Maybe<Scalars['BSONDecimal']>;
  lt?: Maybe<Scalars['BSONDecimal']>;
  lte?: Maybe<Scalars['BSONDecimal']>;
  ne?: Maybe<Scalars['BSONDecimal']>;
  in?: Maybe<Array<Maybe<Scalars['BSONDecimal']>>>;
  nin?: Maybe<Array<Maybe<Scalars['BSONDecimal']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterCountUser_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

/** A connection to a list of items. */
export type UserConnection = {
   __typename?: 'UserConnection';
  /** Total object count. */
  count: Scalars['Int'];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Information to aid in pagination. */
  edges: Array<UserEdge>;
};

/** Information about pagination in a connection. */
export type PageInfo = {
   __typename?: 'PageInfo';
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
};

/** An edge in a connection. */
export type UserEdge = {
   __typename?: 'UserEdge';
  /** The item at the end of the edge */
  node: User;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export enum SortConnectionUserEnum {
  IdDesc = '_ID_DESC',
  IdAsc = '_ID_ASC'
}

/** List of items with pagination. */
export type UserPagination = {
   __typename?: 'UserPagination';
  /** Total object count. */
  count?: Maybe<Scalars['Int']>;
  /** Array of objects. */
  items?: Maybe<Array<User>>;
  /** Information to aid in pagination. */
  pageInfo: PaginationInfo;
};

export type PaginationInfo = {
   __typename?: 'PaginationInfo';
  currentPage: Scalars['Int'];
  perPage: Scalars['Int'];
  pageCount?: Maybe<Scalars['Int']>;
  itemCount?: Maybe<Scalars['Int']>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPreviousPage?: Maybe<Scalars['Boolean']>;
};

export type Viewer = {
   __typename?: 'Viewer';
  category?: Maybe<Category>;
  categoryList: Array<Category>;
  customer?: Maybe<Customer>;
  customerPagination?: Maybe<CustomerPagination>;
  customerConnection?: Maybe<CustomerConnection>;
  employee?: Maybe<Employee>;
  employeeList: Array<Employee>;
  employeePagination?: Maybe<EmployeePagination>;
  order?: Maybe<Order>;
  orderPagination?: Maybe<OrderPagination>;
  orderConnection?: Maybe<OrderConnection>;
  product?: Maybe<Product>;
  productList: Array<Product>;
  productPagination?: Maybe<ProductPagination>;
  productConnection?: Maybe<ProductConnection>;
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
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyCategoryInput>;
};


export type ViewerCustomerArgs = {
  filter?: Maybe<FilterFindOneCustomerInput>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindOneCustomerInput>;
};


export type ViewerCustomerPaginationArgs = {
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  filter?: Maybe<FilterFindManyCustomerInput>;
  sort?: Maybe<SortFindManyCustomerInput>;
};


export type ViewerCustomerConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  filter?: Maybe<FilterFindManyCustomerInput>;
  sort?: Maybe<SortConnectionCustomerEnum>;
};


export type ViewerEmployeeArgs = {
  filter?: Maybe<FilterFindOneEmployeeInput>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindOneEmployeeInput>;
};


export type ViewerEmployeeListArgs = {
  filter?: Maybe<FilterFindManyEmployeeInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyEmployeeInput>;
};


export type ViewerEmployeePaginationArgs = {
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  filter?: Maybe<FilterFindManyEmployeeInput>;
  sort?: Maybe<SortFindManyEmployeeInput>;
};


export type ViewerOrderArgs = {
  filter?: Maybe<FilterFindOneOrderInput>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindOneOrderInput>;
};


export type ViewerOrderPaginationArgs = {
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  filter?: Maybe<FilterFindManyOrderInput>;
  sort?: Maybe<SortFindManyOrderInput>;
};


export type ViewerOrderConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  filter?: Maybe<FilterFindManyOrderInput>;
  sort?: Maybe<SortConnectionOrderEnum>;
};


export type ViewerProductArgs = {
  filter?: Maybe<FilterFindOneProductInput>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindOneProductInput>;
};


export type ViewerProductListArgs = {
  filter?: Maybe<FilterFindManyProductInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyProductInput>;
};


export type ViewerProductPaginationArgs = {
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  filter?: Maybe<FilterFindManyProductInput>;
  sort?: Maybe<SortFindManyProductInput>;
};


export type ViewerProductConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  filter?: Maybe<FilterFindManyProductInput>;
  sort?: Maybe<SortConnectionProductEnum>;
};


export type ViewerRegionArgs = {
  filter?: Maybe<FilterFindOneRegionInput>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindOneRegionInput>;
};


export type ViewerRegionListArgs = {
  filter?: Maybe<FilterFindManyRegionInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyRegionInput>;
};


export type ViewerShipperArgs = {
  filter?: Maybe<FilterFindOneShipperInput>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindOneShipperInput>;
};


export type ViewerShipperListArgs = {
  filter?: Maybe<FilterFindManyShipperInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyShipperInput>;
};


export type ViewerSupplierArgs = {
  filter?: Maybe<FilterFindOneSupplierInput>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindOneSupplierInput>;
};


export type ViewerSupplierConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  filter?: Maybe<FilterFindManySupplierInput>;
  sort?: Maybe<SortConnectionSupplierEnum>;
};

export type Category = {
   __typename?: 'Category';
  /** Category unique ID */
  categoryID?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  _id: Scalars['MongoID'];
  productConnection?: Maybe<ProductConnection>;
  productList: Array<Product>;
};


export type CategoryProductConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  sort?: Maybe<SortConnectionProductEnum>;
};


export type CategoryProductListArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyProductInput>;
};

/** A connection to a list of items. */
export type ProductConnection = {
   __typename?: 'ProductConnection';
  /** Total object count. */
  count: Scalars['Int'];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Information to aid in pagination. */
  edges: Array<ProductEdge>;
};

/** An edge in a connection. */
export type ProductEdge = {
   __typename?: 'ProductEdge';
  /** The item at the end of the edge */
  node: Product;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type Product = {
   __typename?: 'Product';
  /** Unique product id */
  productID?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  supplierID?: Maybe<Scalars['Float']>;
  categoryID?: Maybe<Scalars['Float']>;
  quantityPerUnit?: Maybe<Scalars['String']>;
  unitPrice?: Maybe<Scalars['Float']>;
  unitsInStock?: Maybe<Scalars['Float']>;
  unitsOnOrder?: Maybe<Scalars['Float']>;
  reorderLevel?: Maybe<Scalars['Float']>;
  discontinued?: Maybe<Scalars['Boolean']>;
  _id: Scalars['MongoID'];
  orderConnection?: Maybe<OrderConnection>;
  orderList: Array<Order>;
  supplier?: Maybe<Supplier>;
  category?: Maybe<Category>;
};


export type ProductOrderConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  sort?: Maybe<SortConnectionOrderEnum>;
};


export type ProductOrderListArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyOrderInput>;
};

/** A connection to a list of items. */
export type OrderConnection = {
   __typename?: 'OrderConnection';
  /** Total object count. */
  count: Scalars['Int'];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Information to aid in pagination. */
  edges: Array<OrderEdge>;
};

/** An edge in a connection. */
export type OrderEdge = {
   __typename?: 'OrderEdge';
  /** The item at the end of the edge */
  node: Order;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};


export type CustomerAddress = {
   __typename?: 'CustomerAddress';
  street?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
};

export type OrderDetails = {
   __typename?: 'OrderDetails';
  productID?: Maybe<Scalars['Float']>;
  unitPrice?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  discount?: Maybe<Scalars['Float']>;
  product?: Maybe<Product>;
};

export type Customer = {
   __typename?: 'Customer';
  /** Customer unique ID */
  customerID?: Maybe<Scalars['String']>;
  companyName?: Maybe<Scalars['String']>;
  contactName?: Maybe<Scalars['String']>;
  contactTitle?: Maybe<Scalars['String']>;
  address?: Maybe<CustomerAddress>;
  _id: Scalars['MongoID'];
  orderConnection?: Maybe<OrderConnection>;
  orderList: Array<Order>;
};


export type CustomerOrderConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  sort?: Maybe<SortConnectionOrderEnum>;
};


export type CustomerOrderListArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyOrderInput>;
};

export enum SortConnectionOrderEnum {
  IdDesc = '_ID_DESC',
  IdAsc = '_ID_ASC',
  OrderidDesc = 'ORDERID_DESC',
  OrderidAsc = 'ORDERID_ASC'
}

export enum SortFindManyOrderInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  OrderidAsc = 'ORDERID_ASC',
  OrderidDesc = 'ORDERID_DESC'
}

export type Employee = {
   __typename?: 'Employee';
  /** Category unique ID */
  employeeID?: Maybe<Scalars['Float']>;
  lastName?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  titleOfCourtesy?: Maybe<Scalars['String']>;
  birthDate?: Maybe<Scalars['Date']>;
  hireDate?: Maybe<Scalars['Date']>;
  address?: Maybe<CustomerAddress>;
  notes?: Maybe<Scalars['String']>;
  /** ID of chief */
  reportsTo?: Maybe<Scalars['Float']>;
  /** Attached territory ID from region collection */
  territoryIDs?: Maybe<Array<Maybe<Scalars['Float']>>>;
  _id: Scalars['MongoID'];
  chief?: Maybe<Employee>;
  subordinates: Array<Employee>;
  orderConnection?: Maybe<OrderConnection>;
};


export type EmployeeSubordinatesArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyEmployeeInput>;
};


export type EmployeeOrderConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  sort?: Maybe<SortConnectionOrderEnum>;
};

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

export type Shipper = {
   __typename?: 'Shipper';
  /** Shipper unique ID */
  shipperID?: Maybe<Scalars['Float']>;
  companyName?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  _id: Scalars['MongoID'];
  orderConnection?: Maybe<OrderConnection>;
};


export type ShipperOrderConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  sort?: Maybe<SortConnectionOrderEnum>;
};

export type Supplier = {
   __typename?: 'Supplier';
  /** Supplier unique ID */
  supplierID?: Maybe<Scalars['Float']>;
  companyName?: Maybe<Scalars['String']>;
  contactName?: Maybe<Scalars['String']>;
  contactTitle?: Maybe<Scalars['String']>;
  address?: Maybe<CustomerAddress>;
  _id: Scalars['MongoID'];
  productConnection?: Maybe<ProductConnection>;
};


export type SupplierProductConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  sort?: Maybe<SortConnectionProductEnum>;
};

export enum SortConnectionProductEnum {
  IdDesc = '_ID_DESC',
  IdAsc = '_ID_ASC',
  ProductidDesc = 'PRODUCTID_DESC',
  ProductidAsc = 'PRODUCTID_ASC',
  NameSupplieridDesc = 'NAME__SUPPLIERID_DESC',
  NameSupplieridAsc = 'NAME__SUPPLIERID_ASC'
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

export type FilterFindOneCategoryInput = {
  /** Category unique ID */
  categoryID?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindOneCategoryOperatorsInput>;
  OR?: Maybe<Array<FilterFindOneCategoryInput>>;
  AND?: Maybe<Array<FilterFindOneCategoryInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneCategoryOperatorsInput = {
  categoryID?: Maybe<FilterFindOneCategoryCategoryIdOperatorsInput>;
  name?: Maybe<FilterFindOneCategoryNameOperatorsInput>;
  _id?: Maybe<FilterFindOneCategory_IdOperatorsInput>;
};

export type FilterFindOneCategoryCategoryIdOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneCategoryNameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneCategory_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export enum SortFindOneCategoryInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  CategoryidAsc = 'CATEGORYID_ASC',
  CategoryidDesc = 'CATEGORYID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC'
}

export type FilterFindManyCategoryInput = {
  /** Category unique ID */
  categoryID?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindManyCategoryOperatorsInput>;
  OR?: Maybe<Array<FilterFindManyCategoryInput>>;
  AND?: Maybe<Array<FilterFindManyCategoryInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyCategoryOperatorsInput = {
  categoryID?: Maybe<FilterFindManyCategoryCategoryIdOperatorsInput>;
  name?: Maybe<FilterFindManyCategoryNameOperatorsInput>;
  _id?: Maybe<FilterFindManyCategory_IdOperatorsInput>;
};

export type FilterFindManyCategoryCategoryIdOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyCategoryNameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyCategory_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export enum SortFindManyCategoryInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  CategoryidAsc = 'CATEGORYID_ASC',
  CategoryidDesc = 'CATEGORYID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC'
}

export type FilterFindOneCustomerInput = {
  /** Customer unique ID */
  customerID?: Maybe<Scalars['String']>;
  companyName?: Maybe<Scalars['String']>;
  contactName?: Maybe<Scalars['String']>;
  contactTitle?: Maybe<Scalars['String']>;
  address?: Maybe<FilterFindOneCustomerAddressInput>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindOneCustomerOperatorsInput>;
  OR?: Maybe<Array<FilterFindOneCustomerInput>>;
  AND?: Maybe<Array<FilterFindOneCustomerInput>>;
};

export type FilterFindOneCustomerAddressInput = {
  street?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneCustomerOperatorsInput = {
  customerID?: Maybe<FilterFindOneCustomerCustomerIdOperatorsInput>;
  companyName?: Maybe<FilterFindOneCustomerCompanyNameOperatorsInput>;
  _id?: Maybe<FilterFindOneCustomer_IdOperatorsInput>;
};

export type FilterFindOneCustomerCustomerIdOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneCustomerCompanyNameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneCustomer_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export enum SortFindOneCustomerInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  CustomeridAsc = 'CUSTOMERID_ASC',
  CustomeridDesc = 'CUSTOMERID_DESC',
  CompanynameAsc = 'COMPANYNAME_ASC',
  CompanynameDesc = 'COMPANYNAME_DESC'
}

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

export type FilterFindManyCustomerInput = {
  /** Customer unique ID */
  customerID?: Maybe<Scalars['String']>;
  companyName?: Maybe<Scalars['String']>;
  contactName?: Maybe<Scalars['String']>;
  contactTitle?: Maybe<Scalars['String']>;
  address?: Maybe<FilterFindManyCustomerAddressInput>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindManyCustomerOperatorsInput>;
  OR?: Maybe<Array<FilterFindManyCustomerInput>>;
  AND?: Maybe<Array<FilterFindManyCustomerInput>>;
};

export type FilterFindManyCustomerAddressInput = {
  street?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyCustomerOperatorsInput = {
  customerID?: Maybe<FilterFindManyCustomerCustomerIdOperatorsInput>;
  companyName?: Maybe<FilterFindManyCustomerCompanyNameOperatorsInput>;
  _id?: Maybe<FilterFindManyCustomer_IdOperatorsInput>;
};

export type FilterFindManyCustomerCustomerIdOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyCustomerCompanyNameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyCustomer_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export enum SortFindManyCustomerInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  CustomeridAsc = 'CUSTOMERID_ASC',
  CustomeridDesc = 'CUSTOMERID_DESC',
  CompanynameAsc = 'COMPANYNAME_ASC',
  CompanynameDesc = 'COMPANYNAME_DESC'
}

/** A connection to a list of items. */
export type CustomerConnection = {
   __typename?: 'CustomerConnection';
  /** Total object count. */
  count: Scalars['Int'];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Information to aid in pagination. */
  edges: Array<CustomerEdge>;
};

/** An edge in a connection. */
export type CustomerEdge = {
   __typename?: 'CustomerEdge';
  /** The item at the end of the edge */
  node: Customer;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export enum SortConnectionCustomerEnum {
  IdDesc = '_ID_DESC',
  IdAsc = '_ID_ASC',
  CustomeridDesc = 'CUSTOMERID_DESC',
  CustomeridAsc = 'CUSTOMERID_ASC',
  CompanynameDesc = 'COMPANYNAME_DESC',
  CompanynameAsc = 'COMPANYNAME_ASC'
}

export type FilterFindOneEmployeeInput = {
  /** Category unique ID */
  employeeID?: Maybe<Scalars['Float']>;
  lastName?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  titleOfCourtesy?: Maybe<Scalars['String']>;
  birthDate?: Maybe<Scalars['Date']>;
  hireDate?: Maybe<Scalars['Date']>;
  address?: Maybe<FilterFindOneCustomerAddressInput>;
  notes?: Maybe<Scalars['String']>;
  /** ID of chief */
  reportsTo?: Maybe<Scalars['Float']>;
  /** Attached territory ID from region collection */
  territoryIDs?: Maybe<Array<Maybe<Scalars['Float']>>>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindOneEmployeeOperatorsInput>;
  OR?: Maybe<Array<FilterFindOneEmployeeInput>>;
  AND?: Maybe<Array<FilterFindOneEmployeeInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneEmployeeOperatorsInput = {
  employeeID?: Maybe<FilterFindOneEmployeeEmployeeIdOperatorsInput>;
  lastName?: Maybe<FilterFindOneEmployeeLastNameOperatorsInput>;
  territoryIDs?: Maybe<FilterFindOneEmployeeTerritoryIDsOperatorsInput>;
  _id?: Maybe<FilterFindOneEmployee_IdOperatorsInput>;
};

export type FilterFindOneEmployeeEmployeeIdOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneEmployeeLastNameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneEmployeeTerritoryIDsOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneEmployee_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

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

export type FilterFindManyEmployeeInput = {
  /** Category unique ID */
  employeeID?: Maybe<Scalars['Float']>;
  lastName?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  titleOfCourtesy?: Maybe<Scalars['String']>;
  birthDate?: Maybe<Scalars['Date']>;
  hireDate?: Maybe<Scalars['Date']>;
  address?: Maybe<FilterFindManyCustomerAddressInput>;
  notes?: Maybe<Scalars['String']>;
  /** ID of chief */
  reportsTo?: Maybe<Scalars['Float']>;
  /** Attached territory ID from region collection */
  territoryIDs?: Maybe<Array<Maybe<Scalars['Float']>>>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindManyEmployeeOperatorsInput>;
  OR?: Maybe<Array<FilterFindManyEmployeeInput>>;
  AND?: Maybe<Array<FilterFindManyEmployeeInput>>;
  /** Fulltext search with mongodb stemming and weights */
  fullTextSearch?: Maybe<Scalars['String']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyEmployeeOperatorsInput = {
  employeeID?: Maybe<FilterFindManyEmployeeEmployeeIdOperatorsInput>;
  lastName?: Maybe<FilterFindManyEmployeeLastNameOperatorsInput>;
  territoryIDs?: Maybe<FilterFindManyEmployeeTerritoryIDsOperatorsInput>;
  _id?: Maybe<FilterFindManyEmployee_IdOperatorsInput>;
};

export type FilterFindManyEmployeeEmployeeIdOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyEmployeeLastNameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyEmployeeTerritoryIDsOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyEmployee_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
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

export type FilterFindOneOrderInput = {
  /** Order unique ID */
  orderID?: Maybe<Scalars['Float']>;
  customerID?: Maybe<Scalars['String']>;
  employeeID?: Maybe<Scalars['Float']>;
  orderDate?: Maybe<Scalars['Date']>;
  requiredDate?: Maybe<Scalars['Date']>;
  shippedDate?: Maybe<Scalars['Date']>;
  shipVia?: Maybe<Scalars['Float']>;
  freight?: Maybe<Scalars['Float']>;
  shipName?: Maybe<Scalars['String']>;
  shipAddress?: Maybe<FilterFindOneCustomerAddressInput>;
  /** List of ordered products */
  details?: Maybe<Array<Maybe<FilterFindOneOrderDetailsInput>>>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindOneOrderOperatorsInput>;
  OR?: Maybe<Array<FilterFindOneOrderInput>>;
  AND?: Maybe<Array<FilterFindOneOrderInput>>;
};

export type FilterFindOneOrderDetailsInput = {
  productID?: Maybe<Scalars['Float']>;
  unitPrice?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  discount?: Maybe<Scalars['Float']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneOrderOperatorsInput = {
  orderID?: Maybe<FilterFindOneOrderOrderIdOperatorsInput>;
  _id?: Maybe<FilterFindOneOrder_IdOperatorsInput>;
};

export type FilterFindOneOrderOrderIdOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneOrder_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export enum SortFindOneOrderInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  OrderidAsc = 'ORDERID_ASC',
  OrderidDesc = 'ORDERID_DESC'
}

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

export type FilterFindManyOrderInput = {
  /** Order unique ID */
  orderID?: Maybe<Scalars['Float']>;
  customerID?: Maybe<Scalars['String']>;
  employeeID?: Maybe<Scalars['Float']>;
  orderDate?: Maybe<Scalars['Date']>;
  requiredDate?: Maybe<Scalars['Date']>;
  shippedDate?: Maybe<Scalars['Date']>;
  shipVia?: Maybe<Scalars['Float']>;
  freight?: Maybe<Scalars['Float']>;
  shipName?: Maybe<Scalars['String']>;
  shipAddress?: Maybe<FilterFindManyCustomerAddressInput>;
  /** List of ordered products */
  details?: Maybe<Array<Maybe<FilterFindManyOrderDetailsInput>>>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindManyOrderOperatorsInput>;
  OR?: Maybe<Array<FilterFindManyOrderInput>>;
  AND?: Maybe<Array<FilterFindManyOrderInput>>;
};

export type FilterFindManyOrderDetailsInput = {
  productID?: Maybe<Scalars['Float']>;
  unitPrice?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  discount?: Maybe<Scalars['Float']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyOrderOperatorsInput = {
  orderID?: Maybe<FilterFindManyOrderOrderIdOperatorsInput>;
  _id?: Maybe<FilterFindManyOrder_IdOperatorsInput>;
};

export type FilterFindManyOrderOrderIdOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyOrder_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneProductInput = {
  /** Unique product id */
  productID?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  supplierID?: Maybe<Scalars['Float']>;
  categoryID?: Maybe<Scalars['Float']>;
  quantityPerUnit?: Maybe<Scalars['String']>;
  unitPrice?: Maybe<Scalars['Float']>;
  unitsInStock?: Maybe<Scalars['Float']>;
  unitsOnOrder?: Maybe<Scalars['Float']>;
  reorderLevel?: Maybe<Scalars['Float']>;
  discontinued?: Maybe<Scalars['Boolean']>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindOneProductOperatorsInput>;
  OR?: Maybe<Array<FilterFindOneProductInput>>;
  AND?: Maybe<Array<FilterFindOneProductInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneProductOperatorsInput = {
  productID?: Maybe<FilterFindOneProductProductIdOperatorsInput>;
  name?: Maybe<FilterFindOneProductNameOperatorsInput>;
  unitPrice?: Maybe<FilterFindOneProductUnitPriceOperatorsInput>;
  _id?: Maybe<FilterFindOneProduct_IdOperatorsInput>;
};

export type FilterFindOneProductProductIdOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneProductNameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneProductUnitPriceOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneProduct_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

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

export type FilterFindManyProductInput = {
  /** Unique product id */
  productID?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  supplierID?: Maybe<Scalars['Float']>;
  categoryID?: Maybe<Scalars['Float']>;
  quantityPerUnit?: Maybe<Scalars['String']>;
  unitPrice?: Maybe<Scalars['Float']>;
  unitsInStock?: Maybe<Scalars['Float']>;
  unitsOnOrder?: Maybe<Scalars['Float']>;
  reorderLevel?: Maybe<Scalars['Float']>;
  discontinued?: Maybe<Scalars['Boolean']>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindManyProductOperatorsInput>;
  OR?: Maybe<Array<FilterFindManyProductInput>>;
  AND?: Maybe<Array<FilterFindManyProductInput>>;
  /** Search by regExp */
  nameRegexp?: Maybe<Scalars['String']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyProductOperatorsInput = {
  productID?: Maybe<FilterFindManyProductProductIdOperatorsInput>;
  name?: Maybe<FilterFindManyProductNameOperatorsInput>;
  unitPrice?: Maybe<FilterFindManyProductUnitPriceOperatorsInput>;
  _id?: Maybe<FilterFindManyProduct_IdOperatorsInput>;
};

export type FilterFindManyProductProductIdOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyProductNameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyProductUnitPriceOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyProduct_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
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

export type Region = {
   __typename?: 'Region';
  /** Region unique ID */
  regionID?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  territories?: Maybe<Array<Maybe<RegionTerritories>>>;
  _id: Scalars['MongoID'];
  employees: Array<Employee>;
};


export type RegionEmployeesArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyEmployeeInput>;
};

export type RegionTerritories = {
   __typename?: 'RegionTerritories';
  territoryID?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
};

export type FilterFindOneRegionInput = {
  /** Region unique ID */
  regionID?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  territories?: Maybe<Array<Maybe<FilterFindOneRegionTerritoriesInput>>>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindOneRegionOperatorsInput>;
  OR?: Maybe<Array<FilterFindOneRegionInput>>;
  AND?: Maybe<Array<FilterFindOneRegionInput>>;
};

export type FilterFindOneRegionTerritoriesInput = {
  territoryID?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneRegionOperatorsInput = {
  regionID?: Maybe<FilterFindOneRegionRegionIdOperatorsInput>;
  _id?: Maybe<FilterFindOneRegion_IdOperatorsInput>;
};

export type FilterFindOneRegionRegionIdOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneRegion_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export enum SortFindOneRegionInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  RegionidAsc = 'REGIONID_ASC',
  RegionidDesc = 'REGIONID_DESC'
}

export type FilterFindManyRegionInput = {
  /** Region unique ID */
  regionID?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  territories?: Maybe<Array<Maybe<FilterFindManyRegionTerritoriesInput>>>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindManyRegionOperatorsInput>;
  OR?: Maybe<Array<FilterFindManyRegionInput>>;
  AND?: Maybe<Array<FilterFindManyRegionInput>>;
};

export type FilterFindManyRegionTerritoriesInput = {
  territoryID?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyRegionOperatorsInput = {
  regionID?: Maybe<FilterFindManyRegionRegionIdOperatorsInput>;
  _id?: Maybe<FilterFindManyRegion_IdOperatorsInput>;
};

export type FilterFindManyRegionRegionIdOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyRegion_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export enum SortFindManyRegionInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  RegionidAsc = 'REGIONID_ASC',
  RegionidDesc = 'REGIONID_DESC'
}

export type FilterFindOneShipperInput = {
  /** Shipper unique ID */
  shipperID?: Maybe<Scalars['Float']>;
  companyName?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindOneShipperOperatorsInput>;
  OR?: Maybe<Array<FilterFindOneShipperInput>>;
  AND?: Maybe<Array<FilterFindOneShipperInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneShipperOperatorsInput = {
  shipperID?: Maybe<FilterFindOneShipperShipperIdOperatorsInput>;
  _id?: Maybe<FilterFindOneShipper_IdOperatorsInput>;
};

export type FilterFindOneShipperShipperIdOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneShipper_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export enum SortFindOneShipperInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  ShipperidAsc = 'SHIPPERID_ASC',
  ShipperidDesc = 'SHIPPERID_DESC'
}

export type FilterFindManyShipperInput = {
  /** Shipper unique ID */
  shipperID?: Maybe<Scalars['Float']>;
  companyName?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindManyShipperOperatorsInput>;
  OR?: Maybe<Array<FilterFindManyShipperInput>>;
  AND?: Maybe<Array<FilterFindManyShipperInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyShipperOperatorsInput = {
  shipperID?: Maybe<FilterFindManyShipperShipperIdOperatorsInput>;
  _id?: Maybe<FilterFindManyShipper_IdOperatorsInput>;
};

export type FilterFindManyShipperShipperIdOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyShipper_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export enum SortFindManyShipperInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  ShipperidAsc = 'SHIPPERID_ASC',
  ShipperidDesc = 'SHIPPERID_DESC'
}

export type FilterFindOneSupplierInput = {
  /** Supplier unique ID */
  supplierID?: Maybe<Scalars['Float']>;
  companyName?: Maybe<Scalars['String']>;
  contactName?: Maybe<Scalars['String']>;
  contactTitle?: Maybe<Scalars['String']>;
  address?: Maybe<FilterFindOneCustomerAddressInput>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindOneSupplierOperatorsInput>;
  OR?: Maybe<Array<FilterFindOneSupplierInput>>;
  AND?: Maybe<Array<FilterFindOneSupplierInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneSupplierOperatorsInput = {
  supplierID?: Maybe<FilterFindOneSupplierSupplierIdOperatorsInput>;
  companyName?: Maybe<FilterFindOneSupplierCompanyNameOperatorsInput>;
  _id?: Maybe<FilterFindOneSupplier_IdOperatorsInput>;
};

export type FilterFindOneSupplierSupplierIdOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneSupplierCompanyNameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneSupplier_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export enum SortFindOneSupplierInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  SupplieridAsc = 'SUPPLIERID_ASC',
  SupplieridDesc = 'SUPPLIERID_DESC',
  CompanynameAsc = 'COMPANYNAME_ASC',
  CompanynameDesc = 'COMPANYNAME_DESC'
}

/** A connection to a list of items. */
export type SupplierConnection = {
   __typename?: 'SupplierConnection';
  /** Total object count. */
  count: Scalars['Int'];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Information to aid in pagination. */
  edges: Array<SupplierEdge>;
};

/** An edge in a connection. */
export type SupplierEdge = {
   __typename?: 'SupplierEdge';
  /** The item at the end of the edge */
  node: Supplier;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type FilterFindManySupplierInput = {
  /** Supplier unique ID */
  supplierID?: Maybe<Scalars['Float']>;
  companyName?: Maybe<Scalars['String']>;
  contactName?: Maybe<Scalars['String']>;
  contactTitle?: Maybe<Scalars['String']>;
  address?: Maybe<FilterFindManyCustomerAddressInput>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindManySupplierOperatorsInput>;
  OR?: Maybe<Array<FilterFindManySupplierInput>>;
  AND?: Maybe<Array<FilterFindManySupplierInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManySupplierOperatorsInput = {
  supplierID?: Maybe<FilterFindManySupplierSupplierIdOperatorsInput>;
  companyName?: Maybe<FilterFindManySupplierCompanyNameOperatorsInput>;
  _id?: Maybe<FilterFindManySupplier_IdOperatorsInput>;
};

export type FilterFindManySupplierSupplierIdOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManySupplierCompanyNameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManySupplier_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export enum SortConnectionSupplierEnum {
  IdDesc = '_ID_DESC',
  IdAsc = '_ID_ASC',
  SupplieridDesc = 'SUPPLIERID_DESC',
  SupplieridAsc = 'SUPPLIERID_ASC',
  CompanynameDesc = 'COMPANYNAME_DESC',
  CompanynameAsc = 'COMPANYNAME_ASC'
}

export type Mutation = {
   __typename?: 'Mutation';
  /** Create one document with mongoose defaults, setters, hooks and validation */
  userCreate?: Maybe<CreateOneUserPayload>;
  /** Creates Many documents with mongoose defaults, setters, hooks and validation */
  userCreateMany?: Maybe<CreateManyUserPayload>;
  /** Update one document: 1) Retrieve one document by findById. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  userUpdateById?: Maybe<UpdateByIdUserPayload>;
  /** Update one document: 1) Retrieve one document via findOne. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  userUpdateOne?: Maybe<UpdateOneUserPayload>;
  /** Update many documents without returning them: Use Query.update mongoose method. Do not apply mongoose defaults, setters, hooks and validation.  */
  userUpdateMany?: Maybe<UpdateManyUserPayload>;
  /** Remove one document: 1) Retrieve one document and remove with hooks via findByIdAndRemove. 2) Return removed document. */
  userRemoveById?: Maybe<RemoveByIdUserPayload>;
  /** Remove one document: 1) Remove with hooks via findOneAndRemove. 2) Return removed document. */
  userRemoveOne?: Maybe<RemoveOneUserPayload>;
  /** Remove many documents without returning them: Use Query.remove mongoose method. Do not apply mongoose defaults, setters, hooks and validation.  */
  userRemoveMany?: Maybe<RemoveManyUserPayload>;
  /** Create one document with mongoose defaults, setters, hooks and validation */
  createProduct?: Maybe<CreateOneProductPayload>;
  /** Update one document: 1) Retrieve one document by findById. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  updateProduct?: Maybe<UpdateByIdProductPayload>;
  /** Remove one document: 1) Remove with hooks via findOneAndRemove. 2) Return removed document. */
  removeProduct?: Maybe<RemoveOneProductPayload>;
  /** Create one document with mongoose defaults, setters, hooks and validation */
  createOrder?: Maybe<CreateOneOrderPayload>;
  /** Update one document: 1) Retrieve one document by findById. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  updateOrder?: Maybe<UpdateByIdOrderPayload>;
  /** Remove one document: 1) Remove with hooks via findOneAndRemove. 2) Return removed document. */
  removeOrder?: Maybe<RemoveOneOrderPayload>;
  /** Update one document: 1) Retrieve one document by findById. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  updateEmployee?: Maybe<UpdateByIdEmployeePayload>;
  /** Remove all data and seed DB from scratch. Anyway data automatically reloaded every 30 minutes. */
  resetData?: Maybe<Scalars['String']>;
};


export type MutationUserCreateArgs = {
  record: CreateOneUserInput;
};


export type MutationUserCreateManyArgs = {
  records: Array<CreateManyUserInput>;
};


export type MutationUserUpdateByIdArgs = {
  _id: Scalars['MongoID'];
  record: UpdateByIdUserInput;
};


export type MutationUserUpdateOneArgs = {
  record: UpdateOneUserInput;
  filter?: Maybe<FilterUpdateOneUserInput>;
  sort?: Maybe<SortUpdateOneUserInput>;
  skip?: Maybe<Scalars['Int']>;
};


export type MutationUserUpdateManyArgs = {
  record: UpdateManyUserInput;
  filter?: Maybe<FilterUpdateManyUserInput>;
  sort?: Maybe<SortUpdateManyUserInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type MutationUserRemoveByIdArgs = {
  _id: Scalars['MongoID'];
};


export type MutationUserRemoveOneArgs = {
  filter?: Maybe<FilterRemoveOneUserInput>;
  sort?: Maybe<SortRemoveOneUserInput>;
};


export type MutationUserRemoveManyArgs = {
  filter: FilterRemoveManyUserInput;
  limit?: Maybe<Scalars['Int']>;
};


export type MutationCreateProductArgs = {
  record: CreateOneProductInput;
};


export type MutationUpdateProductArgs = {
  _id: Scalars['MongoID'];
  record: UpdateByIdProductInput;
};


export type MutationRemoveProductArgs = {
  filter?: Maybe<FilterRemoveOneProductInput>;
  sort?: Maybe<SortRemoveOneProductInput>;
};


export type MutationCreateOrderArgs = {
  record: CreateOneOrderInput;
};


export type MutationUpdateOrderArgs = {
  _id: Scalars['MongoID'];
  record: UpdateByIdOrderInput;
};


export type MutationRemoveOrderArgs = {
  filter?: Maybe<FilterRemoveOneOrderInput>;
  sort?: Maybe<SortRemoveOneOrderInput>;
};


export type MutationUpdateEmployeeArgs = {
  _id: Scalars['MongoID'];
  record: UpdateByIdEmployeeInput;
};

export type CreateOneUserPayload = {
   __typename?: 'CreateOneUserPayload';
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Created document */
  record?: Maybe<User>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type CreateOneUserInput = {
  name?: Maybe<Scalars['String']>;
  age?: Maybe<Scalars['Float']>;
  languages?: Maybe<Array<Maybe<UserLanguagesInput>>>;
  contacts?: Maybe<UserContactsInput>;
  gender?: Maybe<EnumUserGender>;
  address?: Maybe<UserAddressInput>;
  /** Some dynamic data */
  someMixed?: Maybe<Scalars['JSON']>;
  salaryDecimal?: Maybe<Scalars['BSONDecimal']>;
};

export type UserLanguagesInput = {
  language?: Maybe<Scalars['String']>;
  skill?: Maybe<EnumUserLanguagesSkill>;
};

export type UserContactsInput = {
  email?: Maybe<Scalars['String']>;
  phones?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type UserAddressInput = {
  street?: Maybe<Scalars['String']>;
  geo?: Maybe<Array<Maybe<Scalars['Float']>>>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type CreateManyUserPayload = {
   __typename?: 'CreateManyUserPayload';
  /** Documents IDs */
  recordIds: Array<Scalars['MongoID']>;
  /** Created documents */
  records?: Maybe<Array<User>>;
  /** Number of created documents */
  createdCount: Scalars['Int'];
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type CreateManyUserInput = {
  name?: Maybe<Scalars['String']>;
  age?: Maybe<Scalars['Float']>;
  languages?: Maybe<Array<Maybe<UserLanguagesInput>>>;
  contacts?: Maybe<UserContactsInput>;
  gender?: Maybe<EnumUserGender>;
  address?: Maybe<UserAddressInput>;
  /** Some dynamic data */
  someMixed?: Maybe<Scalars['JSON']>;
  salaryDecimal?: Maybe<Scalars['BSONDecimal']>;
};

export type UpdateByIdUserPayload = {
   __typename?: 'UpdateByIdUserPayload';
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Updated document */
  record?: Maybe<User>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type UpdateByIdUserInput = {
  name?: Maybe<Scalars['String']>;
  age?: Maybe<Scalars['Float']>;
  languages?: Maybe<Array<Maybe<UpdateByIdUserLanguagesInput>>>;
  contacts?: Maybe<UpdateByIdUserContactsInput>;
  gender?: Maybe<EnumUserGender>;
  address?: Maybe<UpdateByIdUserAddressInput>;
  /** Some dynamic data */
  someMixed?: Maybe<Scalars['JSON']>;
  salaryDecimal?: Maybe<Scalars['BSONDecimal']>;
};

export type UpdateByIdUserLanguagesInput = {
  language?: Maybe<Scalars['String']>;
  skill?: Maybe<EnumUserLanguagesSkill>;
};

export type UpdateByIdUserContactsInput = {
  email?: Maybe<Scalars['String']>;
  phones?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type UpdateByIdUserAddressInput = {
  street?: Maybe<Scalars['String']>;
  geo?: Maybe<Array<Maybe<Scalars['Float']>>>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type UpdateOneUserPayload = {
   __typename?: 'UpdateOneUserPayload';
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Updated document */
  record?: Maybe<User>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type UpdateOneUserInput = {
  name?: Maybe<Scalars['String']>;
  age?: Maybe<Scalars['Float']>;
  languages?: Maybe<Array<Maybe<UpdateOneUserLanguagesInput>>>;
  contacts?: Maybe<UpdateOneUserContactsInput>;
  gender?: Maybe<EnumUserGender>;
  address?: Maybe<UpdateOneUserAddressInput>;
  /** Some dynamic data */
  someMixed?: Maybe<Scalars['JSON']>;
  salaryDecimal?: Maybe<Scalars['BSONDecimal']>;
};

export type UpdateOneUserLanguagesInput = {
  language?: Maybe<Scalars['String']>;
  skill?: Maybe<EnumUserLanguagesSkill>;
};

export type UpdateOneUserContactsInput = {
  email?: Maybe<Scalars['String']>;
  phones?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type UpdateOneUserAddressInput = {
  street?: Maybe<Scalars['String']>;
  geo?: Maybe<Array<Maybe<Scalars['Float']>>>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterUpdateOneUserInput = {
  name?: Maybe<Scalars['String']>;
  age?: Maybe<Scalars['Float']>;
  languages?: Maybe<Array<Maybe<FilterUpdateOneUserLanguagesInput>>>;
  contacts?: Maybe<FilterUpdateOneUserContactsInput>;
  gender?: Maybe<EnumUserGender>;
  address?: Maybe<FilterUpdateOneUserAddressInput>;
  /** Some dynamic data */
  someMixed?: Maybe<Scalars['JSON']>;
  salaryDecimal?: Maybe<Scalars['BSONDecimal']>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterUpdateOneUserOperatorsInput>;
  OR?: Maybe<Array<FilterUpdateOneUserInput>>;
  AND?: Maybe<Array<FilterUpdateOneUserInput>>;
};

export type FilterUpdateOneUserLanguagesInput = {
  language?: Maybe<Scalars['String']>;
  skill?: Maybe<EnumUserLanguagesSkill>;
};

export type FilterUpdateOneUserContactsInput = {
  email?: Maybe<Scalars['String']>;
  phones?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FilterUpdateOneUserAddressInput = {
  street?: Maybe<Scalars['String']>;
  geo?: Maybe<Array<Maybe<Scalars['Float']>>>;
  _id?: Maybe<Scalars['MongoID']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterUpdateOneUserOperatorsInput = {
  name?: Maybe<FilterUpdateOneUserNameOperatorsInput>;
  age?: Maybe<FilterUpdateOneUserAgeOperatorsInput>;
  gender?: Maybe<FilterUpdateOneUserGenderOperatorsInput>;
  salaryDecimal?: Maybe<FilterUpdateOneUserSalaryDecimalOperatorsInput>;
  _id?: Maybe<FilterUpdateOneUser_IdOperatorsInput>;
};

export type FilterUpdateOneUserNameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterUpdateOneUserAgeOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterUpdateOneUserGenderOperatorsInput = {
  gt?: Maybe<EnumUserGender>;
  gte?: Maybe<EnumUserGender>;
  lt?: Maybe<EnumUserGender>;
  lte?: Maybe<EnumUserGender>;
  ne?: Maybe<EnumUserGender>;
  in?: Maybe<Array<Maybe<EnumUserGender>>>;
  nin?: Maybe<Array<Maybe<EnumUserGender>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterUpdateOneUserSalaryDecimalOperatorsInput = {
  gt?: Maybe<Scalars['BSONDecimal']>;
  gte?: Maybe<Scalars['BSONDecimal']>;
  lt?: Maybe<Scalars['BSONDecimal']>;
  lte?: Maybe<Scalars['BSONDecimal']>;
  ne?: Maybe<Scalars['BSONDecimal']>;
  in?: Maybe<Array<Maybe<Scalars['BSONDecimal']>>>;
  nin?: Maybe<Array<Maybe<Scalars['BSONDecimal']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterUpdateOneUser_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export enum SortUpdateOneUserInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  AgeAsc = 'AGE_ASC',
  AgeDesc = 'AGE_DESC',
  SalarydecimalAsc = 'SALARYDECIMAL_ASC',
  SalarydecimalDesc = 'SALARYDECIMAL_DESC',
  GenderAsc = 'GENDER_ASC',
  GenderDesc = 'GENDER_DESC',
  GenderAgeAsc = 'GENDER__AGE_ASC',
  GenderAgeDesc = 'GENDER__AGE_DESC'
}

export type UpdateManyUserPayload = {
   __typename?: 'UpdateManyUserPayload';
  /** Affected documents number */
  numAffected?: Maybe<Scalars['Int']>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type UpdateManyUserInput = {
  name?: Maybe<Scalars['String']>;
  age?: Maybe<Scalars['Float']>;
  languages?: Maybe<Array<Maybe<UpdateManyUserLanguagesInput>>>;
  contacts?: Maybe<UpdateManyUserContactsInput>;
  gender?: Maybe<EnumUserGender>;
  address?: Maybe<UpdateManyUserAddressInput>;
  /** Some dynamic data */
  someMixed?: Maybe<Scalars['JSON']>;
  salaryDecimal?: Maybe<Scalars['BSONDecimal']>;
};

export type UpdateManyUserLanguagesInput = {
  language?: Maybe<Scalars['String']>;
  skill?: Maybe<EnumUserLanguagesSkill>;
};

export type UpdateManyUserContactsInput = {
  email?: Maybe<Scalars['String']>;
  phones?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type UpdateManyUserAddressInput = {
  street?: Maybe<Scalars['String']>;
  geo?: Maybe<Array<Maybe<Scalars['Float']>>>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterUpdateManyUserInput = {
  name?: Maybe<Scalars['String']>;
  age?: Maybe<Scalars['Float']>;
  languages?: Maybe<Array<Maybe<FilterUpdateManyUserLanguagesInput>>>;
  contacts?: Maybe<FilterUpdateManyUserContactsInput>;
  gender?: Maybe<EnumUserGender>;
  address?: Maybe<FilterUpdateManyUserAddressInput>;
  /** Some dynamic data */
  someMixed?: Maybe<Scalars['JSON']>;
  salaryDecimal?: Maybe<Scalars['BSONDecimal']>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterUpdateManyUserOperatorsInput>;
  OR?: Maybe<Array<FilterUpdateManyUserInput>>;
  AND?: Maybe<Array<FilterUpdateManyUserInput>>;
};

export type FilterUpdateManyUserLanguagesInput = {
  language?: Maybe<Scalars['String']>;
  skill?: Maybe<EnumUserLanguagesSkill>;
};

export type FilterUpdateManyUserContactsInput = {
  email?: Maybe<Scalars['String']>;
  phones?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FilterUpdateManyUserAddressInput = {
  street?: Maybe<Scalars['String']>;
  geo?: Maybe<Array<Maybe<Scalars['Float']>>>;
  _id?: Maybe<Scalars['MongoID']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterUpdateManyUserOperatorsInput = {
  name?: Maybe<FilterUpdateManyUserNameOperatorsInput>;
  age?: Maybe<FilterUpdateManyUserAgeOperatorsInput>;
  gender?: Maybe<FilterUpdateManyUserGenderOperatorsInput>;
  salaryDecimal?: Maybe<FilterUpdateManyUserSalaryDecimalOperatorsInput>;
  _id?: Maybe<FilterUpdateManyUser_IdOperatorsInput>;
};

export type FilterUpdateManyUserNameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterUpdateManyUserAgeOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterUpdateManyUserGenderOperatorsInput = {
  gt?: Maybe<EnumUserGender>;
  gte?: Maybe<EnumUserGender>;
  lt?: Maybe<EnumUserGender>;
  lte?: Maybe<EnumUserGender>;
  ne?: Maybe<EnumUserGender>;
  in?: Maybe<Array<Maybe<EnumUserGender>>>;
  nin?: Maybe<Array<Maybe<EnumUserGender>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterUpdateManyUserSalaryDecimalOperatorsInput = {
  gt?: Maybe<Scalars['BSONDecimal']>;
  gte?: Maybe<Scalars['BSONDecimal']>;
  lt?: Maybe<Scalars['BSONDecimal']>;
  lte?: Maybe<Scalars['BSONDecimal']>;
  ne?: Maybe<Scalars['BSONDecimal']>;
  in?: Maybe<Array<Maybe<Scalars['BSONDecimal']>>>;
  nin?: Maybe<Array<Maybe<Scalars['BSONDecimal']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterUpdateManyUser_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export enum SortUpdateManyUserInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  AgeAsc = 'AGE_ASC',
  AgeDesc = 'AGE_DESC',
  SalarydecimalAsc = 'SALARYDECIMAL_ASC',
  SalarydecimalDesc = 'SALARYDECIMAL_DESC',
  GenderAsc = 'GENDER_ASC',
  GenderDesc = 'GENDER_DESC',
  GenderAgeAsc = 'GENDER__AGE_ASC',
  GenderAgeDesc = 'GENDER__AGE_DESC'
}

export type RemoveByIdUserPayload = {
   __typename?: 'RemoveByIdUserPayload';
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Removed document */
  record?: Maybe<User>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type RemoveOneUserPayload = {
   __typename?: 'RemoveOneUserPayload';
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Removed document */
  record?: Maybe<User>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type FilterRemoveOneUserInput = {
  name?: Maybe<Scalars['String']>;
  age?: Maybe<Scalars['Float']>;
  languages?: Maybe<Array<Maybe<FilterRemoveOneUserLanguagesInput>>>;
  contacts?: Maybe<FilterRemoveOneUserContactsInput>;
  gender?: Maybe<EnumUserGender>;
  address?: Maybe<FilterRemoveOneUserAddressInput>;
  /** Some dynamic data */
  someMixed?: Maybe<Scalars['JSON']>;
  salaryDecimal?: Maybe<Scalars['BSONDecimal']>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterRemoveOneUserOperatorsInput>;
  OR?: Maybe<Array<FilterRemoveOneUserInput>>;
  AND?: Maybe<Array<FilterRemoveOneUserInput>>;
};

export type FilterRemoveOneUserLanguagesInput = {
  language?: Maybe<Scalars['String']>;
  skill?: Maybe<EnumUserLanguagesSkill>;
};

export type FilterRemoveOneUserContactsInput = {
  email?: Maybe<Scalars['String']>;
  phones?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FilterRemoveOneUserAddressInput = {
  street?: Maybe<Scalars['String']>;
  geo?: Maybe<Array<Maybe<Scalars['Float']>>>;
  _id?: Maybe<Scalars['MongoID']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterRemoveOneUserOperatorsInput = {
  name?: Maybe<FilterRemoveOneUserNameOperatorsInput>;
  age?: Maybe<FilterRemoveOneUserAgeOperatorsInput>;
  gender?: Maybe<FilterRemoveOneUserGenderOperatorsInput>;
  salaryDecimal?: Maybe<FilterRemoveOneUserSalaryDecimalOperatorsInput>;
  _id?: Maybe<FilterRemoveOneUser_IdOperatorsInput>;
};

export type FilterRemoveOneUserNameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterRemoveOneUserAgeOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterRemoveOneUserGenderOperatorsInput = {
  gt?: Maybe<EnumUserGender>;
  gte?: Maybe<EnumUserGender>;
  lt?: Maybe<EnumUserGender>;
  lte?: Maybe<EnumUserGender>;
  ne?: Maybe<EnumUserGender>;
  in?: Maybe<Array<Maybe<EnumUserGender>>>;
  nin?: Maybe<Array<Maybe<EnumUserGender>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterRemoveOneUserSalaryDecimalOperatorsInput = {
  gt?: Maybe<Scalars['BSONDecimal']>;
  gte?: Maybe<Scalars['BSONDecimal']>;
  lt?: Maybe<Scalars['BSONDecimal']>;
  lte?: Maybe<Scalars['BSONDecimal']>;
  ne?: Maybe<Scalars['BSONDecimal']>;
  in?: Maybe<Array<Maybe<Scalars['BSONDecimal']>>>;
  nin?: Maybe<Array<Maybe<Scalars['BSONDecimal']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterRemoveOneUser_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export enum SortRemoveOneUserInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  AgeAsc = 'AGE_ASC',
  AgeDesc = 'AGE_DESC',
  SalarydecimalAsc = 'SALARYDECIMAL_ASC',
  SalarydecimalDesc = 'SALARYDECIMAL_DESC',
  GenderAsc = 'GENDER_ASC',
  GenderDesc = 'GENDER_DESC',
  GenderAgeAsc = 'GENDER__AGE_ASC',
  GenderAgeDesc = 'GENDER__AGE_DESC'
}

export type RemoveManyUserPayload = {
   __typename?: 'RemoveManyUserPayload';
  /** Affected documents number */
  numAffected?: Maybe<Scalars['Int']>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type FilterRemoveManyUserInput = {
  name?: Maybe<Scalars['String']>;
  age?: Maybe<Scalars['Float']>;
  languages?: Maybe<Array<Maybe<FilterRemoveManyUserLanguagesInput>>>;
  contacts?: Maybe<FilterRemoveManyUserContactsInput>;
  gender?: Maybe<EnumUserGender>;
  address?: Maybe<FilterRemoveManyUserAddressInput>;
  /** Some dynamic data */
  someMixed?: Maybe<Scalars['JSON']>;
  salaryDecimal?: Maybe<Scalars['BSONDecimal']>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterRemoveManyUserOperatorsInput>;
  OR?: Maybe<Array<FilterRemoveManyUserInput>>;
  AND?: Maybe<Array<FilterRemoveManyUserInput>>;
};

export type FilterRemoveManyUserLanguagesInput = {
  language?: Maybe<Scalars['String']>;
  skill?: Maybe<EnumUserLanguagesSkill>;
};

export type FilterRemoveManyUserContactsInput = {
  email?: Maybe<Scalars['String']>;
  phones?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FilterRemoveManyUserAddressInput = {
  street?: Maybe<Scalars['String']>;
  geo?: Maybe<Array<Maybe<Scalars['Float']>>>;
  _id?: Maybe<Scalars['MongoID']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterRemoveManyUserOperatorsInput = {
  name?: Maybe<FilterRemoveManyUserNameOperatorsInput>;
  age?: Maybe<FilterRemoveManyUserAgeOperatorsInput>;
  gender?: Maybe<FilterRemoveManyUserGenderOperatorsInput>;
  salaryDecimal?: Maybe<FilterRemoveManyUserSalaryDecimalOperatorsInput>;
  _id?: Maybe<FilterRemoveManyUser_IdOperatorsInput>;
};

export type FilterRemoveManyUserNameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterRemoveManyUserAgeOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterRemoveManyUserGenderOperatorsInput = {
  gt?: Maybe<EnumUserGender>;
  gte?: Maybe<EnumUserGender>;
  lt?: Maybe<EnumUserGender>;
  lte?: Maybe<EnumUserGender>;
  ne?: Maybe<EnumUserGender>;
  in?: Maybe<Array<Maybe<EnumUserGender>>>;
  nin?: Maybe<Array<Maybe<EnumUserGender>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterRemoveManyUserSalaryDecimalOperatorsInput = {
  gt?: Maybe<Scalars['BSONDecimal']>;
  gte?: Maybe<Scalars['BSONDecimal']>;
  lt?: Maybe<Scalars['BSONDecimal']>;
  lte?: Maybe<Scalars['BSONDecimal']>;
  ne?: Maybe<Scalars['BSONDecimal']>;
  in?: Maybe<Array<Maybe<Scalars['BSONDecimal']>>>;
  nin?: Maybe<Array<Maybe<Scalars['BSONDecimal']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterRemoveManyUser_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type CreateOneProductPayload = {
   __typename?: 'CreateOneProductPayload';
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Created document */
  record?: Maybe<Product>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  query?: Maybe<Query>;
};

export type CreateOneProductInput = {
  /** Unique product id */
  productID?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  supplierID?: Maybe<Scalars['Float']>;
  categoryID?: Maybe<Scalars['Float']>;
  quantityPerUnit?: Maybe<Scalars['String']>;
  unitPrice?: Maybe<Scalars['Float']>;
  unitsInStock?: Maybe<Scalars['Float']>;
  unitsOnOrder?: Maybe<Scalars['Float']>;
  reorderLevel?: Maybe<Scalars['Float']>;
  discontinued?: Maybe<Scalars['Boolean']>;
};

export type UpdateByIdProductPayload = {
   __typename?: 'UpdateByIdProductPayload';
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Updated document */
  record?: Maybe<Product>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  query?: Maybe<Query>;
};

export type UpdateByIdProductInput = {
  /** Unique product id */
  productID?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  supplierID?: Maybe<Scalars['Float']>;
  categoryID?: Maybe<Scalars['Float']>;
  quantityPerUnit?: Maybe<Scalars['String']>;
  unitPrice?: Maybe<Scalars['Float']>;
  unitsInStock?: Maybe<Scalars['Float']>;
  unitsOnOrder?: Maybe<Scalars['Float']>;
  reorderLevel?: Maybe<Scalars['Float']>;
  discontinued?: Maybe<Scalars['Boolean']>;
};

export type RemoveOneProductPayload = {
   __typename?: 'RemoveOneProductPayload';
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Removed document */
  record?: Maybe<Product>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  query?: Maybe<Query>;
};

export type FilterRemoveOneProductInput = {
  /** Unique product id */
  productID?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  supplierID?: Maybe<Scalars['Float']>;
  categoryID?: Maybe<Scalars['Float']>;
  quantityPerUnit?: Maybe<Scalars['String']>;
  unitPrice?: Maybe<Scalars['Float']>;
  unitsInStock?: Maybe<Scalars['Float']>;
  unitsOnOrder?: Maybe<Scalars['Float']>;
  reorderLevel?: Maybe<Scalars['Float']>;
  discontinued?: Maybe<Scalars['Boolean']>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterRemoveOneProductOperatorsInput>;
  OR?: Maybe<Array<FilterRemoveOneProductInput>>;
  AND?: Maybe<Array<FilterRemoveOneProductInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterRemoveOneProductOperatorsInput = {
  productID?: Maybe<FilterRemoveOneProductProductIdOperatorsInput>;
  name?: Maybe<FilterRemoveOneProductNameOperatorsInput>;
  unitPrice?: Maybe<FilterRemoveOneProductUnitPriceOperatorsInput>;
  _id?: Maybe<FilterRemoveOneProduct_IdOperatorsInput>;
};

export type FilterRemoveOneProductProductIdOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterRemoveOneProductNameOperatorsInput = {
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['RegExpAsString']>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterRemoveOneProductUnitPriceOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterRemoveOneProduct_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

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

export type CreateOneOrderPayload = {
   __typename?: 'CreateOneOrderPayload';
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Created document */
  record?: Maybe<Order>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  query?: Maybe<Query>;
};

export type CreateOneOrderInput = {
  /** Order unique ID */
  orderID?: Maybe<Scalars['Float']>;
  customerID?: Maybe<Scalars['String']>;
  employeeID?: Maybe<Scalars['Float']>;
  orderDate?: Maybe<Scalars['Date']>;
  requiredDate?: Maybe<Scalars['Date']>;
  shippedDate?: Maybe<Scalars['Date']>;
  shipVia?: Maybe<Scalars['Float']>;
  freight?: Maybe<Scalars['Float']>;
  shipName?: Maybe<Scalars['String']>;
  shipAddress?: Maybe<CustomerAddressInput>;
  /** List of ordered products */
  details?: Maybe<Array<Maybe<OrderDetailsInput>>>;
};

export type CustomerAddressInput = {
  street?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
};

export type OrderDetailsInput = {
  productID?: Maybe<Scalars['Float']>;
  unitPrice?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  discount?: Maybe<Scalars['Float']>;
};

export type UpdateByIdOrderPayload = {
   __typename?: 'UpdateByIdOrderPayload';
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Updated document */
  record?: Maybe<Order>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  query?: Maybe<Query>;
};

export type UpdateByIdOrderInput = {
  /** Order unique ID */
  orderID?: Maybe<Scalars['Float']>;
  customerID?: Maybe<Scalars['String']>;
  employeeID?: Maybe<Scalars['Float']>;
  orderDate?: Maybe<Scalars['Date']>;
  requiredDate?: Maybe<Scalars['Date']>;
  shippedDate?: Maybe<Scalars['Date']>;
  shipVia?: Maybe<Scalars['Float']>;
  freight?: Maybe<Scalars['Float']>;
  shipName?: Maybe<Scalars['String']>;
  shipAddress?: Maybe<UpdateByIdCustomerAddressInput>;
  /** List of ordered products */
  details?: Maybe<Array<Maybe<UpdateByIdOrderDetailsInput>>>;
};

export type UpdateByIdCustomerAddressInput = {
  street?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
};

export type UpdateByIdOrderDetailsInput = {
  productID?: Maybe<Scalars['Float']>;
  unitPrice?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  discount?: Maybe<Scalars['Float']>;
};

export type RemoveOneOrderPayload = {
   __typename?: 'RemoveOneOrderPayload';
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Removed document */
  record?: Maybe<Order>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  query?: Maybe<Query>;
};

export type FilterRemoveOneOrderInput = {
  /** Order unique ID */
  orderID?: Maybe<Scalars['Float']>;
  customerID?: Maybe<Scalars['String']>;
  employeeID?: Maybe<Scalars['Float']>;
  orderDate?: Maybe<Scalars['Date']>;
  requiredDate?: Maybe<Scalars['Date']>;
  shippedDate?: Maybe<Scalars['Date']>;
  shipVia?: Maybe<Scalars['Float']>;
  freight?: Maybe<Scalars['Float']>;
  shipName?: Maybe<Scalars['String']>;
  shipAddress?: Maybe<FilterRemoveOneCustomerAddressInput>;
  /** List of ordered products */
  details?: Maybe<Array<Maybe<FilterRemoveOneOrderDetailsInput>>>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterRemoveOneOrderOperatorsInput>;
  OR?: Maybe<Array<FilterRemoveOneOrderInput>>;
  AND?: Maybe<Array<FilterRemoveOneOrderInput>>;
};

export type FilterRemoveOneCustomerAddressInput = {
  street?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
};

export type FilterRemoveOneOrderDetailsInput = {
  productID?: Maybe<Scalars['Float']>;
  unitPrice?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  discount?: Maybe<Scalars['Float']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterRemoveOneOrderOperatorsInput = {
  orderID?: Maybe<FilterRemoveOneOrderOrderIdOperatorsInput>;
  _id?: Maybe<FilterRemoveOneOrder_IdOperatorsInput>;
};

export type FilterRemoveOneOrderOrderIdOperatorsInput = {
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterRemoveOneOrder_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export enum SortRemoveOneOrderInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  OrderidAsc = 'ORDERID_ASC',
  OrderidDesc = 'ORDERID_DESC'
}

export type UpdateByIdEmployeePayload = {
   __typename?: 'UpdateByIdEmployeePayload';
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Updated document */
  record?: Maybe<Employee>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  query?: Maybe<Query>;
};

export type UpdateByIdEmployeeInput = {
  /** Category unique ID */
  employeeID?: Maybe<Scalars['Float']>;
  lastName?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  titleOfCourtesy?: Maybe<Scalars['String']>;
  birthDate?: Maybe<Scalars['Date']>;
  hireDate?: Maybe<Scalars['Date']>;
  address?: Maybe<UpdateByIdCustomerAddressInput>;
  notes?: Maybe<Scalars['String']>;
  /** ID of chief */
  reportsTo?: Maybe<Scalars['Float']>;
  /** Attached territory ID from region collection */
  territoryIDs?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type Subscription = {
   __typename?: 'Subscription';
  orderCreated?: Maybe<Order>;
  orderUpdated?: Maybe<Order>;
  orderRemoved?: Maybe<Scalars['MongoID']>;
};
