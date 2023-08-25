# Authentication

```ts
const authenticationController = new AuthenticationController(client);
```

## Class Name

`AuthenticationController`


# Get O Auth Token

Generates an access token which must be used on all subsequent API calls.

:information_source: **Note** This endpoint does not require authentication.

```ts
async getOAuthToken(
  clientId: string,
  clientSecret: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AuthOauth2TokenResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `clientId` | `string` | Form, Required | Your Client ID |
| `clientSecret` | `string` | Form, Required | Your Client Secret |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`AuthOauth2TokenResponse`](../../doc/models/auth-oauth-2-token-response.md)

## Example Usage

```ts
const clientId = 'client_id8';

const clientSecret = 'client_secret8';

try {
  const { result, ...httpResponse } = await authenticationController.getOAuthToken(
    clientId,
    clientSecret
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
| 400 | Request is invalid | [`AuthOauth2Token400Error1Error`](../../doc/models/auth-oauth-2-token-400-error-1-error.md) |
| 500 | Internal Server Error | `ApiError` |

