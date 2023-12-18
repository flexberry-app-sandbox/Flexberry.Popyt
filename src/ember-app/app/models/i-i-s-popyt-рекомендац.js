import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as РекомендацMixin
} from '../mixins/regenerated/models/i-i-s-popyt-рекомендац';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(РекомендацMixin, Validations, {
});

defineProjections(Model);

export default Model;
