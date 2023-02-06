bootstrap:
	npx lerna bootstrap
	npx lerna run build
	npx lerna run link
build:
	npx lerna run build
link:
	npx lerna link
test:
	npx lerna run test
ci:
	npx lerna bootstrap --ci
	npx lerna run build
	npx lerna link
	npx lerna run test
release:
	npx lerna publish --create-release github --yes
