import {
  defineNamespace,
  defineProjections,
  Model as ПричинУвольнMixin
} from '../mixins/regenerated/models/i-i-s-popyt-причин-увольн';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ПричинУвольнMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
