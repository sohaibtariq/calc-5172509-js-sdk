/**
 * Merged ApiLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import {
  OperationTypeEnum,
  operationTypeEnumSchema,
} from '../models/operationTypeEnum';
import { number } from '../schema';
import { BaseController } from './baseController';

export class SimpleCalculatorController extends BaseController {
  /**
   * Calculates the expression using the specified operation.
   *
   * @param operation The operator to apply on the variables
   * @param x         The LHS value
   * @param y         The RHS value
   * @return Response from the API call
   */
  async calculate(
    operation: OperationTypeEnum,
    x: number,
    y: number,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<number>> {
    const req = this.createRequest('GET');
    req.baseUrl('Calculator');
    const mapped = req.prepareArgs({
      operation: [operation, operationTypeEnumSchema],
      x: [x, number()],
      y: [y, number()],
    });
    req.query('x', mapped.x);
    req.query('y', mapped.y);
    req.appendTemplatePath`/${mapped.operation}`;
    req.authenticate(false);
    return req.callAsJson(number(), requestOptions);
  }
}