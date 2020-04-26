import { useApolloClient } from '@apollo/client';
import { withApollo } from 'app/utils/withApollo';

function RawClientPage() {
  const apolloClient = useApolloClient();
  console.log(apolloClient);
  if (typeof window !== 'undefined') {
    (window as any).apolloClient = apolloClient;
  }
  return <span>Open DevTools console and type `apolloClient`</span>;
}

export default withApollo(RawClientPage);
