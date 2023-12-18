import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.popyt.caption'),
          title: i18n.t('forms.application.sitemap.popyt.title'),
          children: [{
            link: 'i-i-s-popyt-причин-увольн-l',
            caption: i18n.t('forms.application.sitemap.popyt.i-i-s-popyt-причин-увольн-l.caption'),
            title: i18n.t('forms.application.sitemap.popyt.i-i-s-popyt-причин-увольн-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-popyt-специалист-l',
            caption: i18n.t('forms.application.sitemap.popyt.i-i-s-popyt-специалист-l.caption'),
            title: i18n.t('forms.application.sitemap.popyt.i-i-s-popyt-специалист-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-popyt-анкеты-l',
            caption: i18n.t('forms.application.sitemap.popyt.i-i-s-popyt-анкеты-l.caption'),
            title: i18n.t('forms.application.sitemap.popyt.i-i-s-popyt-анкеты-l.title'),
            icon: 'phone',
            children: null
          }]
        }
      ]
    };
  }),
})