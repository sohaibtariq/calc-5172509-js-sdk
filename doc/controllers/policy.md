# Policy

Policy Management

```ts
const policyController = new PolicyController(client);
```

## Class Name

`PolicyController`

## Methods

* [List Policies](../../doc/controllers/policy.md#list-policies)
* [Post Policy](../../doc/controllers/policy.md#post-policy)


# List Policies

List previously created policies

```ts
async listPolicies(
  boostUser: string,
  accept?: ContentType1Enum,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PoliciesResponse1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `boostUser` | `string` | Header, Required | UUID that identifies the user. |
| `accept` | [`ContentType1Enum \| undefined`](../../doc/models/content-type-1-enum.md) | Header, Optional | Header to indicate that desired response type is JSON:API. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PoliciesResponse1`](../../doc/models/policies-response-1.md)

## Example Usage

```ts
const boostUser = '53f85c54-f471-444d-80a7-9feb1951ff46';

try {
  const { result, ...httpResponse } = await policyController.listPolicies(boostUser);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Post Policy

Issues a new policy with the given the input data. Policy goes in force on the specified effective_date.

```ts
async postPolicy(
  boostUser: string,
  body: PoliciesRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PoliciesResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `boostUser` | `string` | Header, Required | UUID that identifies the user. |
| `body` | [`PoliciesRequest`](../../doc/models/policies-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PoliciesResponse`](../../doc/models/policies-response.md)

## Example Usage

```ts
const boostUser = '53f85c54-f471-444d-80a7-9feb1951ff46';

const body: PoliciesRequest = {
  data: {
    type: 'policy',
    attributes: {
      quoteNumber: 'BLU-XX-T63XWYHFE',
      installmentPlan: 'ANNUAL',
      stripeToken: 'tok_mastercard',
      externalId: '1234567890',
    },
    relationships: {},
  },
};

try {
  const { result, ...httpResponse } = await policyController.postPolicy(
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
| 400 | Request is invalid. | [`Policies400Error1Error`](../../doc/models/policies-400-error-1-error.md) |
| 401 | Unauthorized. The bearer authentication failed. | [`Policies401Error1Error`](../../doc/models/policies-401-error-1-error.md) |
| 403 | Forbidden. The operation is not allowed. | [`Policies403Error1Error`](../../doc/models/policies-403-error-1-error.md) |
| 500 | Internal Server Error. | [`Policies500Error1Error`](../../doc/models/policies-500-error-1-error.md) |

