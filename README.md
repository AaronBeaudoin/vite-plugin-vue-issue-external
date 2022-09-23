# `vite-plugin-vue-issue-external`

1. `npm install`.
2. `npm run build`.
3. Go to `dist/server/server.mjs`.
4. See `../../../../../../test` on line 3. What??

On line 13, I would expect to see something like this:

```js
`<img${ssrRenderAttrs(mergeProps({ src: "/test" }, _attrs))}>`
```

Just like in [this](https://sfc.vuejs.org/#__SSR__eNp9jcsOgkAMRX9l0jXM7Ama+B/dIFaEOI+0BReEf3fGsDCasGtPb89d4ZKSXWaCBloln56d0hmDMe3oByPcnxCckihCxm0e9wxUMPoUWWvfJTtJDFmxlk/cD4LQmA8pLHeUHeGhmqRxTu59KZ7ERh5cnizPQUdPlsTXV44vIc5ihOrL4TJciGumcCMmPnL+RP+8Rbth2GB7A9vJWrU=) SFC playground example.
