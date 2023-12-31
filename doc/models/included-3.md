
# Included 3

## Structure

`Included3`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string` | Required | The type of resource being represented.<br>**Default**: `'coverage'` |
| `lid` | `string` | Required | The local ID that ties this resource to a related object in `data.relationships`. |
| `attributes` | [`Attributes10`](../../doc/models/attributes-10.md) | Required | Attributes for this object. |
| `relationships` | [`Relationships10`](../../doc/models/relationships-10.md) | Required | Related items. |

## Example (as JSON)

```json
{
  "type": "coverage",
  "lid": "2",
  "attributes": {
    "deductible": "1000",
    "limit": "1000",
    "premium": "100.00",
    "metadata": {
      "key1": "val1",
      "key2": "val2"
    }
  },
  "relationships": {
    "product_coverage": {
      "data": {
        "type": "product_coverage",
        "id": "d64d47eb-c7a6-4128-985b-0ecc79284608"
      }
    }
  }
}
```

