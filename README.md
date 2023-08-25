
# Getting Started with Merged Api

## Introduction

Boost API example documentation.

### Authentication

<!-- ReDoc-Inject: <security-definitions> -->, Simple calculator API hosted on APIMATIC


## Install the Package

Run the following command from your project directory to install the package from npm:

```ts
npm install calc-5172509-sdk@1.0.0
```

For additional package details, see the [Npm page for the calc-5172509-sdk@1.0.0  npm](https://www.npmjs.com/package/calc-5172509-sdk/v/1.0.0).

## Initialize the API Client

**_Note:_** Documentation for the client can be found [here.](https://www.github.com/sohaibtariq/calc-5172509-js-sdk/tree/1.0.0/doc/client.md)

The following parameters are configurable for the API Client:

| Parameter | Type | Description |
|  --- | --- | --- |
| `environment` | Environment | The API environment. <br> **Default: `Environment.Production22`** |
| `timeout` | `number` | Timeout for API calls.<br>*Default*: `0` |
| `httpClientOptions` | `Partial<HttpClientOptions>` | Stable configurable http client options. |
| `unstableHttpClientOptions` | `any` | Unstable configurable http client options. |
| `oAuthClientId` | `string` | OAuth 2 Client ID |
| `oAuthClientSecret` | `string` | OAuth 2 Client Secret |
| `oAuthToken` | `OAuthToken` | Object for storing information about the OAuth token |

### HttpClientOptions

| Parameter | Type | Description |
|  --- | --- | --- |
| `timeout` | `number` | Timeout in milliseconds. |
| `httpAgent` | `any` | Custom http agent to be used when performing http requests. |
| `httpsAgent` | `any` | Custom https agent to be used when performing http requests. |
| `retryConfig` | `Partial<RetryConfiguration>` | Configurations to retry requests. |

### RetryConfiguration

| Parameter | Type | Description |
|  --- | --- | --- |
| `maxNumberOfRetries` | `number` | Maximum number of retries. <br> *Default*: `0` |
| `retryOnTimeout` | `boolean` | Whether to retry on request timeout. <br> *Default*: `true` |
| `retryInterval` | `number` | Interval before next retry. Used in calculation of wait time for next request in case of failure. <br> *Default*: `1` |
| `maximumRetryWaitTime` | `number` | Overall wait time for the requests getting retried. <br> *Default*: `0` |
| `backoffFactor` | `number` | Used in calculation of wait time for next request in case of failure. <br> *Default*: `2` |
| `httpStatusCodesToRetry` | `number[]` | Http status codes to retry against. <br> *Default*: `[408, 413, 429, 500, 502, 503, 504, 521, 522, 524]` |
| `httpMethodsToRetry` | `HttpMethod[]` | Http methods to retry against. <br> *Default*: `['GET', 'PUT']` |

The API client can be initialized as follows:

```ts
const client = new Client({
  timeout: 0,
  environment: Environment.Production22,
  oAuthClientId: 'OAuthClientId',
  oAuthClientSecret: 'OAuthClientSecret',
});
```

## Environments

The SDK can be configured to use a different environment for making API calls. Available environments are:

### Fields

| Name | Description |
|  --- | --- |
| production22 | **Default** Production environment, This environment connect to the LIVE calculator API |
| development | development |

## Authorization

This API uses `OAuth 2 Client Credentials Grant`.

## Client Credentials Grant

Your application must obtain user authorization before it can execute an endpoint call in case this SDK chooses to use *OAuth 2.0 Client Credentials Grant*. This authorization includes the following steps

The `fetchToken` method will exchange the OAuth client credentials for an *access token*. The access token is an object containing information for authorizing client requests and refreshing the token itself.

```ts
try {
  const token = await client.clientCredentialsAuthManager.fetchToken();
} catch(error) {
  // handle error
}
```

The client can now make authorized endpoint calls.

### Storing an access token for reuse

It is recommended that you store the access token for reuse.

```ts
Store the token in session storage or local storage.
```

### Creating a client from a stored token

To authorize a client from a stored access token, just set the access token in Configuration along with the other configuration parameters before creating the client:

```ts
const newClient = client.withConfiguration({oAuthToken: token});
```

## List of APIs

* [Simple Calculator](https://www.github.com/sohaibtariq/calc-5172509-js-sdk/tree/1.0.0/doc/controllers/simple-calculator.md)
* [O Auth Authorization](https://www.github.com/sohaibtariq/calc-5172509-js-sdk/tree/1.0.0/doc/controllers/o-auth-authorization.md)
* [Authentication](https://www.github.com/sohaibtariq/calc-5172509-js-sdk/tree/1.0.0/doc/controllers/authentication.md)
* [Quoting](https://www.github.com/sohaibtariq/calc-5172509-js-sdk/tree/1.0.0/doc/controllers/quoting.md)
* [Policy](https://www.github.com/sohaibtariq/calc-5172509-js-sdk/tree/1.0.0/doc/controllers/policy.md)
* [Insured-Risk](https://www.github.com/sohaibtariq/calc-5172509-js-sdk/tree/1.0.0/doc/controllers/insured-risk.md)

## Classes Documentation

* [ApiResponse](https://www.github.com/sohaibtariq/calc-5172509-js-sdk/tree/1.0.0/doc/api-response.md)
* [ApiError](https://www.github.com/sohaibtariq/calc-5172509-js-sdk/tree/1.0.0/doc/api-error.md)

