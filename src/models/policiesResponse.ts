/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, Schema, unknown } from '../schema';
import { Data9, data9Schema } from './data9';

export interface PoliciesResponse {
  data: Data9;
  /**
   * Array of included objects which provide additional data about an object from the
   * above `data.relationships`.
   */
  included: unknown[];
}

export const policiesResponseSchema: Schema<PoliciesResponse> = object({
  data: ['data', lazy(() => data9Schema)],
  included: ['included', array(unknown())],
});
