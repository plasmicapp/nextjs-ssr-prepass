import { fetcher, useFetcher } from "../src/Fetcher";
import { Subgrabber } from "./Subgrabber";

export function Grabber() {
  console.log("Grabber rendering");
  const data = useFetcher(fetcher, "https://httpbin.org/get");
  return (
    <div>
      {JSON.stringify(data)}
      <Subgrabber />
    </div>
  );
}
