# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [0.7.14](https://github.com/aklesky/node-workspace/compare/v0.7.4...v0.7.14) (2023-12-19)

**Note:** Version bump only for package @aklesky/utilities





## [0.7.13](https://github.com/aklesky/node-workspace/compare/v0.7.12...v0.7.13) (2023-12-18)

**Note:** Version bump only for package @aklesky/utilities





## [0.7.12](https://github.com/aklesky/node-workspace/compare/v0.7.11...v0.7.12) (2023-12-18)


### Bug Fixes

* **packages:** update configurations and fix Vite import issues ([#210](https://github.com/aklesky/node-workspace/issues/210)) ([0c22afe](https://github.com/aklesky/node-workspace/commit/0c22afeac8f10c1ffc6347bcb7c4880f41acc2ba))





## [0.7.11](https://github.com/aklesky/node-workspace/compare/v0.7.10...v0.7.11) (2023-12-18)

**Note:** Version bump only for package @aklesky/utilities





## [0.6.7](https://github.com/aklesky/node-workspace/compare/v0.6.6...v0.6.7) (2023-09-22)

**Note:** Version bump only for package @aklesky/utilities





## [0.6.6](https://github.com/aklesky/node-workspace/compare/v0.6.5...v0.6.6) (2023-08-21)

**Note:** Version bump only for package @aklesky/utilities





## [0.6.5](https://github.com/aklesky/node-workspace/compare/v0.6.4...v0.6.5) (2023-08-21)

**Note:** Version bump only for package @aklesky/utilities





## [0.6.4](https://github.com/aklesky/node-workspace/compare/v0.6.3...v0.6.4) (2023-08-21)

**Note:** Version bump only for package @aklesky/utilities





## [0.6.3](https://github.com/aklesky/node-workspace/compare/v0.6.2...v0.6.3) (2023-06-21)


### Bug Fixes

* **deps:** update dependency deepmerge-ts to v5 ([#98](https://github.com/aklesky/node-workspace/issues/98)) ([09ce502](https://github.com/aklesky/node-workspace/commit/09ce502c9b282d72619cbcdff778078c13f1d191))
* **deps:** update dependency rimraf to v4.3.0 ([#80](https://github.com/aklesky/node-workspace/issues/80)) ([344d932](https://github.com/aklesky/node-workspace/commit/344d93248e0e859b527ff147c035abb5d4756e52))
* **deps:** update dependency rimraf to v4.4.0 ([#83](https://github.com/aklesky/node-workspace/issues/83)) ([c38fb92](https://github.com/aklesky/node-workspace/commit/c38fb92be45f5d57c9567c455c40cd7217f8d71b))
* **deps:** update dependency rimraf to v5 ([#118](https://github.com/aklesky/node-workspace/issues/118)) ([2f92b20](https://github.com/aklesky/node-workspace/commit/2f92b20c86e95d54d8227da9d0ffd997aecb0bcf))





## [0.6.2](https://github.com/aklesky/node-workspace/compare/v0.6.1...v0.6.2) (2023-02-11)

**Note:** Version bump only for package @aklesky/utilities





# 0.6.0 (2023-02-09)


### Bug Fixes

* **deps:** update dependency deepmerge-ts to v4.3.0 ([#44](https://github.com/aklesky/node-workspace/issues/44)) ([4b77b80](https://github.com/aklesky/node-workspace/commit/4b77b80da94012d60cba8bae2e381bc50e7bbe4f))


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





# [0.2.0](https://github.com/aklesky/node-workspace/compare/@aklesky/utilities@0.1.2...@aklesky/utilities@0.2.0) (2023-02-09)


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





## [0.1.2](https://github.com/aklesky/node-workspace/compare/@aklesky/utilities@0.1.1...@aklesky/utilities@0.1.2) (2023-02-07)

**Note:** Version bump only for package @aklesky/utilities





## [0.1.1](https://github.com/aklesky/node-workspace/compare/@aklesky/utilities@0.1.0...@aklesky/utilities@0.1.1) (2023-02-07)

**Note:** Version bump only for package @aklesky/utilities





# 0.1.0 (2023-02-06)


### Bug Fixes

* **deps:** update dependency deepmerge-ts to v4.3.0 ([#44](https://github.com/aklesky/node-workspace/issues/44)) ([4b77b80](https://github.com/aklesky/node-workspace/commit/4b77b80da94012d60cba8bae2e381bc50e7bbe4f))


### Features

* react render to pipeable stream. ([#29](https://github.com/aklesky/node-workspace/issues/29)) ([ba8a966](https://github.com/aklesky/node-workspace/commit/ba8a9667b25c7b6fa37d8421a053387256b5fae2))
* vite plugin to handle react server side renderng ([#30](https://github.com/aklesky/node-workspace/issues/30)) ([71539ac](https://github.com/aklesky/node-workspace/commit/71539ac9390b9a3e058d8c007e9d21b6cfd4a64f))


### BREAKING CHANGES

* Switch npm to yarn
