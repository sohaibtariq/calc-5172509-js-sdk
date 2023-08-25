/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '../core';
import { OAuthProviderErrorEnum } from '../models/oAuthProviderErrorEnum';

/**
 * Creates an instance of OAuthProvider
 */
interface OAuthProvider {
  /** Gets or sets error code. */
  error: OAuthProviderErrorEnum;
  /**
   * Gets or sets human-readable text providing additional information on error.
   * Used to assist the client developer in understanding the error that occurred.
   */
  error_description?: string;
  /** Gets or sets a URI identifying a human-readable web page with information about the error, used to provide the client developer with additional information about the error. */
  error_uri?: string;
}

export class OAuthProviderError extends ApiError<OAuthProvider> {}
