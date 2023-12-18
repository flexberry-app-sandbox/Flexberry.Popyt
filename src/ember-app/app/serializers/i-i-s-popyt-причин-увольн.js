import { Serializer as ПричинУвольнSerializer } from
  '../mixins/regenerated/serializers/i-i-s-popyt-причин-увольн';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ПричинУвольнSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
