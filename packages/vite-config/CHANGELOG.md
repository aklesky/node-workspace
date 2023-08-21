# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [0.6.6](https://github.com/aklesky/node-workspace/compare/v0.6.5...v0.6.6) (2023-08-21)

**Note:** Version bump only for package @aklesky/vite-config





## [0.6.5](https://github.com/aklesky/node-workspace/compare/v0.6.4...v0.6.5) (2023-08-21)

**Note:** Version bump only for package @aklesky/vite-config





## [0.6.4](https://github.com/aklesky/node-workspace/compare/v0.6.3...v0.6.4) (2023-08-21)


### Bug Fixes

* **deps:** update dependency sass to v1.66.1 ([#121](https://github.com/aklesky/node-workspace/issues/121)) ([16dc061](https://github.com/aklesky/node-workspace/commit/16dc06135d70b7b2108c65a89fbf2d361fd5343f))





## [0.6.3](https://github.com/aklesky/node-workspace/compare/v0.6.2...v0.6.3) (2023-06-21)


### Bug Fixes

* **deps:** update dependency @vitejs/plugin-react-swc to v3.2.0 ([#79](https://github.com/aklesky/node-workspace/issues/79)) ([cc985a9](https://github.com/aklesky/node-workspace/commit/cc985a9759ceaa5ebdb943394da0db902208f6a3))
* **deps:** update dependency @vitejs/plugin-react-swc to v3.3.2 ([#110](https://github.com/aklesky/node-workspace/issues/110)) ([c7c7ff0](https://github.com/aklesky/node-workspace/commit/c7c7ff0709fde90307aeec2921dfdbc8d6f5c93c))
* **deps:** update dependency rimraf to v4.3.0 ([#80](https://github.com/aklesky/node-workspace/issues/80)) ([344d932](https://github.com/aklesky/node-workspace/commit/344d93248e0e859b527ff147c035abb5d4756e52))
* **deps:** update dependency rimraf to v4.4.0 ([#83](https://github.com/aklesky/node-workspace/issues/83)) ([c38fb92](https://github.com/aklesky/node-workspace/commit/c38fb92be45f5d57c9567c455c40cd7217f8d71b))
* **deps:** update dependency rimraf to v5 ([#118](https://github.com/aklesky/node-workspace/issues/118)) ([2f92b20](https://github.com/aklesky/node-workspace/commit/2f92b20c86e95d54d8227da9d0ffd997aecb0bcf))
* **deps:** update dependency sass to v1.58.3 ([#72](https://github.com/aklesky/node-workspace/issues/72)) ([d2c01bd](https://github.com/aklesky/node-workspace/commit/d2c01bde2ca3b26e6ffdcd7996dc014360c82726))
* **deps:** update dependency sass to v1.59.2 ([#89](https://github.com/aklesky/node-workspace/issues/89)) ([412e0f8](https://github.com/aklesky/node-workspace/commit/412e0f82522a7056d146e091949069e2d11855a8))
* **deps:** update dependency sass to v1.63.4 ([#95](https://github.com/aklesky/node-workspace/issues/95)) ([2b45899](https://github.com/aklesky/node-workspace/commit/2b458990b1accadb666b1ecd042cf7d2ede01fb3))





## [0.6.2](https://github.com/aklesky/node-workspace/compare/v0.6.1...v0.6.2) (2023-02-11)

**Note:** Version bump only for package @aklesky/vite-config





## [0.6.1](https://github.com/aklesky/node-workspace/compare/v0.6.0...v0.6.1) (2023-02-09)

**Note:** Version bump only for package @aklesky/vite-config





# 0.6.0 (2023-02-09)


### chore

* **release:** publish ([af0eddc](https://github.com/aklesky/node-workspace/commit/af0eddc95d352b20e10d4c944e547cf600a671ac))


* feature!: extend Vite SSR plugin (#57) ([1fcb908](https://github.com/aklesky/node-workspace/commit/1fcb908beee616f5da1e340ee93569ee7256a7e2)), closes [#57](https://github.com/aklesky/node-workspace/issues/57)


### Features

* **Vite:** Shareable Vite Configuration Presets ([#33](https://github.com/aklesky/node-workspace/issues/33)) ([a0d1e91](https://github.com/aklesky/node-workspace/commit/a0d1e91a03d35f03766cdb8eda1995e1d2f75e78))


### BREAKING CHANGES

* **release:** - @aklesky/streamable-react event handlers are renamed.
	- onAllReady renamed to onAllReadyHandler
	- onShellReady renamed to onShellReadyHandler
	- onError renamed to onErrorHandler
	- onShellError  renamed to onShellErrorHandler
	- onStreamEnd renamed to onFinishEventHandler
	- onAbort renamed to onTimeoutEventHandler

@aklesky/vite-react-ssr-plugin event handlers are renamed according to
@aklesky/streamable-react event handlers

append method as a receiver callback has been removed from onShellReady and onAllReady events
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





# [0.2.0](https://github.com/aklesky/node-workspace/compare/@aklesky/vite-config@0.1.2...@aklesky/vite-config@0.2.0) (2023-02-09)


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





## [0.1.2](https://github.com/aklesky/node-workspace/compare/@aklesky/vite-config@0.1.1...@aklesky/vite-config@0.1.2) (2023-02-07)

**Note:** Version bump only for package @aklesky/vite-config





## [0.1.1](https://github.com/aklesky/node-workspace/compare/@aklesky/vite-config@0.1.0...@aklesky/vite-config@0.1.1) (2023-02-07)

**Note:** Version bump only for package @aklesky/vite-config





# 0.1.0 (2023-02-06)


### Features

* **Vite:** Shareable Vite Configuration Presets ([#33](https://github.com/aklesky/node-workspace/issues/33)) ([a0d1e91](https://github.com/aklesky/node-workspace/commit/a0d1e91a03d35f03766cdb8eda1995e1d2f75e78))
