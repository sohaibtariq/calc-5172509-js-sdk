
# Policies Request

## Structure

`PoliciesRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`Data6`](../../doc/models/data-6.md) | Required | Data for creating a policy from a quote requiring a stripe token. |

## Example (as JSON)

```json
{
  "data": {
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
            "id": "00001269-0000-0000-0000-000000000000"
          },
          {
            "type": "type4",
            "id": "0000126a-0000-0000-0000-000000000000"
          },
          {
            "type": "type5",
            "id": "0000126b-0000-0000-0000-000000000000"
          }
        ],
        "meta": {
          "count": 24
        }
      },
      "parent": {
        "data": {
          "type": "type0",
          "id": "000024b8-0000-0000-0000-000000000000"
        }
      }
    }
  }
}
```

