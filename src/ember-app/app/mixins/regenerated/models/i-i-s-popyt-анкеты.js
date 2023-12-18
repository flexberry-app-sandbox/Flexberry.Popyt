import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  возрастСотруд: DS.attr('i-i-s-popyt-возраст'),
  датаЗаполн: DS.attr('date'),
  какойСтаж: DS.attr('i-i-s-popyt-стаж'),
  коммент: DS.attr('string'),
  относКатСотр: DS.attr('i-i-s-popyt-катег-сотруд'),
  специалист: DS.belongsTo('i-i-s-popyt-специалист', { inverse: null, async: false }),
  оценПричУвольн: DS.hasMany('i-i-s-popyt-оцен-прич-увольн', { inverse: 'анкеты', async: false })
});

export let ValidationRules = {
  возрастСотруд: {
    descriptionKey: 'models.i-i-s-popyt-анкеты.validations.возрастСотруд.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  датаЗаполн: {
    descriptionKey: 'models.i-i-s-popyt-анкеты.validations.датаЗаполн.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  какойСтаж: {
    descriptionKey: 'models.i-i-s-popyt-анкеты.validations.какойСтаж.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  коммент: {
    descriptionKey: 'models.i-i-s-popyt-анкеты.validations.коммент.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  относКатСотр: {
    descriptionKey: 'models.i-i-s-popyt-анкеты.validations.относКатСотр.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  специалист: {
    descriptionKey: 'models.i-i-s-popyt-анкеты.validations.специалист.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  оценПричУвольн: {
    descriptionKey: 'models.i-i-s-popyt-анкеты.validations.оценПричУвольн.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('АнкетыE', 'i-i-s-popyt-анкеты', {
    датаЗаполн: attr('Дата заполнения', { index: 0 }),
    относКатСотр: attr('Категория сотрудников', { index: 1 }),
    какойСтаж: attr('Стаж', { index: 2 }),
    возрастСотруд: attr('Возраст сотрудника', { index: 3 }),
    коммент: attr('Комментарии уволившегося сотрудника', { index: 4 }),
    оценПричУвольн: hasMany('i-i-s-popyt-оцен-прич-увольн', 'Оценки', {
      неУдовл: attr('1-5 (не удовлетворен)', { index: 0 }),
      удовл: attr('6-10 (удовлетворен)', { index: 1 })
    })
  });

  modelClass.defineProjection('АнкетыL', 'i-i-s-popyt-анкеты', {
    датаЗаполн: attr('Дата заполн', { index: 0 }),
    какойСтаж: attr('Какой стаж', { index: 1 }),
    возрастСотруд: attr('Возраст сотруд', { index: 2 })
  });
};
