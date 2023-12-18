import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ПричинУвольнMixin
} from '../mixins/regenerated/models/i-i-s-popyt-причин-увольн';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ПричинУвольнMixin, Validations, {
});

defineProjections(Model);

export default Model;
