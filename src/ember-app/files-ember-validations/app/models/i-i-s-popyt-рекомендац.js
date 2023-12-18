import {
  defineNamespace,
  defineProjections,
  Model as РекомендацMixin
} from '../mixins/regenerated/models/i-i-s-popyt-рекомендац';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(РекомендацMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
