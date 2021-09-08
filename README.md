This is a simple POC of composable server-side data fetching, without needing to declare a global static set of fetches at the page root.

Both Grabber and Subgrabber components can issue whatever fetches they want.

This is possible using react-ssr-prepass.

I had not found any off-the-shelf Next.js integration with react-ssr-prepass, but it was straightforward to create a custom fetcher to work. This can be extended to other fetchers such as react-query.

The fetches just need to be in the tentative style of Suspense - they need to just throw Promises!
