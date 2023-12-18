import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  рабочие: DS.attr('string'),
  руководители: DS.attr('string'),
  специалисты: DS.attr('string'),
  причинУвольн: DS.belongsTo('i-i-s-popyt-причин-увольн', { inverse: 'рекомендации', async: false })
});

export let ValidationRules = {
  рабочие: {
    descriptionKey: 'models.i-i-s-popyt-рекомендац.validations.рабочие.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  руководители: {
    descriptionKey: 'models.i-i-s-popyt-рекомендац.validations.руководители.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  специалисты: {
    descriptionKey: 'models.i-i-s-popyt-рекомендац.validations.специалисты.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  причинУвольн: {
    descriptionKey: 'models.i-i-s-popyt-рекомендац.validations.причинУвольн.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('РекомендацE', 'i-i-s-popyt-рекомендац', {
    специалисты: attr('Специалисты', { index: 0 }),
    руководители: attr('Руководители', { index: 1 }),
    рабочие: attr('Рабочие', { index: 2 })
  });
};
