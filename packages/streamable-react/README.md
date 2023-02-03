# Easy React streaming wrap functionality (Node.js Stream)

- [Easy React streaming wrap functionality (Node.js Stream)](#easy-react-streaming-wrap-functionality-nodejs-stream)
  - [Configuration](#configuration)
    - [Static options \& usage](#static-options--usage)
    - [Streamable Options within http middleware](#streamable-options-within-http-middleware)
  - [Supported Versions](#supported-versions)

## Configuration

- [React documentation](https://reactjs.org/docs/react-dom-server.html#rendertopipeablestream)
- [React Beta documentation](https://beta.reactjs.org/reference/react-dom/server/renderToPipeableStream)

### Static options & usage

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
