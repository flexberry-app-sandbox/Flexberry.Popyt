import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  неУдовл: DS.attr('i-i-s-popyt-факторы'),
  удовл: DS.attr('i-i-s-popyt-факторы'),
  анкеты: DS.belongsTo('i-i-s-popyt-анкеты', { inverse: 'оценПричУвольн', async: false })
});

export let ValidationRules = {
  неУдовл: {
    descriptionKey: 'models.i-i-s-popyt-оцен-прич-увольн.validations.неУдовл.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  удовл: {
    descriptionKey: 'models.i-i-s-popyt-оцен-прич-увольн.validations.удовл.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  анкеты: {
    descriptionKey: 'models.i-i-s-popyt-оцен-прич-увольн.validations.анкеты.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОценПричУвольнE', 'i-i-s-popyt-оцен-прич-увольн', {
    неУдовл: attr('1-5 (не удовлетворен)', { index: 0 }),
    удовл: attr('6-10 (удовлетворен)', { index: 1 })
  });
};
