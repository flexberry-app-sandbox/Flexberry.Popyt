import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-popyt-рекомендац', 'Unit | Serializer | i-i-s-popyt-рекомендац', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-popyt-рекомендац',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-popyt-возраст',
    'transform:i-i-s-popyt-катег-сотруд',
    'transform:i-i-s-popyt-стаж',
    'transform:i-i-s-popyt-факторы',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
