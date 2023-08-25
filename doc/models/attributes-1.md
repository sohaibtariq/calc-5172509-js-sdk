
# Attributes 1

Attributes that describe an Insured Risk.

## Structure

`Attributes1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `createdDate` | `string` | Required | Date time when this resource was created in our system. |
| `modifiedDate` | `string` | Required | Date time when this resource was last modified in our system. |
| `factors` | `unknown` | Required | Specific ratable factors that apply to this Insured Risk. The content must fully adhere to a product-specific, pre-defined schema. |

## Example (as JSON)

```json
{
  "created_date": "08/01/2018 10:41:32",
  "modified_date": "08/01/2018 10:41:32",
  "factors": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

