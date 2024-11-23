.PHONY: up
up: clear
	pnpm install
	npx lerna run build

.PHONY: build
build:
	npx lerna run build
.PHONY: test
test:
	npx lerna run test
.PHONY: lint
lint:
	npx lerna run lint
.PHONY: ci
ci:
	yarn install --frozen-lockfile
	npx lerna run build
	npx lerna run lint
	npx lerna run test
.PHONY: release
release:
	npx lerna publish --create-release github --yes
.PHONY: check-outdated
check-outdated:
	npx ncu -ws --root
.PHONY: update
update:
	npx ncu -ws --root -u
.PHONY: clear-build
clean-build: clear build
.PHONY: clear
clear:
	npx -y rimraf -rf node_modules
	npx -y lerna run clean
