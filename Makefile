bootstrap:
	yarn install
	npx lerna run build
build:
	npx lerna run build
test:
	npx lerna run test
lint:
	npx lerna run lint
ci:
	yarn install --frozen-lockfile
	npx lerna run build
	npx lerna run lint
	npx lerna run test
release:
	npx lerna publish --create-release github --yes
check-outdated:
	npx ncu -ws --root
update:
	npx ncu -ws --root -u
clean-build: clear build
clear:
	npx lerna run clean
