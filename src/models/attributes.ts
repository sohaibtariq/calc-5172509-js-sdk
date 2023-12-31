/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string, unknown } from '../schema';

/** Attributes that describe an Insured Risk. */
export interface Attributes {
  /** Date time when this resource was created in our system. */
  createdDate?: string;
  /** Date time when this resource was last modified in our system. */
  modifiedDate?: string;
  /** Specific ratable factors that apply to this Insured Risk. The content must fully adhere to a product-specific, pre-defined schema. */
  factors?: unknown;
}

export const attributesSchema: Schema<Attributes> = object({
  createdDate: ['created_date', optional(string())],
  modifiedDate: ['modified_date', optional(string())],
  factors: ['factors', optional(unknown())],
});
