import { mdRemarkable } from 'add-test/helpers/md-remarkable';
import { module, test } from 'qunit';

module('Unit | Helper | md remarkable');

test('it correctly converts markdown to html', function(assert) {
  var result = mdRemarkable('# This should be a h1');
  assert.equal(result.toString().trim(), '<h1>This should be a h1</h1>');
});
