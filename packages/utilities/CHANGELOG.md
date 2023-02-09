# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

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
