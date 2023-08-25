# Insured-Risk

Insured Risk Management

```ts
const insuredRiskController = new InsuredRiskController(client);
```

## Class Name

`InsuredRiskController`


# Post Insured Risk

Creates a new insured risk to then utilize when creating a policy.

```ts
async postInsuredRisk(
  boostUser: string,
  body: InsuredRisksRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<InsuredRisksResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `boostUser` | `string` | Header, Required | UUID that identifies the user. |
| `body` | [`InsuredRisksRequest`](../../doc/models/insured-risks-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`InsuredRisksResponse`](../../doc/models/insured-risks-response.md)

## Example Usage

```ts
const boostUser = 'c336620b-4444-4a42-a2f1-643084046a01';

const body: InsuredRisksRequest = {
  data: {
    type: 'insured_risk',
    attributes: {
      factors: { 'foo': 'bar', 'baz': true },
    },
    relationships: {
      product: {
        data: {
          type: 'product',
          id: '7c09a876-b53f-4939-b98d-a3630c936593',
        },
      },
    },
  },
};

try {
  const { result, ...httpResponse } = await insuredRiskController.postInsuredRisk(
    boostUser,
    body
  );
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Request is invalid. | [`InsuredRisks400Error1Error`](../../doc/models/insured-risks-400-error-1-error.md) |
| 401 | Unauthorized. The bearer authentication failed. | [`InsuredRisks401Error1Error`](../../doc/models/insured-risks-401-error-1-error.md) |
| 403 | Forbidden. The operation is not allowed. | [`InsuredRisks403Error1Error`](../../doc/models/insured-risks-403-error-1-error.md) |
| 415 | Unsupported Media Type. Only JSONAPI is supported. | [`InsuredRisks415Error1Error`](../../doc/models/insured-risks-415-error-1-error.md) |
| 500 | Internal Server Error. | [`InsuredRisks500Error1Error`](../../doc/models/insured-risks-500-error-1-error.md) |

