
# Relationships 11

Related items.

## Structure

`Relationships11`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `coverages` | [`Coverages3 \| undefined`](../../doc/models/coverages-3.md) | Optional | List of coverages that were created. |
| `customer` | [`Customer3`](../../doc/models/customer-3.md) | Required | Customer that was created. |
| `insuredRisk` | [`InsuredRisk3`](../../doc/models/insured-risk-3.md) | Required | Insured risk attached to the quote. |
| `product` | [`Product6`](../../doc/models/product-6.md) | Required | Boost supplied value representing the specific product type. The product's configuration<br>will determine allowable values for the Policy, such as limit and deductible. |
| `agent` | [`Agent6 \| undefined`](../../doc/models/agent-6.md) | Optional | The Boost UUID of the agent. |

## Example (as JSON)

```json
{
  "customer": {
    "data": {
      "type": "customer",
      "id": "d64d47eb-c7a6-4128-985b-0ecc79284608"
    }
  },
  "insured_risk": {
    "data": {
      "type": "customer",
      "id": "d64d47eb-c7a6-4128-985b-0ecc79284608"
    }
  },
  "product": {
    "data": {
      "type": "product",
      "id": "d64d47eb-c7a6-4128-985b-0ecc79284608"
    }
  },
  "coverages": {
    "data": [
      {
        "type": "type3",
        "id": "00002547-0000-0000-0000-000000000000"
      },
      {
        "type": "type4",
        "id": "00002548-0000-0000-0000-000000000000"
      }
    ]
  },
  "agent": {
    "data": {
      "type": "type4",
      "id": "00001c60-0000-0000-0000-000000000000"
    }
  }
}
```

