import { useRouter } from 'next/router';
import { Table, Popconfirm } from 'antd';
import { TablePaginationConfig } from 'antd/lib/table';
import {
  // ProductListQueryDocument,
  ProductTableItem,
  useProductListQuery,
} from './__generated__/ProductListQuery';
import { useProductDeleteMutation } from './__generated__/ProductDeleteMutation';

export function ProductList() {
  const router = useRouter();
  const variables = {
    page: parseInt(router.query?.page as any) || 1,
    perPage: parseInt(router.query?.perPage as any) || 5,
  };

  const { data, loading, refetch } = useProductListQuery({
    variables,
  });

  const [deleteProduct] = useProductDeleteMutation({
    notifications: {
      onCompleted: 'Запись успешно удалена!',
    },
    // refetchQueries: [ProductListQueryDocument],
    onCompleted: () => {
      refetch();
    },
  });

  return (
    <Table<ProductTableItem>
      title={() => <h1>Implement ProductList logic like in Orders</h1>}
      loading={loading}
      dataSource={data?.viewer?.productPagination?.items || []}
      columns={[
        {
          title: 'ProductID',
          dataIndex: 'productID',
        },
        {
          title: 'Name',
          dataIndex: 'name',
        },
        {
          title: 'Supplier',
          dataIndex: ['supplier', 'companyName'],
        },
        {
          title: 'Unit Price',
          dataIndex: 'unitPrice',
          render: (unitPrice, _record) => {
            return unitPrice;
            // return <OrderListEditableFreight record={record} />;
          },
        },
        {
          title: 'Operations',
          width: '150px',
          render: (t, record) => {
            return (
              <Popconfirm
                title="Sure to delete?"
                onConfirm={() => {
                  deleteProduct({
                    variables: { _id: record?._id },
                  });
                }}
              >
                <a>Delete</a>
              </Popconfirm>
            );
          },
        },
      ]}
      pagination={{
        showSizeChanger: true,
        pageSize: data?.viewer?.productPagination?.pageInfo?.perPage,
        current: data?.viewer?.productPagination?.pageInfo?.currentPage,
        pageSizeOptions: ['5', '10', '100'],
        total: data?.viewer?.productPagination?.count,
      }}
      onChange={(pagination: TablePaginationConfig) => {
        router.push({
          pathname: router.pathname,
          query: {
            page: pagination.current,
            perPage: pagination.pageSize,
          },
        });
      }}
      rowKey="productID"
      rowClassName={() => 'editable-row'}
    />
  );
}
