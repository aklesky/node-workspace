# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [0.6.4](https://github.com/aklesky/node-workspace/compare/v0.6.3...v0.6.4) (2023-08-21)


### Bug Fixes

* **deps:** update react monorepo ([#123](https://github.com/aklesky/node-workspace/issues/123)) ([2574c1b](https://github.com/aklesky/node-workspace/commit/2574c1b8ef0d0647ce84adbcdca1bf8a486b07c5))





## [0.6.3](https://github.com/aklesky/node-workspace/compare/v0.6.2...v0.6.3) (2023-06-21)


### Bug Fixes

* **deps:** update dependency rimraf to v4.3.0 ([#80](https://github.com/aklesky/node-workspace/issues/80)) ([344d932](https://github.com/aklesky/node-workspace/commit/344d93248e0e859b527ff147c035abb5d4756e52))
* **deps:** update dependency rimraf to v4.4.0 ([#83](https://github.com/aklesky/node-workspace/issues/83)) ([c38fb92](https://github.com/aklesky/node-workspace/commit/c38fb92be45f5d57c9567c455c40cd7217f8d71b))
* **deps:** update dependency rimraf to v5 ([#118](https://github.com/aklesky/node-workspace/issues/118)) ([2f92b20](https://github.com/aklesky/node-workspace/commit/2f92b20c86e95d54d8227da9d0ffd997aecb0bcf))





## [0.6.2](https://github.com/aklesky/node-workspace/compare/v0.6.1...v0.6.2) (2023-02-11)

**Note:** Version bump only for package @aklesky/streamable-react





## [0.6.1](https://github.com/aklesky/node-workspace/compare/v0.6.0...v0.6.1) (2023-02-09)

**Note:** Version bump only for package @aklesky/streamable-react





# 0.6.0 (2023-02-09)


### chore

* **release:** publish ([af0eddc](https://github.com/aklesky/node-workspace/commit/af0eddc95d352b20e10d4c944e547cf600a671ac))


* fix!(tests): Ensure running tests will not break CI/CD (#61) ([8aaf062](https://github.com/aklesky/node-workspace/commit/8aaf062cba0510e353b4221049f3c120ab8575d8)), closes [#61](https://github.com/aklesky/node-workspace/issues/61)
* feature!: extend Vite SSR plugin (#57) ([1fcb908](https://github.com/aklesky/node-workspace/commit/1fcb908beee616f5da1e340ee93569ee7256a7e2)), closes [#57](https://github.com/aklesky/node-workspace/issues/57)


### Features

* react render to pipeable stream. ([#29](https://github.com/aklesky/node-workspace/issues/29)) ([ba8a966](https://github.com/aklesky/node-workspace/commit/ba8a9667b25c7b6fa37d8421a053387256b5fae2))
* vite plugin to handle react server side renderng ([#30](https://github.com/aklesky/node-workspace/issues/30)) ([71539ac](https://github.com/aklesky/node-workspace/commit/71539ac9390b9a3e058d8c007e9d21b6cfd4a64f))
* **Vite:** Shareable Vite Configuration Presets ([#33](https://github.com/aklesky/node-workspace/issues/33)) ([a0d1e91](https://github.com/aklesky/node-workspace/commit/a0d1e91a03d35f03766cdb8eda1995e1d2f75e78))


### BREAKING CHANGES

* switching from independent versioning to fixed.
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





# [0.2.0](https://github.com/aklesky/node-workspace/compare/@aklesky/streamable-react@0.1.2...@aklesky/streamable-react@0.2.0) (2023-02-09)


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





## [0.1.2](https://github.com/aklesky/node-workspace/compare/@aklesky/streamable-react@0.1.1...@aklesky/streamable-react@0.1.2) (2023-02-07)

**Note:** Version bump only for package @aklesky/streamable-react





## [0.1.1](https://github.com/aklesky/node-workspace/compare/@aklesky/streamable-react@0.1.0...@aklesky/streamable-react@0.1.1) (2023-02-07)

**Note:** Version bump only for package @aklesky/streamable-react





# 0.1.0 (2023-02-06)


### Features

* react render to pipeable stream. ([#29](https://github.com/aklesky/node-workspace/issues/29)) ([ba8a966](https://github.com/aklesky/node-workspace/commit/ba8a9667b25c7b6fa37d8421a053387256b5fae2))
* vite plugin to handle react server side renderng ([#30](https://github.com/aklesky/node-workspace/issues/30)) ([71539ac](https://github.com/aklesky/node-workspace/commit/71539ac9390b9a3e058d8c007e9d21b6cfd4a64f))
* **Vite:** Shareable Vite Configuration Presets ([#33](https://github.com/aklesky/node-workspace/issues/33)) ([a0d1e91](https://github.com/aklesky/node-workspace/commit/a0d1e91a03d35f03766cdb8eda1995e1d2f75e78))


### BREAKING CHANGES

* Switch npm to yarn
