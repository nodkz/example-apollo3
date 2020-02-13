import { useHomeQuery } from './__generated__/Home';

export function Home() {
  const { loading, data } = useHomeQuery();
  const res = loading || data;
  return <div>{JSON.stringify(res)}!!!!</div>;
}
