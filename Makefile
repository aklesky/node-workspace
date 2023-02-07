bootstrap:
	yarn install
	yarn setup
	yarn build
	yarn link:workspace
build:
	yarn build
link:
	yarn workspace
test:
	yarn test
lint:
	yarn lint
ci:
	yarn install --frozen-lockfile
	yarn setup:ci
	yarn build
	yarn link:workspace
	yarn lint
	yarn test
release:
	yarn release:ci
