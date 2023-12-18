import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ФакторыEnum from '../enums/i-i-s-popyt-факторы';

export default FlexberryEnum.extend({
  enum: ФакторыEnum,
  sourceType: 'IIS.Popyt.Факторы'
});
