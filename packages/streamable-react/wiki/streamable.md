# Disclaimer

The copyright for the documentation of renderToPipeableStream belongs to the React Team, a project of [Facebook/Meta](https://opensource.fb.com/), and is hosted on the official website [reactjs.org](https://reactjs.org).

## useRenderToPipeableStream

The function ***`useRenderToPipeableStream.callback`*** takes two arguments and returns ***{ pipe, abort }*** methods from  ***`react-dom/server.renderToPipeableStream`***.

## Example usage

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
    })
}

```

## Options

A nonce string to allow scripts for script-src Content-Security-Policy.

```typescript
    nonce?: string
```

- [Read more about the nonce parameter.](https://beta.reactjs.org/reference/react-dom/server/renderToPipeableStream#parameters)
- [Read more about the Content-Security-Policy.](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/script-src)

An array of string URLs for the \<script\> tags to emit on the page.
Use this to include the \<script type="module\"\> that calls hydrateRoot.

 ```typescript
    bootstrapScripts?: string[]
```

[Read more about the bootstrapScriptContent](https://beta.reactjs.org/reference/react-dom/server/renderToPipeableStream#parameters)

An array of string URLs for the \<script type="module"\> tags to emit on the page.
Like boostrapScripts.

```typescript
    bootstrapModules?: string[]
```

[Read more about the bootstrapScriptContent](https://beta.reactjs.org/reference/react-dom/server/renderToPipeableStream#parameters)

If specified, this string will be placed in an inline script tag.

```typescript
    bootstrapScriptContent?: string
```

[Read more about the bootstrapScriptContent](https://beta.reactjs.org/reference/react-dom/server/renderToPipeableStream#parameters)

The React component to render. might be used as a static option to render or as a fallback if no component is provided within the streamable options.

```typescript
    component?: ComponentType
```
