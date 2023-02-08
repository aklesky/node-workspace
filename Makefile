bootstrap:
	yarn install
	npx lerna bootstrap
	npx lerna run build
	npx lerna link
build:
	npx lerna run build
link:
	npx lerna link
test:
	npx lerna run test
lint:
	npx lerna run lint
ci:
	yarn install --frozen-lockfile
	npx lerna bootstrap --ci
	npx lerna build
	npx lerna link
	npx lerna run lint
	npx lerna run test
release:
	npx lerna publish --create-release github --yes
