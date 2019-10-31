export function create() {
  let instance;
  function axiosShadow(...params) {
    instance = instance || axiosShadow.getInstance();
    return instance.then(axios => axios(...params));
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
    axiosShadow[method] = (...params) => {
      instance = instance || axiosShadow.getInstance();
      return instance.then(axios => axios[method](...params));
    };
  });

  return axiosShadow;
}

export default create();
