import { useQuery } from '@apollo/client';
import { withApollo } from 'app/utils/withApollo';
import gql from 'graphql-tag';
import Link from 'next/link';

function RawClientPage() {
  const { data } = useQuery(gql`
    query TestClientDirective {
      viewer {
        order {
          orderID
          orderDate
          shipName1234 @client
          time @client
        }
      }
    }
  `);

  return (
    <div>
      <div>Check file `src/utils/clientMockSchema.ts`</div>
      <div>Fields `shipName1234`, `time` are client side only.</div>
      <pre>{JSON.stringify(data, null, 2)}</pre>

      <br />
      <br />
      <Link href="/mock/standalone">
        <a>Check another Standalone Mock example</a>
      </Link>
    </div>
  );
}

export default withApollo(RawClientPage);
