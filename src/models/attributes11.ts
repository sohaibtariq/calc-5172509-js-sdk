/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema, string } from '../schema';
import { BillingAddress, billingAddressSchema } from './billingAddress';
import { EntityTypeEnum, entityTypeEnumSchema } from './entityTypeEnum';
import { MailingAddress, mailingAddressSchema } from './mailingAddress';

/** The insured entity. */
export interface Attributes11 {
  /** A reference that can be used to identify this customer in your system. */
  externalReference?: string;
  /** The kind of customer this is. */
  entityType: EntityTypeEnum;
  /** The legal name of the business. */
  businessName?: string;
  /** The first name of the contact. */
  firstName: string;
  /** The last name of the contact. */
  lastName: string;
  /** The email address of the contact. */
  email: string;
  /** The primary phone number of the contact. */
  phone: string;
  /** The website of the contact. */
  website?: string;
  /** The mailing address of this customer. */
  mailingAddress: MailingAddress;
  /** The billing address of this customer. */
  billingAddress?: BillingAddress;
}

export const attributes11Schema: Schema<Attributes11> = object({
  externalReference: ['external_reference', optional(string())],
  entityType: ['entity_type', entityTypeEnumSchema],
  businessName: ['business_name', optional(string())],
  firstName: ['first_name', string()],
  lastName: ['last_name', string()],
  email: ['email', string()],
  phone: ['phone', string()],
  website: ['website', optional(string())],
  mailingAddress: ['mailing_address', lazy(() => mailingAddressSchema)],
  billingAddress: [
    'billing_address',
    optional(lazy(() => billingAddressSchema)),
  ],
});
