/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema } from '../schema';
import { Agent6, agent6Schema } from './agent6';
import { Product6, product6Schema } from './product6';

/** Related items. */
export interface Relationships14 {
  /**
   * Boost supplied value representing the specific product type. The product's configuration
   * will determine allowable values for the Policy, such as limit and deductible.
   */
  product: Product6;
  /** The Boost UUID of the agent. */
  agent: Agent6;
}

export const relationships14Schema: Schema<Relationships14> = object({
  product: ['product', lazy(() => product6Schema)],
  agent: ['agent', lazy(() => agent6Schema)],
});