
# Auth Oauth 2 Token Response

## Structure

`AuthOauth2TokenResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `tokenType` | [`TokenTypeEnum \| undefined`](../../doc/models/token-type-enum.md) | Optional | Type of token. |
| `accessToken` | `string \| undefined` | Optional | The token to be used in future API calls. |
| `expiresIn` | [`ExpiresInEnum \| undefined`](../../doc/models/expires-in-enum.md) | Optional | How long this token is valid for. |

## Example (as JSON)

```json
{
  "token_type": "bearer",
  "access_token": "JDKSjkdnasknxkasjd",
  "expires_in": 7200
}
```

