import { withApollo } from 'app/utils/withApollo';
import { OrderList } from 'app/features/OrderList/OrderList';

function OrdersPage() {
  return <OrderList />;
}

export default withApollo(OrdersPage);
