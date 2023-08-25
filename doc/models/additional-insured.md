
# Additional Insured

List of additional insured for this policy.

## Structure

`AdditionalInsured`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`Data7[]`](../../doc/models/data-7.md) | Required | List of additional insured. |
| `meta` | [`Meta \| undefined`](../../doc/models/meta.md) | Optional | Additional meta information about this data. |

## Example (as JSON)

```json
{
  "data": [
    {
      "type": "customer",
      "id": "55efaaf6-2bb2-4cdd-b5ec-5475af712c52"
    }
  ],
  "meta": {
    "count": 14
  }
}
```

