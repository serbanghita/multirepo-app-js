# Multi-repo `app`
> POC of using a remote package dependency `core` in a JavaScript (ES6) project `app`.

**Install**

1. `npm install`
1. Go to `core` repo; Run `npm link`
1. Come back to `app`; Run `npm link multirepo-core`
1. `npm run transpile`
1. `node dist/index.js`