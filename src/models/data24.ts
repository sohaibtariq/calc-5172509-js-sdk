/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, Schema, string, unknown } from '../schema';
import { Attributes6, attributes6Schema } from './attributes6';
import { Relationships3, relationships3Schema } from './relationships3';

/** All values that describe this policy resource are listed in here. */
export interface Data24 {
  /** The type of resource being represented. */
  type: string;
  id: string;
  /** Attributes that describe a policy resource with optional writeable money fields. */
  attributes: Attributes6;
  /** Items related to this policy. */
  relationships: Relationships3;
  /**
   * Array of included objects which provide additional data about an object from the
   * above `data.relationships`.
   */
  included: unknown[];
}

export const data24Schema: Schema<Data24> = object({
  type: ['type', string()],
  id: ['id', string()],
  attributes: ['attributes', lazy(() => attributes6Schema)],
  relationships: ['relationships', lazy(() => relationships3Schema)],
  included: ['included', array(unknown())],
});