/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema } from '../schema';
import { Data3, data3Schema } from './data3';

export interface InsuredRisksResponse {
  data: Data3;
}

export const insuredRisksResponseSchema: Schema<InsuredRisksResponse> = object({
  data: ['data', lazy(() => data3Schema)],
});
