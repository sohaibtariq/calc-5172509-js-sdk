/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

/** Provided data for this agent relationship. */
export interface Data1 {
  /** The type of resource being represented. */
  type: string;
  /** UUID that identifies this resource. */
  id: string;
}

export const data1Schema: Schema<Data1> = object({
  type: ['type', string()],
  id: ['id', string()],
});