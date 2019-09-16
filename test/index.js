import axiosShadow from '../src';

describe('axios-shadow', function() {
  it('module', function() {
    const result = {};
    axiosShadow.getModule = () =>
      Promise.resolve({
        default: () => Promise.resolve(result)
      });
    return axiosShadow().then(r => r.should.be.equal(result));
  });

  it('instance', function() {
    const result = {};
    axiosShadow.getInstance = () =>
      Promise.resolve(() => Promise.resolve(result));
    return axiosShadow().then(r => r.should.be.equal(result));
  });

  it('methods', function() {
    const result = {};
    function axios() {}
    axios.request = () => Promise.resolve(result);
    axiosShadow.getInstance = () => Promise.resolve(axios);
    return axiosShadow.request().then(r => r.should.be.equal(result));
  });
});
