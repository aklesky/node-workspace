# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [0.7.8](https://github.com/aklesky/node-workspace/compare/v0.7.7...v0.7.8) (2023-12-15)

**Note:** Version bump only for package @aklesky/prettier-config





## [0.7.6](https://github.com/aklesky/node-workspace/compare/v0.7.5...v0.7.6) (2023-12-15)

**Note:** Version bump only for package @aklesky/prettier-config





## [0.7.3](https://github.com/aklesky/node-workspace/compare/v0.7.2...v0.7.3) (2023-09-29)

**Note:** Version bump only for package @aklesky/prettier-config





## [0.7.2](https://github.com/aklesky/node-workspace/compare/v0.7.1...v0.7.2) (2023-09-29)

**Note:** Version bump only for package @aklesky/prettier-config





## [0.7.1](https://github.com/aklesky/node-workspace/compare/v0.7.0...v0.7.1) (2023-09-29)

**Note:** Version bump only for package @aklesky/prettier-config





# [0.7.0](https://github.com/aklesky/node-workspace/compare/v0.6.7...v0.7.0) (2023-09-29)


### Bug Fixes

* **deps:** update dependency prettier to v3.0.3 ([#156](https://github.com/aklesky/node-workspace/issues/156)) ([f1a6983](https://github.com/aklesky/node-workspace/commit/f1a69837d3a142ca086d412aad2a6008664e6849))
* **ts-config:** Ensure typescript configuration is up to date ([#170](https://github.com/aklesky/node-workspace/issues/170)) ([2bded0d](https://github.com/aklesky/node-workspace/commit/2bded0ddc662cdab05e2dfd1f8d8980c8d13bbe5))


### BREAKING CHANGES

* **ts-config:** removed @aklesky/utilities from monorepo
removed @aklesky/vite-react-ssr-plugin from monorepo
removed @aklesky/streamable-react from Monroe





## [0.6.7](https://github.com/aklesky/node-workspace/compare/v0.6.6...v0.6.7) (2023-09-22)

**Note:** Version bump only for package @aklesky/prettier-config





## [0.6.6](https://github.com/aklesky/node-workspace/compare/v0.6.5...v0.6.6) (2023-08-21)


### Bug Fixes

* **deps:** update dependency prettier to v3 ([#142](https://github.com/aklesky/node-workspace/issues/142)) ([f975c4f](https://github.com/aklesky/node-workspace/commit/f975c4fc1e43c4b201fe602e64a0fbb14158751e))





## [0.6.5](https://github.com/aklesky/node-workspace/compare/v0.6.4...v0.6.5) (2023-08-21)

**Note:** Version bump only for package @aklesky/prettier-config





## [0.6.4](https://github.com/aklesky/node-workspace/compare/v0.6.3...v0.6.4) (2023-08-21)

**Note:** Version bump only for package @aklesky/prettier-config





## [0.6.3](https://github.com/aklesky/node-workspace/compare/v0.6.2...v0.6.3) (2023-06-21)


### Bug Fixes

* **deps:** update dependency rimraf to v4.3.0 ([#80](https://github.com/aklesky/node-workspace/issues/80)) ([344d932](https://github.com/aklesky/node-workspace/commit/344d93248e0e859b527ff147c035abb5d4756e52))
* **deps:** update dependency rimraf to v4.4.0 ([#83](https://github.com/aklesky/node-workspace/issues/83)) ([c38fb92](https://github.com/aklesky/node-workspace/commit/c38fb92be45f5d57c9567c455c40cd7217f8d71b))
* **deps:** update dependency rimraf to v5 ([#118](https://github.com/aklesky/node-workspace/issues/118)) ([2f92b20](https://github.com/aklesky/node-workspace/commit/2f92b20c86e95d54d8227da9d0ffd997aecb0bcf))





## [0.6.2](https://github.com/aklesky/node-workspace/compare/v0.6.1...v0.6.2) (2023-02-11)

**Note:** Version bump only for package @aklesky/prettier-config





# 0.6.0 (2023-02-09)


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





# [0.2.0](https://github.com/aklesky/node-workspace/compare/@aklesky/prettier-config@0.1.1...@aklesky/prettier-config@0.2.0) (2023-02-09)


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





## [0.1.1](https://github.com/aklesky/node-workspace/compare/@aklesky/prettier-config@0.1.0...@aklesky/prettier-config@0.1.1) (2023-02-07)

**Note:** Version bump only for package @aklesky/prettier-config





# 0.1.0 (2023-02-06)


### Features

* react render to pipeable stream. ([#29](https://github.com/aklesky/node-workspace/issues/29)) ([ba8a966](https://github.com/aklesky/node-workspace/commit/ba8a9667b25c7b6fa37d8421a053387256b5fae2))
* vite plugin to handle react server side renderng ([#30](https://github.com/aklesky/node-workspace/issues/30)) ([71539ac](https://github.com/aklesky/node-workspace/commit/71539ac9390b9a3e058d8c007e9d21b6cfd4a64f))


### BREAKING CHANGES

* Switch npm to yarn
