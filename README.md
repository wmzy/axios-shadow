[![Build Status](https://travis-ci.org/wmzy/axios-shadow.svg?branch=master)](https://travis-ci.org/wmzy/axios-shadow)
[![Coverage Status](https://coveralls.io/repos/github/wmzy/axios-shadow/badge.svg?branch=master)](https://coveralls.io/github/wmzy/axios-shadow?branch=master)
# axios-shadow

> A wrapper for axios to code splitting.

## Installation

```bash
npm i axios-shadow
```

## Usage

```js
import axios from 'axios-shadow';

axios.getModule = () => import('axios');
// or
axios.getInstance = () => import('axios').then(m => m.default);
```

## Compatibility Note

This lib support [these browsers or devices](.broserslistrc) with [these methods or APIs](.eslintrc.js#L27) pollyfilled.

## Workflow

```bash
# develop
npm start

# build
npm run build

# test
npm test

# commit changes
npm run commit

# publish
npm publish
```
