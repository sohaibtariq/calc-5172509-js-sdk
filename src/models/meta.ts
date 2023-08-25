/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, optional, Schema } from '../schema';

/** Additional meta information about this data. */
export interface Meta {
  /** The number of related objects of this type. */
  count?: number;
}

export const metaSchema: Schema<Meta> = object({
  count: ['count', optional(number())],
});