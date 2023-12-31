/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface Errors {
  /** Type of error. */
  error?: string;
  /** Detailed information about the error. */
  errorDescription?: string;
}

export const errorsSchema: Schema<Errors> = object({
  error: ['error', optional(string())],
  errorDescription: ['error_description', optional(string())],
});
