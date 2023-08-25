/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';
import { StateEnum, stateEnumSchema } from './stateEnum';

/** The mailing address of this customer. */
export interface MailingAddress {
  /** The first line of the address. */
  address1: string;
  /** The second line of the address. */
  address2?: string;
  /** The city of the address. */
  city: string;
  /** Two letter state code of the address. */
  state: StateEnum;
  /** 5 or 10 character postal code of the address. */
  zip: string;
}

export const mailingAddressSchema: Schema<MailingAddress> = object({
  address1: ['address1', string()],
  address2: ['address2', optional(string())],
  city: ['city', string()],
  state: ['state', stateEnumSchema],
  zip: ['zip', string()],
});