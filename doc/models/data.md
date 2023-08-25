
# Data

All values that describe this Insured Risk resource.

## Structure

`Data`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string` | Required | The type of resource being represented.<br>**Default**: `'insured_risk'` |
| `id` | `string \| undefined` | Optional | - |
| `attributes` | [`Attributes`](../../doc/models/attributes.md) | Required | Attributes that describe an Insured Risk. |
| `relationships` | [`Relationships`](../../doc/models/relationships.md) | Required | Related objects. |

## Example (as JSON)

```json
{
  "type": "insured_risk",
  "attributes": {
    "created_date": "08/01/2018 10:41:32",
    "modified_date": "08/01/2018 10:41:32",
    "factors": {
      "key1": "val1",
      "key2": "val2"
    }
  },
  "relationships": {
    "product": {
      "data": {
        "type": "product",
        "id": "7fca5107-79c0-4b1d-88e7-0a3155a42aba"
      }
    },
    "agent": {
      "data": {
        "type": "type4",
        "id": "0000093c-0000-0000-0000-000000000000"
      }
    }
  },
  "id": "00001770-0000-0000-0000-000000000000"
}
```

