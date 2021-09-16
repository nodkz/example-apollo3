import { withApollo } from 'app/utils/withApollo';
import { ProductList } from 'app/features/ProductList/ProductList';

function ProductsPage() {
  return <ProductList />;
}

export default withApollo(ProductsPage);
