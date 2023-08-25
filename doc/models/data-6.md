
# Data 6

Data for creating a policy from a quote requiring a stripe token.

## Structure

`Data6`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string` | Required | The type of resource being represented.<br>**Default**: `'policy'` |
| `attributes` | [`Attributes2`](../../doc/models/attributes-2.md) | Required | Attributes for this policy. |
| `relationships` | [`Relationships2`](../../doc/models/relationships-2.md) | Required | Related items. |

## Example (as JSON)

```json
{
  "type": "policy",
  "attributes": {
    "quote_number": "BLU-XX-T63XWYHFE",
    "installment_plan": "ANNUAL",
    "stripe_token": "tok_mastercard",
    "external_id": "1234567890"
  },
  "relationships": {
    "additional_interests": {
      "data": [
        {
          "type": "type3",
          "id": "00000e77-0000-0000-0000-000000000000"
        }
      ],
      "meta": {
        "count": 218
      }
    },
    "parent": {
      "data": {
        "type": "type0",
        "id": "000020c6-0000-0000-0000-000000000000"
      }
    }
  }
}
```

