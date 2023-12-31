/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

/** Provided data for this product coverage relationship. */
export interface Data21 {
  /** The type of resource being represented. */
  type: string;
  /** UUID that identifies this resource. */
  id: string;
}

export const data21Schema: Schema<Data21> = object({
  type: ['type', string()],
  id: ['id', string()],
});
