# Quoting

Quote Management

```ts
const quotingController = new QuotingController(client);
```

## Class Name

`QuotingController`


# Post Quote

Issues a new quote.

```ts
async postQuote(
  boostUser: string,
  body: QuotesRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<QuotesResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `boostUser` | `string` | Header, Required | Boost provided agent UUID that identifies the user. |
| `body` | [`QuotesRequest`](../../doc/models/quotes-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`QuotesResponse`](../../doc/models/quotes-response.md)

## Example Usage

```ts
const boostUser = '0aa54c55-7890-abcd-1234-789012345678';

const body: QuotesRequest = {
  data: {
    type: 'quote',
    attributes: {
      policyState: PolicyState2Enum.AZ,
      effectiveDate: '2016-03-13T12:52:32.123Z',
      termEndDate: '08/01/2018 00:00:00',
      limit: '1000',
      deductible: '1000',
      externalReference: '000000001',
      bindableOn: '08/01/2018 00:00:00',
      termPremium: '123.45',
      validUntil: '08/01/2018 00:00:00',
      convertableOn: '08/01/2018 00:00:00',
      convertedOn: '08/01/2018 00:00:00',
      status: Status2Enum.Draft,
      minPremium: '12.34',
      stateTax: '12.34',
      stateFees: '12.34',
      serviceFees: '12.34',
      billingFees: '12.34',
    },
    relationships: {
      customer: {
        data: {
          type: 'customer',
          lid: '2',
        },
      },
      product: {
        data: {
          type: 'product',
          id: 'd64d47eb-c7a6-4128-985b-0ecc79284608',
        },
      },
    },
  },
  included: [
    { 'key1': 'val1', 'key2': 'val2' },
    { 'key1': 'val1', 'key2': 'val2' }
  ],
};

try {
  const { result, ...httpResponse } = await quotingController.postQuote(
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
| 400 | Request is invalid. | [`Quotes400Error1Error`](../../doc/models/quotes-400-error-1-error.md) |
| 401 | Unauthorized. The bearer authentication failed. | [`Quotes401Error1Error`](../../doc/models/quotes-401-error-1-error.md) |
| 500 | Internal Server Error. | [`Quotes500Error1Error`](../../doc/models/quotes-500-error-1-error.md) |

