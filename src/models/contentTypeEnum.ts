/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for ContentTypeEnum
 */
export enum ContentTypeEnum {
  EnumApplicationxwwwformurlencoded = 'application/x-www-form-urlencoded',
}

/**
 * Schema for ContentTypeEnum
 */
export const contentTypeEnumSchema: Schema<ContentTypeEnum> = stringEnum(ContentTypeEnum);
