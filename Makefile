.PHONY: up
up: clear
	pnpm install
	npx nx run-many --target=build
.PHONY: build
build:
	npx nx run-many --target=build
.PHONY: test
test:
	npx nx run-many --target=test
.PHONY: lint
lint:
	npx nx run-many --target=lint
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
.PHONY: release
release:
	npx nx release
