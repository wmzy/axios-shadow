[![Build Status](https://travis-ci.org/wmzy/axios-shadow.svg?branch=master)](https://travis-ci.org/wmzy/axios-shadow)
[![Coverage Status](https://coveralls.io/repos/github/wmzy/axios-shadow/badge.svg?branch=master)](https://coveralls.io/github/wmzy/axios-shadow?branch=master)
# axios-shadow

> A wrapper for axios to code splitting.

## Installation

```bash
npm i axios-shadow
```

## Usage

### Init with a splitting axios

With [dynamic imports](https://webpack.js.org/guides/code-splitting/#dynamic-imports) we can split `axios` from the main bundle.

```js
import axios from 'axios-shadow';

axios.getModule = () => import('axios');
// or
axios.getInstance = () => import('axios').then(({default: axios}) => {
  // you can init global axios defaults and interceptors
  axios.defaults.baseURL = 'https://api.example.com';
  // ...

  // custom instance also support
  // return axios.create();
  return axios;
});
```

### Use a shadow instance

```js
// axios.js
import {create} from 'axios-shadow';

const axios = create();

axios.getInstance = () => import('axios').then(m => m.default.create());

export default axios;
```

### Use axios shadow for request

```js
import axios from 'axios-shadow';
// or
import axios from './axios';

// all async methods are proxied
axios(url).then(response => {});
axios.get(url).then(response => {});
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
