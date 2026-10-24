## 0.1.2 (2026-10-24)

### 🩹 Fixes

- **deps:** update dependencies, github actions and the renovate config ([#302](https://github.com/aklesky/node-workspace/pull/302))

### 🧱 Updated Dependencies

- Updated @aklesky/typescript-presets to 0.1.2
- Updated @aklesky/vite-presets to 0.1.2

### ❤️ Thank You

- Aleksei Semiglasov @aklesky

## 0.1.1 (2026-10-24)

### 🩹 Fixes

- point each package's repository at its directory ([#294](https://github.com/aklesky/node-workspace/pull/294))

### 🧱 Updated Dependencies

- Updated @aklesky/typescript-presets to 0.1.1
- Updated @aklesky/vite-presets to 0.1.1

### ❤️ Thank You

- Aleksei Semiglasov @aklesky

## 0.1.0 (2026-10-24)

### 🚀 Features

- ⚠️  modernize the presets and publish them as @aklesky/*-presets ([#291](https://github.com/aklesky/node-workspace/pull/291))

### ⚠️  Breaking Changes

- modernize the presets and publish them as @aklesky/*-presets  ([#291](https://github.com/aklesky/node-workspace/pull/291))
  the packages are published under new names, starting at 0.1.0. Replace
  @aklesky/eslint-config, @aklesky/prettier-config, @aklesky/ts-config, @aklesky/vite-config,
  @aklesky/vitest-config and @aklesky/tailwind-config with the matching @aklesky/*-presets package.
  @aklesky/react-presets continues from its published 0.9.0. The tools each preset configures
  are exact peer dependencies installed by the app."
  M	.editorconfig
  M	.github/workflows/build-test.yml
  M	.github/workflows/release-and-publish.yml
  D	.github/workflows/renovate.yml
  M	.gitignore
  D	.npmrc
  D	.prettierignore
  M	.vscode/extensions.json
  M	.vscode/settings.json
  M	CODE_OF_CONDUCT.md
  M	README.md
  M	SECURITY.md
  D	eslint.config.mjs
  M	nx.json
  A	oxfmt.config.ts
  A	oxlint.config.ts
  M	package.json
  D	packages/eslint-config/CHANGELOG.md
  D	packages/eslint-config/README.md
  D	packages/eslint-config/package.json
  D	packages/eslint-config/project.json
  D	packages/eslint-config/src/common.ts
  D	packages/eslint-config/src/jsx.ts
  D	packages/eslint-config/src/presets/common.ts
  D	packages/eslint-config/tsconfig.json
  R100	packages/eslint-config/LICENSE.md	packages/eslint-presets/LICENSE.md
  A	packages/eslint-presets/README.md
  A	packages/eslint-presets/package.json
  A	packages/eslint-presets/src/common.ts
  R051	packages/eslint-config/src/node.ts	packages/eslint-presets/src/node.ts
  A	packages/eslint-presets/src/presets/common.ts
  R096	packages/eslint-config/src/presets/node.ts	packages/eslint-presets/src/presets/node.ts
  R075	packages/eslint-config/src/utils.ts	packages/eslint-presets/src/utils.ts
  R052	packages/eslint-config/tsconfig.build.json	packages/eslint-presets/tsconfig.build.json
  A	packages/eslint-presets/tsconfig.json
  D	packages/eslint-prettier-config/CHANGELOG.md
  D	packages/eslint-prettier-config/package.json
  D	packages/eslint-prettier-config/project.json
  D	packages/eslint-prettier-config/src/config.ts
  D	packages/eslint-prettier-config/src/preset.ts
  D	packages/eslint-prettier-config/tsconfig.json
  D	packages/jest-config/CHANGELOG.md
  D	packages/jest-config/README.md
  D	packages/jest-config/package.json
  D	packages/jest-config/project.json
  D	packages/jest-config/src/config.ts
  D	packages/jest-config/src/constants.ts
  D	packages/jest-config/src/eslint.ts
  D	packages/jest-config/src/preset.ts
  D	packages/jest-config/src/swc.ts
  D	packages/jest-config/src/utils.ts
  D	packages/jest-config/tsconfig.build.json
  D	packages/jest-config/tsconfig.json
  R100	packages/jest-config/LICENSE.md	packages/oxc-presets/LICENSE.md
  A	packages/oxc-presets/README.md
  A	packages/oxc-presets/package.json
  A	packages/oxc-presets/src/oxfmt.ts
  A	packages/oxc-presets/src/oxlint-react.ts
  A	packages/oxc-presets/src/oxlint.ts
  R052	packages/prettier-config/tsconfig.build.json	packages/oxc-presets/tsconfig.build.json
  A	packages/oxc-presets/tsconfig.json
  D	packages/postcss-config/CHANGELOG.md
  D	packages/postcss-config/README.md
  D	packages/postcss-config/package.json
  D	packages/postcss-config/project.json
  D	packages/postcss-config/src/config.ts
  D	packages/postcss-config/src/interfaces.ts
  D	packages/postcss-config/src/plugins/autoprefixer.ts
  D	packages/postcss-config/src/plugins/cssnano.ts
  D	packages/postcss-config/src/plugins/nesting.ts
  D	packages/postcss-config/src/plugins/types.ts
  D	packages/postcss-config/src/presets/base.ts
  D	packages/postcss-config/tsconfig.json
  D	packages/prettier-config/CHANGELOG.md
  D	packages/prettier-config/README.md
  D	packages/prettier-config/project.json
  D	packages/prettier-config/tsconfig.json
  R100	packages/prettier-config/LICENSE.md	packages/prettier-presets/LICENSE.md
  A	packages/prettier-presets/README.md
  R057	packages/prettier-config/package.json	packages/prettier-presets/package.json
  R061	packages/prettier-config/src/config.ts	packages/prettier-presets/src/config.ts
  R100	packages/prettier-config/src/index.ts	packages/prettier-presets/src/index.ts
  R052	packages/eslint-prettier-config/tsconfig.build.json	packages/prettier-presets/tsconfig.build.json
  A	packages/prettier-presets/tsconfig.json
  R100	packages/ts-config/LICENSE.md	packages/react-presets/LICENSE.md
  A	packages/react-presets/README.md
  A	packages/react-presets/package.json
  A	packages/react-presets/src/plugin.ts
  A	packages/react-presets/src/preset.ts
  A	packages/react-presets/src/rsc.ts
  A	packages/react-presets/src/worker.ts
  R063	packages/vite-config/tsconfig.build.json	packages/react-presets/tsconfig.build.json
  A	packages/react-presets/tsconfig.json
  A	packages/react-presets/tsconfig/jsx.json
  D	packages/tailwind-config/CHANGELOG.md
  D	packages/tailwind-config/README.md
  D	packages/tailwind-config/package.json
  D	packages/tailwind-config/project.json
  D	packages/tailwind-config/src/config.ts
  D	packages/tailwind-config/src/plugin.ts
  D	packages/tailwind-config/src/plugins.ts
  D	packages/tailwind-config/src/presets/base.ts
  D	packages/tailwind-config/src/presets/full.ts
  D	packages/tailwind-config/tsconfig.json
  D	packages/tailwind-config/tsconfig.node.json
  A	packages/tailwindcss-presets/README.md
  A	packages/tailwindcss-presets/package.json
  A	packages/tailwindcss-presets/src/forms.css
  A	packages/tailwindcss-presets/src/preset.css
  A	packages/tailwindcss-presets/src/typography.css
  A	packages/tailwindcss-presets/src/vite.ts
  R051	packages/tailwind-config/tsconfig.build.json	packages/tailwindcss-presets/tsconfig.build.json
  A	packages/tailwindcss-presets/tsconfig.json
  D	packages/ts-config/CHANGELOG.md
  D	packages/ts-config/README.md
  D	packages/ts-config/node/18.x/build.esm.json
  D	packages/ts-config/node/18.x/node.json
  D	packages/ts-config/node/20.x/bundler.json
  D	packages/ts-config/node/20.x/node.json
  D	packages/ts-config/package.json
  D	packages/ts-config/project.json
  D	packages/ts-config/shared/esm.json
  R100	packages/vite-config/LICENSE.md	packages/typescript-presets/LICENSE.md
  A	packages/typescript-presets/README.md
  R067	packages/ts-config/node/18.x/build.json	packages/typescript-presets/node/24.x/build.json
  A	packages/typescript-presets/node/24.x/bundler.json
  A	packages/typescript-presets/node/24.x/node.json
  R060	packages/ts-config/node/20.x/build.json	packages/typescript-presets/node/26.x/build.json
  A	packages/typescript-presets/node/26.x/bundler.json
  A	packages/typescript-presets/node/26.x/node.json
  A	packages/typescript-presets/package.json
  R058	packages/ts-config/shared/node.json	packages/typescript-presets/shared/base.json
  D	packages/vite-config/CHANGELOG.md
  D	packages/vite-config/README.md
  D	packages/vite-config/package.json
  D	packages/vite-config/project.json
  D	packages/vite-config/tsconfig.json
  A	packages/vite-presets/LICENSE.md
  A	packages/vite-presets/README.md
  A	packages/vite-presets/package.json
  R063	packages/vite-config/src/plugins/plugin.ts	packages/vite-presets/src/plugins/plugin.ts
  R061	packages/vite-config/src/presets/base.ts	packages/vite-presets/src/presets/base.ts
  R056	packages/vite-config/src/presets/legacy.ts	packages/vite-presets/src/presets/legacy.ts
  R100	packages/vite-config/src/vite.ts	packages/vite-presets/src/vite.ts
  R051	packages/postcss-config/tsconfig.build.json	packages/vite-presets/tsconfig.build.json
  A	packages/vite-presets/tsconfig.json
  D	packages/vitest-config/CHANGELOG.md
  D	packages/vitest-config/package.json
  D	packages/vitest-config/project.json
  D	packages/vitest-config/src/preset.ts
  D	packages/vitest-config/src/profiling.ts
  D	packages/vitest-config/tsconfig.json
  A	packages/vitest-presets/README.md
  A	packages/vitest-presets/package.json
  R100	packages/vitest-config/src/constants.ts	packages/vitest-presets/src/constants.ts
  R058	packages/vitest-config/src/eslint.ts	packages/vitest-presets/src/eslint.ts
  A	packages/vitest-presets/src/preset.ts
  A	packages/vitest-presets/src/profiling.ts
  R071	packages/vitest-config/src/setup.ts	packages/vitest-presets/src/setup.ts
  R100	packages/vitest-config/src/utils.ts	packages/vitest-presets/src/utils.ts
  R052	packages/vitest-config/tsconfig.build.json	packages/vitest-presets/tsconfig.build.json
  A	packages/vitest-presets/tsconfig.json
  A	packages/worker-presets/LICENSE.md
  A	packages/worker-presets/README.md
  A	packages/worker-presets/package.json
  A	packages/worker-presets/src/plugin.ts
  A	packages/worker-presets/src/preset.ts
  A	packages/worker-presets/tsconfig.build.json
  A	packages/worker-presets/tsconfig.json
  M	pnpm-lock.yaml
  M	pnpm-workspace.yaml
  M	renovate.json
  M	tsconfig.json

### 🧱 Updated Dependencies

- Updated @aklesky/typescript-presets to 0.1.0
- Updated @aklesky/vite-presets to 0.1.0

### ❤️ Thank You

- Aleksei Semiglasov @aklesky