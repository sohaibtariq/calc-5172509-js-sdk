/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

export interface Data7 {
  /** The type of resource being represented. */
  type: string;
  /** UUID that identifies this resource. */
  id: string;
}

export const data7Schema: Schema<Data7> = object({
  type: ['type', string()],
  id: ['id', string()],
});
