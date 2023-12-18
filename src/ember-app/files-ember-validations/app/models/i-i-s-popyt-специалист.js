import {
  defineNamespace,
  defineProjections,
  Model as СпециалистMixin
} from '../mixins/regenerated/models/i-i-s-popyt-специалист';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(СпециалистMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
