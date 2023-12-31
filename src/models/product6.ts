/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema } from '../schema';
import { Data43, data43Schema } from './data43';

/**
 * Boost supplied value representing the specific product type. The product's configuration
 * will determine allowable values for the Policy, such as limit and deductible.
 */
export interface Product6 {
  /** Provided data for this product relationship. */
  data: Data43;
}

export const product6Schema: Schema<Product6> = object({
  data: ['data', lazy(() => data43Schema)],
});
