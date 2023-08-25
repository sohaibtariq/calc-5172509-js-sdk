
# Relationships

Related objects.

## Structure

`Relationships`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `agent` | [`Agent \| undefined`](../../doc/models/agent.md) | Optional | UUID of the agent. |
| `product` | [`Product`](../../doc/models/product.md) | Required | Boost supplied value representing the specific product type. The product's configuration<br>Determines allowable values, such as limits and deductibles. |

## Example (as JSON)

```json
{
  "product": {
    "data": {
      "type": "product",
      "id": "7fca5107-79c0-4b1d-88e7-0a3155a42aba"
    }
  },
  "agent": {
    "data": {
      "type": "type4",
      "id": "00001c60-0000-0000-0000-000000000000"
    }
  }
}
```

