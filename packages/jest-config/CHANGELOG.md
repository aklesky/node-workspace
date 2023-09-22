# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [0.6.7](https://github.com/aklesky/node-workspace/compare/v0.6.6...v0.6.7) (2023-09-22)

**Note:** Version bump only for package @aklesky/jest-config





## [0.6.6](https://github.com/aklesky/node-workspace/compare/v0.6.5...v0.6.6) (2023-08-21)


### Bug Fixes

* **deps:** update jest monorepo ([#136](https://github.com/aklesky/node-workspace/issues/136)) ([b829f68](https://github.com/aklesky/node-workspace/commit/b829f6883e0fc1e479a7c0f525ea752c06479b5e))
* **deps:** update swc monorepo ([#129](https://github.com/aklesky/node-workspace/issues/129)) ([f573df6](https://github.com/aklesky/node-workspace/commit/f573df61a1c08752611767759ecbf82e862c4e2b))





## [0.6.5](https://github.com/aklesky/node-workspace/compare/v0.6.4...v0.6.5) (2023-08-21)

**Note:** Version bump only for package @aklesky/jest-config





## [0.6.4](https://github.com/aklesky/node-workspace/compare/v0.6.3...v0.6.4) (2023-08-21)

**Note:** Version bump only for package @aklesky/jest-config





## [0.6.3](https://github.com/aklesky/node-workspace/compare/v0.6.2...v0.6.3) (2023-06-21)


### Bug Fixes

* **deps:** update dependency @swc/core to v1.3.37 ([#65](https://github.com/aklesky/node-workspace/issues/65)) ([c648268](https://github.com/aklesky/node-workspace/commit/c648268794ab7047c7cac3c8903d7abe12ad7dc1))
* **deps:** update dependency @swc/core to v1.3.39 ([#81](https://github.com/aklesky/node-workspace/issues/81)) ([067233f](https://github.com/aklesky/node-workspace/commit/067233f009e2a0bf3e72179f5469cdfc9fd95cb5))
* **deps:** update dependency @swc/core to v1.3.66 ([#119](https://github.com/aklesky/node-workspace/issues/119)) ([dab94a4](https://github.com/aklesky/node-workspace/commit/dab94a46d53e964b26d6794e03aae5b3c0e124a0))
* **deps:** update dependency rimraf to v4.3.0 ([#80](https://github.com/aklesky/node-workspace/issues/80)) ([344d932](https://github.com/aklesky/node-workspace/commit/344d93248e0e859b527ff147c035abb5d4756e52))
* **deps:** update dependency rimraf to v4.4.0 ([#83](https://github.com/aklesky/node-workspace/issues/83)) ([c38fb92](https://github.com/aklesky/node-workspace/commit/c38fb92be45f5d57c9567c455c40cd7217f8d71b))
* **deps:** update dependency rimraf to v5 ([#118](https://github.com/aklesky/node-workspace/issues/118)) ([2f92b20](https://github.com/aklesky/node-workspace/commit/2f92b20c86e95d54d8227da9d0ffd997aecb0bcf))
* **deps:** update swc monorepo ([#107](https://github.com/aklesky/node-workspace/issues/107)) ([093c56b](https://github.com/aklesky/node-workspace/commit/093c56bd47575ba17eaed68c0b732529d6ac97c7))





## [0.6.2](https://github.com/aklesky/node-workspace/compare/v0.6.1...v0.6.2) (2023-02-11)

**Note:** Version bump only for package @aklesky/jest-config





# 0.6.0 (2023-02-09)


### Bug Fixes

* **deps:** update dependency @swc/core to v1.3.34 ([#56](https://github.com/aklesky/node-workspace/issues/56)) ([f6f23f8](https://github.com/aklesky/node-workspace/commit/f6f23f8b6f47da7a78bb09279224d4a8f5a325cb))


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





# [0.2.0](https://github.com/aklesky/node-workspace/compare/@aklesky/jest-config@0.1.2...@aklesky/jest-config@0.2.0) (2023-02-09)


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





## [0.1.2](https://github.com/aklesky/node-workspace/compare/@aklesky/jest-config@0.1.1...@aklesky/jest-config@0.1.2) (2023-02-07)

**Note:** Version bump only for package @aklesky/jest-config





## [0.1.1](https://github.com/aklesky/node-workspace/compare/@aklesky/jest-config@0.1.0...@aklesky/jest-config@0.1.1) (2023-02-07)

**Note:** Version bump only for package @aklesky/jest-config





# 0.1.0 (2023-02-06)


### Features

* react render to pipeable stream. ([#29](https://github.com/aklesky/node-workspace/issues/29)) ([ba8a966](https://github.com/aklesky/node-workspace/commit/ba8a9667b25c7b6fa37d8421a053387256b5fae2))
* vite plugin to handle react server side renderng ([#30](https://github.com/aklesky/node-workspace/issues/30)) ([71539ac](https://github.com/aklesky/node-workspace/commit/71539ac9390b9a3e058d8c007e9d21b6cfd4a64f))


### BREAKING CHANGES

* Switch npm to yarn
