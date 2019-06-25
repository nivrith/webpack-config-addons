const getAddons = require('./index');
const mockRequire = require('mock-require');
const path = require('path');
const assert= require('assert');

const addonStub = () => ({module: 'test'});



describe('Required From', function () {
  let addonsConfig;
  before(function(){
    mockRequire(path.join(__dirname, '/mock/addons/webpack.mockaddon'), addonStub);

    addonsConfig = getAddons({addons: ['mockaddon']}, {addonsPath: './mock/addons'});
  });

  it('should return a truthy value', function () {
    assert.ok(addonsConfig);
  });

  it('should return an object', function () {
    assert.equal(addonsConfig.module, 'test');
  });
});
