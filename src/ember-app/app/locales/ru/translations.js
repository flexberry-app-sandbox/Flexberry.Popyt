import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISPopytАнкетыLForm from './forms/i-i-s-popyt-анкеты-l';
import IISPopytПричинУвольнLForm from './forms/i-i-s-popyt-причин-увольн-l';
import IISPopytСпециалистLForm from './forms/i-i-s-popyt-специалист-l';
import IISPopytАнкетыEForm from './forms/i-i-s-popyt-анкеты-e';
import IISPopytПричинУвольнEForm from './forms/i-i-s-popyt-причин-увольн-e';
import IISPopytСпециалистEForm from './forms/i-i-s-popyt-специалист-e';
import IISPopytАнкетыModel from './models/i-i-s-popyt-анкеты';
import IISPopytОценПричУвольнModel from './models/i-i-s-popyt-оцен-прич-увольн';
import IISPopytПричинУвольнModel from './models/i-i-s-popyt-причин-увольн';
import IISPopytРекомендацModel from './models/i-i-s-popyt-рекомендац';
import IISPopytСпециалистModel from './models/i-i-s-popyt-специалист';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-popyt-анкеты': IISPopytАнкетыModel,
    'i-i-s-popyt-оцен-прич-увольн': IISPopytОценПричУвольнModel,
    'i-i-s-popyt-причин-увольн': IISPopytПричинУвольнModel,
    'i-i-s-popyt-рекомендац': IISPopytРекомендацModel,
    'i-i-s-popyt-специалист': IISPopytСпециалистModel
  },

  'application-name': 'Popyt',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Popyt',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Popyt',
          title: 'Popyt'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        popyt: {
          caption: 'Popyt',
          title: 'Popyt',
          'i-i-s-popyt-причин-увольн-l': {
            caption: 'Причин увольн',
            title: ''
          },
          'i-i-s-popyt-специалист-l': {
            caption: 'Специалист',
            title: ''
          },
          'i-i-s-popyt-анкеты-l': {
            caption: 'Анкеты',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-popyt-анкеты-l': IISPopytАнкетыLForm,
    'i-i-s-popyt-причин-увольн-l': IISPopytПричинУвольнLForm,
    'i-i-s-popyt-специалист-l': IISPopytСпециалистLForm,
    'i-i-s-popyt-анкеты-e': IISPopytАнкетыEForm,
    'i-i-s-popyt-причин-увольн-e': IISPopytПричинУвольнEForm,
    'i-i-s-popyt-специалист-e': IISPopytСпециалистEForm
  },

});

export default translations;
