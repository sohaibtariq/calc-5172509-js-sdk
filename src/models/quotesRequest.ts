/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, Schema, unknown } from '../schema';
import { Data39, data39Schema } from './data39';

/** Data for creating a quote. */
export interface QuotesRequest {
  /** All values for the request are in this top-level object. */
  data: Data39;
  /** Array of included objects. */
  included: unknown[];
}

export const quotesRequestSchema: Schema<QuotesRequest> = object({
  data: ['data', lazy(() => data39Schema)],
  included: ['included', array(unknown())],
});
