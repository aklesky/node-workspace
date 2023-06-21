# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [0.6.3](https://github.com/aklesky/node-workspace/compare/v0.6.2...v0.6.3) (2023-06-21)


### Bug Fixes

* **deps:** update dependency eslint to v8.35.0 ([#66](https://github.com/aklesky/node-workspace/issues/66)) ([168ee4c](https://github.com/aklesky/node-workspace/commit/168ee4c2bc7a3db24f7267804b12b9015355c85a))
* **deps:** update dependency eslint to v8.36.0 ([#88](https://github.com/aklesky/node-workspace/issues/88)) ([c685e43](https://github.com/aklesky/node-workspace/commit/c685e436671594833333eab26ce5bc5489c995a4))
* **deps:** update dependency eslint to v8.43.0 ([#92](https://github.com/aklesky/node-workspace/issues/92)) ([70fcaba](https://github.com/aklesky/node-workspace/commit/70fcaba5bc2e1c49ee22b4f1b8151d9b48720346))
* **deps:** update dependency eslint-config-prettier to v8.7.0 ([#85](https://github.com/aklesky/node-workspace/issues/85)) ([fe4f064](https://github.com/aklesky/node-workspace/commit/fe4f064969996ccea15d1d95b1c4ce9d9ed79d44))
* **deps:** update dependency eslint-config-prettier to v8.8.0 ([#111](https://github.com/aklesky/node-workspace/issues/111)) ([64b4892](https://github.com/aklesky/node-workspace/commit/64b48922ed0d230fecfb429e81a06f2e50fcd692))
* **deps:** update dependency eslint-plugin-jest to v27.2.2 ([#104](https://github.com/aklesky/node-workspace/issues/104)) ([ca830f6](https://github.com/aklesky/node-workspace/commit/ca830f6c81f39eb28f22dadfc3b969b3a36e62ea))
* **deps:** update dependency rimraf to v4.3.0 ([#80](https://github.com/aklesky/node-workspace/issues/80)) ([344d932](https://github.com/aklesky/node-workspace/commit/344d93248e0e859b527ff147c035abb5d4756e52))
* **deps:** update dependency rimraf to v4.4.0 ([#83](https://github.com/aklesky/node-workspace/issues/83)) ([c38fb92](https://github.com/aklesky/node-workspace/commit/c38fb92be45f5d57c9567c455c40cd7217f8d71b))
* **deps:** update dependency rimraf to v5 ([#118](https://github.com/aklesky/node-workspace/issues/118)) ([2f92b20](https://github.com/aklesky/node-workspace/commit/2f92b20c86e95d54d8227da9d0ffd997aecb0bcf))
* **deps:** update typescript-eslint monorepo to v5.54.0 ([#71](https://github.com/aklesky/node-workspace/issues/71)) ([cc120a1](https://github.com/aklesky/node-workspace/commit/cc120a117cf357ab0a2a50031483bb90c9e279a8))
* **deps:** update typescript-eslint monorepo to v5.54.1 ([#84](https://github.com/aklesky/node-workspace/issues/84)) ([3b68a20](https://github.com/aklesky/node-workspace/commit/3b68a2046c8badc426bd579e8fee9143baf49afc))
* **deps:** update typescript-eslint monorepo to v5.59.11 ([#94](https://github.com/aklesky/node-workspace/issues/94)) ([9c55995](https://github.com/aklesky/node-workspace/commit/9c55995667e07e8c597d42af89a9cd4999ac59e3))
* **deps:** update typescript-eslint monorepo to v5.60.0 ([#114](https://github.com/aklesky/node-workspace/issues/114)) ([febe7c0](https://github.com/aklesky/node-workspace/commit/febe7c055c8b8692634d56307149092babd8718d))





## [0.6.2](https://github.com/aklesky/node-workspace/compare/v0.6.1...v0.6.2) (2023-02-11)

**Note:** Version bump only for package @aklesky/eslint-config





# 0.6.0 (2023-02-09)


### Bug Fixes

* **deps:** update typescript-eslint monorepo to v5.51.0 ([#49](https://github.com/aklesky/node-workspace/issues/49)) ([7020c7e](https://github.com/aklesky/node-workspace/commit/7020c7e363b4da4b7bc9ccdadf23c002e57e60d0))


### chore

* **release:** publish ([af0eddc](https://github.com/aklesky/node-workspace/commit/af0eddc95d352b20e10d4c944e547cf600a671ac))


* feature!: extend Vite SSR plugin (#57) ([1fcb908](https://github.com/aklesky/node-workspace/commit/1fcb908beee616f5da1e340ee93569ee7256a7e2)), closes [#57](https://github.com/aklesky/node-workspace/issues/57)


### Features

* react render to pipeable stream. ([#29](https://github.com/aklesky/node-workspace/issues/29)) ([ba8a966](https://github.com/aklesky/node-workspace/commit/ba8a9667b25c7b6fa37d8421a053387256b5fae2))
* vite plugin to handle react server side renderng ([#30](https://github.com/aklesky/node-workspace/issues/30)) ([71539ac](https://github.com/aklesky/node-workspace/commit/71539ac9390b9a3e058d8c007e9d21b6cfd4a64f))


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
* Switch npm to yarn





# [0.2.0](https://github.com/aklesky/node-workspace/compare/@aklesky/eslint-config@0.1.1...@aklesky/eslint-config@0.2.0) (2023-02-09)


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





## [0.1.1](https://github.com/aklesky/node-workspace/compare/@aklesky/eslint-config@0.1.0...@aklesky/eslint-config@0.1.1) (2023-02-07)


### Bug Fixes

* **deps:** update typescript-eslint monorepo to v5.51.0 ([#49](https://github.com/aklesky/node-workspace/issues/49)) ([7020c7e](https://github.com/aklesky/node-workspace/commit/7020c7e363b4da4b7bc9ccdadf23c002e57e60d0))





# 0.1.0 (2023-02-06)


### Features

* react render to pipeable stream. ([#29](https://github.com/aklesky/node-workspace/issues/29)) ([ba8a966](https://github.com/aklesky/node-workspace/commit/ba8a9667b25c7b6fa37d8421a053387256b5fae2))
* vite plugin to handle react server side renderng ([#30](https://github.com/aklesky/node-workspace/issues/30)) ([71539ac](https://github.com/aklesky/node-workspace/commit/71539ac9390b9a3e058d8c007e9d21b6cfd4a64f))


### BREAKING CHANGES

* Switch npm to yarn
