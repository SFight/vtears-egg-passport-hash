'use strict';

const mock = require('egg-mock');

describe('test/passport-hash.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/passport-hash-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, passportHash')
      .expect(200);
  });
});
