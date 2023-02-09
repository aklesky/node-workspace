# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [0.2.0](https://github.com/aklesky/node-workspace/compare/@aklesky/vite-react-ssr-plugin@0.1.2...@aklesky/vite-react-ssr-plugin@0.2.0) (2023-02-09)


* feature!: extend Vite SSR plugin (#57) (#58) ([6080880](https://github.com/aklesky/node-workspace/commit/60808805a402cbcd09b36f7a7ef12113727f581b)), closes [#57](https://github.com/aklesky/node-workspace/issues/57) [#58](https://github.com/aklesky/node-workspace/issues/58)


### BREAKING CHANGES

* - @aklesky/streamable-react event handlers are renamed.
	- onAllReady renamed to onAllReadyHandler
	- onShellReady renamed to onShellReadyHandler
	- onError renamed to onErrorHandler
	- onShellError  renamed to onShellErrorHandler
	- onStreamEnd renamed to onFinishEventHandler
	- onAbort renamed to onTimeoutEventHandler

@aklesky/vite-react-ssr-plugin event handlers are renamed according to
@aklesky/streamable-react event handlers

append method as a receiver callback has been removed from onShellReady and onAllReady events





## [0.1.2](https://github.com/aklesky/node-workspace/compare/@aklesky/vite-react-ssr-plugin@0.1.1...@aklesky/vite-react-ssr-plugin@0.1.2) (2023-02-07)

**Note:** Version bump only for package @aklesky/vite-react-ssr-plugin





## [0.1.1](https://github.com/aklesky/node-workspace/compare/@aklesky/vite-react-ssr-plugin@0.1.0...@aklesky/vite-react-ssr-plugin@0.1.1) (2023-02-07)

**Note:** Version bump only for package @aklesky/vite-react-ssr-plugin





# 0.1.0 (2023-02-06)


### Features

* vite plugin to handle react server side renderng ([#30](https://github.com/aklesky/node-workspace/issues/30)) ([71539ac](https://github.com/aklesky/node-workspace/commit/71539ac9390b9a3e058d8c007e9d21b6cfd4a64f))
* **Vite:** Shareable Vite Configuration Presets ([#33](https://github.com/aklesky/node-workspace/issues/33)) ([a0d1e91](https://github.com/aklesky/node-workspace/commit/a0d1e91a03d35f03766cdb8eda1995e1d2f75e78))
