import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-popyt-анкеты-l');
  this.route('i-i-s-popyt-анкеты-e',
  { path: 'i-i-s-popyt-анкеты-e/:id' });
  this.route('i-i-s-popyt-анкеты-e.new',
  { path: 'i-i-s-popyt-анкеты-e/new' });
  this.route('i-i-s-popyt-причин-увольн-l');
  this.route('i-i-s-popyt-причин-увольн-e',
  { path: 'i-i-s-popyt-причин-увольн-e/:id' });
  this.route('i-i-s-popyt-причин-увольн-e.new',
  { path: 'i-i-s-popyt-причин-увольн-e/new' });
  this.route('i-i-s-popyt-специалист-l');
  this.route('i-i-s-popyt-специалист-e',
  { path: 'i-i-s-popyt-специалист-e/:id' });
  this.route('i-i-s-popyt-специалист-e.new',
  { path: 'i-i-s-popyt-специалист-e/new' });
});

export default Router;
