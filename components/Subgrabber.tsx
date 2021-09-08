import { fetcher, useFetcher } from "../src/Fetcher";

export function Subgrabber() {
  console.log("Subgrabber rendering");
  const data = useFetcher(fetcher, "https://httpbin.org/get?sub=1");
  return <div>{JSON.stringify(data)}</div>;
}
