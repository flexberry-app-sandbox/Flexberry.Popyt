import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-popyt-специалист', 'Unit | Model | i-i-s-popyt-специалист', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-popyt-анкеты',
    'model:i-i-s-popyt-оцен-прич-увольн',
    'model:i-i-s-popyt-причин-увольн',
    'model:i-i-s-popyt-рекомендац',
    'model:i-i-s-popyt-специалист',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
