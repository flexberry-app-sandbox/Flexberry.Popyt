import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

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
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Popyt',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Popyt',
          title: 'Popyt'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
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
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
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
