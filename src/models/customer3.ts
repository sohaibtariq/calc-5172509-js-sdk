/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema } from '../schema';
import { Data47, data47Schema } from './data47';

/** Customer that was created. */
export interface Customer3 {
  /** Provided data for this customer relationship. */
  data: Data47;
}

export const customer3Schema: Schema<Customer3> = object({
  data: ['data', lazy(() => data47Schema)],
});
