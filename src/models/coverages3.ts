/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, Schema } from '../schema';
import { Data46, data46Schema } from './data46';

/** List of coverages that were created. */
export interface Coverages3 {
  /** List of objects. */
  data: Data46[];
}

export const coverages3Schema: Schema<Coverages3> = object({
  data: ['data', array(lazy(() => data46Schema))],
});
