# useRenderToPipeableStream

The function ***`useRenderToPipeableStream.callback`*** takes two arguments and returns ***{ pipe, abort }*** methods from  ***`react-dom/server.renderToPipeableStream`***.

> options and callback are optional and used to configure [renderToPipeableStream](https://reactjs.org/docs/react-dom-server.html#rendertopipeablestream)

- [useRenderToPipeableStream](#userendertopipeablestream)
  - [Installation](#installation)
  - [Example usage with http middleware](#example-usage-with-http-middleware)
  - [Options](#options)
    - [nonce](#nonce)
    - [*bootstrapScripts*](#bootstrapscripts)
    - [*bootstrapModules*](#bootstrapmodules)
    - [*bootstrapScriptContent*](#bootstrapscriptcontent)
    - [*component*](#component)
  - [Event Handlers](#event-handlers)
    - [*onAllReadyHandler*](#onallreadyhandler)
    - [*onTimeoutEventHandler*](#ontimeouteventhandler)
    - [*onErrorHandler*](#onerrorhandler)
    - [*onShellErrorHandler*](#onshellerrorhandler)
    - [*onShellReadyHandler*](#onshellreadyhandler)
    - [*onFinishEventHandler*](#onfinisheventhandler)

## Installation

- npm

```bash
npm i @aklesky/streamable-react
```

- yarn

```bash
yarn add @aklesky/streamable-react
```

## Example usage with http middleware

```typescript
import { useRenderToPipeableStream } from '@aklesky/streamable-react/pipeable/render.js'

const render = useRenderToPipeableStream({
        timeout: options.timeout,
})

const middleware = async (req: http.IncomingMessage, res: http.ServerResponse) => {
    const isModernBrowser = true
    const component = isModernBrowser && import('./server/modern.mjs') || import('./server/outdated.js')
    await render(res, {
        component: await component,
        bootstrapModules: isModernBrowser && ['/js/modern.mjs'] || undefined,
        bootstrapScripts: !isModernBrowser && ['/js/outdated.js'] || undefined
        onShellReadyHandler: (cb: () => Writable, append: (chunk: string), error?: Error) {
            res.statusCode = error && 500 || 200
            append('some html')
        }
    })
}

```

## Options

### nonce

A nonce string to allow scripts for script-src Content-Security-Policy

```typescript
    nonce?: string
```

- [Read more about the nonce parameter.](https://beta.reactjs.org/reference/react-dom/server/renderToPipeableStream#parameters)
- [Read more about the Content-Security-Policy.](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/script-src)

### *bootstrapScripts*

An array of string URLs for the \<script\> tags to emit on the page.
Use this to include the \<script type="module\"\> that calls hydrateRoot.

 ```typescript
    bootstrapScripts?: string[]
```

[Read more about the bootstrapScripts](https://beta.reactjs.org/reference/react-dom/server/renderToPipeableStream#parameters)

### *bootstrapModules*

An array of string URLs for the \<script type="module"\> tags to emit on the page.
Like boostrapScripts.

```typescript
    bootstrapModules?: string[]
```

[Read more about the bootstrapModules](https://beta.reactjs.org/reference/react-dom/server/renderToPipeableStream#parameters)

### *bootstrapScriptContent*

If specified, this string will be placed in an inline script tag.

```typescript
    bootstrapScriptContent?: string
```

[Read more about the bootstrapScriptContent](https://beta.reactjs.org/reference/react-dom/server/renderToPipeableStream#parameters)

### *component*

The React component to render. might be used as a static option to render or as a fallback if no component is provided within the streamable options.

```typescript
    component?: ComponentType
```

## Event Handlers

### *onAllReadyHandler*

A callback that fires when all rendering is complete, including both the shell and all additional content.

- [Read more about the onAllReady callback parameter.](https://beta.reactjs.org/reference/react-dom/server/renderToPipeableStream#aborting-server-rendering)

The callback receives the three arguments.

- a callback that returns the Writable stream to write to
- an error object if there was an error

```typescript
 onAllReadyHandler?: (pipe: () => Writable, error?: Error) => Promise<void>
```

### *onTimeoutEventHandler*

You can force the server rendering to “give up” after a timeout:

- [Read more about the onAbort callback parameter.](https://beta.reactjs.org/reference/react-dom/server/renderToPipeableStream#aborting-server-rendering)

```typescript
 onTimeoutEventHandler?: (error: Error) => Promise<void>
```

### *onErrorHandler*

 A callback that fires whenever there is a server error, whether recoverable or not.

- [Read more about the onError callback parameter.](https://beta.reactjs.org/reference/react-dom/server/renderToPipeableStream#parameters)

> To avoid dangling response when onError is fired, res.end is called automatically
>
> An additionally, status code ***500*** INTERNAL ERROR is set.

```typescript
 onErrorHandler?: (error: Error) => Promise<void>
```

### *onShellErrorHandler*

A callback that fires if there was an error rendering the initial shell. It receives the error as an argument.

- [Read more about the onError callback parameter.](https://beta.reactjs.org/reference/react-dom/server/renderToPipeableStream#parameters)

> An additionally, status code ***500*** INTERNAL ERROR is set.

```typescript
 onShellErrorHandler?: (error: Error) => Promise<void>
```

### *onShellReadyHandler*

A callback that fires right after the initial shell has been rendered.

- [Read more about the onShellReady callback parameter.](https://beta.reactjs.org/reference/react-dom/server/renderToPipeableStream#parameters)

The callback receives the three arguments.

- a callback that returns the Writable stream to write to
- an error object if there was an error

```typescript
 onShellReadyHandler?: (pipe: () => Writable, error?: Error) => Promise<void>
```

### *onFinishEventHandler*

This callback fires before writable.end() is called. It can be used to append additional data to the stream.

```typescript

 onFinishEventHandler?:  () => Promise<string | void>
```
