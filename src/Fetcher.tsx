import os from "os";

class Fetcher {
  cache = {};

  async fetch(url: string) {
    const response = await fetch(url);
    const result = await response.json();
    this.cache[url] = { ...result, hostname: os.hostname() };
    return result;
  }
}

export const fetcher = new Fetcher();

export function useFetcher(fetcher: Fetcher, url: string) {
  if (!fetcher.cache[url]) {
    const promise = fetcher.fetch(url);
    throw promise;
  } else {
    return fetcher.cache[url];
  }
}
