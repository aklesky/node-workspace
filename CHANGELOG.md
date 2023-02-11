# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [0.6.2](https://github.com/aklesky/node-workspace/compare/v0.6.1...v0.6.2) (2023-02-11)

**Note:** Version bump only for package @aklesky/node-workspace





## [0.6.1](https://github.com/aklesky/node-workspace/compare/v0.6.0...v0.6.1) (2023-02-09)

**Note:** Version bump only for package @aklesky/node-workspace





# 0.6.0 (2023-02-09)


### Bug Fixes

* **deps:** update dependency @swc/core to v1.3.34 ([#56](https://github.com/aklesky/node-workspace/issues/56)) ([f6f23f8](https://github.com/aklesky/node-workspace/commit/f6f23f8b6f47da7a78bb09279224d4a8f5a325cb))
* **deps:** update dependency deepmerge-ts to v4.3.0 ([#44](https://github.com/aklesky/node-workspace/issues/44)) ([4b77b80](https://github.com/aklesky/node-workspace/commit/4b77b80da94012d60cba8bae2e381bc50e7bbe4f))
* **deps:** update typescript-eslint monorepo to v5.51.0 ([#49](https://github.com/aklesky/node-workspace/issues/49)) ([7020c7e](https://github.com/aklesky/node-workspace/commit/7020c7e363b4da4b7bc9ccdadf23c002e57e60d0))
* **release-script:** fix release workflow ([#48](https://github.com/aklesky/node-workspace/issues/48)) ([4a13ebb](https://github.com/aklesky/node-workspace/commit/4a13ebb736957ca497e7a0d13ff1912b6b2ad8e1))
* **release-script:** fix release workflow ([#50](https://github.com/aklesky/node-workspace/issues/50)) ([9bd9ccb](https://github.com/aklesky/node-workspace/commit/9bd9ccb8e6549850af7c4039280293ee921f69bb))


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
