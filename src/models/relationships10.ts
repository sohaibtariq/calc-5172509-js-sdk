/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema } from '../schema';
import { ProductCoverage, productCoverageSchema } from './productCoverage';

/** Related items. */
export interface Relationships10 {
  /** Product coverage that applies to this policy. */
  productCoverage: ProductCoverage;
}

export const relationships10Schema: Schema<Relationships10> = object({
  productCoverage: ['product_coverage', lazy(() => productCoverageSchema)],
});
