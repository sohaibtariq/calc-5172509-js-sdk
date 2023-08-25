/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

/** Provided data for this insured risk relationship with local ID. */
export interface Data42 {
  /** The type of resource being represented. */
  type: string;
  /** The local ID that ties this resource to a related object in `data.included`. */
  lid: string;
}

export const data42Schema: Schema<Data42> = object({
  type: ['type', string()],
  lid: ['lid', string()],
});
