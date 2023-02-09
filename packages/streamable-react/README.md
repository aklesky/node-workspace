# Easy React streaming wrap functionality (Node.js Stream)

- [Easy React streaming wrap functionality (Node.js Stream)](#easy-react-streaming-wrap-functionality-nodejs-stream)
  - [Installation](#installation)
  - [Configuration](#configuration)
    - [Static options \& usage](#static-options--usage)
    - [Streamable Options within http middleware](#streamable-options-within-http-middleware)
  - [Supported Versions](#supported-versions)

## Installation

- npm

```bash
npm i @aklesky/streamable-react
```

- yarn

```bash
yarn add @aklesky/streamable-react
```

## Configuration

- [React documentation](https://reactjs.org/docs/react-dom-server.html#rendertopipeablestream)
- [React Beta documentation](https://beta.reactjs.org/reference/react-dom/server/renderToPipeableStream)

### Static options & usage

- [Read more about useRenderToPipeableStream  options](https://github.com/aklesky/node-workspace/blob/next/packages/streamable-react/wiki/static.md)

```typescript
import { useRenderToPipeableStream } from '@aklesky/streamable-react/pipeable/render.js'

const render = useRenderToPipeableStream({
        component: React.ComponentType
        timeout: number, // default 10000,
        identifierPrefix: options.identifierPrefix,
        namespaceURI: options.namespaceURI,
        nonce: options.nonce,
        progressiveChunkSize: options.progressiveChunkSize,
        bootstrapModules: options.bootstrapModules,
        bootstrapScripts: options.bootstrapScripts,
})
```

### Streamable Options within http middleware

- [Read more about useRenderToPipeableStream.callback options](https://github.com/aklesky/node-workspace/blob/next/packages/streamable-react/wiki/streamable.md)

```typescript

await render(http.ServerResponse, {
    component: React.ComponentType,
    props: {},
    onAbort: options.onAbort?.(req, res),
    onAllReady: options.onAllReady?.(req, res),
    onError: options.onError?.(req, res),
    onStreamEnd: options.onStreamEnd?.(req, res),
    onShellError: options.onShellError?.(req, res),
    onShellReady: options.onShellReady?.(req, res),
})
```

## Supported Versions

| Name       | Version    | Supported          |
| ---------- | ---------- | ------------------ |
| React       | >= 18.2.0 | :white_check_mark: |
