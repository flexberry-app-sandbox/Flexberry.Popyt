import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаЗаполн: DS.attr('date', { defaultValue() { return new Date(); } }),
  оценПричУвольн: DS.belongsTo('i-i-s-popyt-оцен-прич-увольн', { inverse: null, async: false }),
  специалист: DS.belongsTo('i-i-s-popyt-специалист', { inverse: null, async: false }),
  рекомендации: DS.hasMany('i-i-s-popyt-рекомендац', { inverse: 'причинУвольн', async: false })
});

export let ValidationRules = {
  датаЗаполн: {
    descriptionKey: 'models.i-i-s-popyt-причин-увольн.validations.датаЗаполн.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  оценПричУвольн: {
    descriptionKey: 'models.i-i-s-popyt-причин-увольн.validations.оценПричУвольн.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  специалист: {
    descriptionKey: 'models.i-i-s-popyt-причин-увольн.validations.специалист.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  рекомендации: {
    descriptionKey: 'models.i-i-s-popyt-причин-увольн.validations.рекомендации.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПричинУвольнE', 'i-i-s-popyt-причин-увольн', {
    датаЗаполн: attr('Дата заполнения', { index: 0 }),
    специалист: belongsTo('i-i-s-popyt-специалист', 'ФИО', {

    }, { index: 1, displayMemberPath: 'фИО' }),
    рекомендации: hasMany('i-i-s-popyt-рекомендац', 'Рекомендации', {
      специалисты: attr('Специалисты', { index: 0 }),
      руководители: attr('Руководители', { index: 1 }),
      рабочие: attr('Рабочие', { index: 2 })
    })
  });

  modelClass.defineProjection('ПричинУвольнL', 'i-i-s-popyt-причин-увольн', {
    датаЗаполн: attr('Дата заполн', { index: 0 })
  });
};
