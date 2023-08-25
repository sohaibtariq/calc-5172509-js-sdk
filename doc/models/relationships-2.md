
# Relationships 2

Related items.

## Structure

`Relationships2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `additionalInterests` | [`AdditionalInterests \| undefined`](../../doc/models/additional-interests.md) | Optional | List of additional interests for this policy. |
| `parent` | [`Parent \| undefined`](../../doc/models/parent.md) | Optional | ID of parent policy. Product must also be a parent product. |

## Example (as JSON)

```json
{
  "additional_interests": {
    "data": [
      {
        "type": "type3",
        "id": "0000219b-0000-0000-0000-000000000000"
      },
      {
        "type": "type4",
        "id": "0000219c-0000-0000-0000-000000000000"
      },
      {
        "type": "type5",
        "id": "0000219d-0000-0000-0000-000000000000"
      }
    ],
    "meta": {
      "count": 6
    }
  },
  "parent": {
    "data": {
      "type": "type0",
      "id": "0000046a-0000-0000-0000-000000000000"
    }
  }
}
```

