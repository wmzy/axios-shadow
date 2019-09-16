export function create() {
  function axiosShadow() {
    return (
      axiosShadow
        .getInstance()
        // eslint-disable-next-line prefer-spread, prefer-rest-params
        .then(axios => axios.apply(undefined, arguments))
    );
  }

  axiosShadow.getInstance = function getInstance() {
    return axiosShadow.getModule().then(module => module.default);
  };

  [
    'request',
    'get',
    'delete',
    'head',
    'options',
    'post',
    'put',
    'patch'
  ].forEach(method => {
    axiosShadow[method] = () =>
      axiosShadow
        .getInstance()
        // eslint-disable-next-line prefer-spread, prefer-rest-params
        .then(axios => axios[method].apply(axios, arguments));
  });

  return axiosShadow;
}

export default create();
