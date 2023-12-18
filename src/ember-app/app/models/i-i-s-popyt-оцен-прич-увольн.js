import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ОценПричУвольнMixin
} from '../mixins/regenerated/models/i-i-s-popyt-оцен-прич-увольн';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ОценПричУвольнMixin, Validations, {
});

defineProjections(Model);

export default Model;
