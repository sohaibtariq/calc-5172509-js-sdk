
# Billing Address

The billing address of this customer.

## Structure

`BillingAddress`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `address1` | `string` | Required | The first line of the address. |
| `address2` | `string \| undefined` | Optional | The second line of the address. |
| `city` | `string` | Required | The city of the address. |
| `state` | [`StateEnum`](../../doc/models/state-enum.md) | Required | Two letter state code of the address. |
| `zip` | `string` | Required | 5 or 10 character postal code of the address.<br>**Constraints**: *Pattern*: `^[0-9]{5}(-[0-9]{4})?$` |

## Example (as JSON)

```json
{
  "address1": "123 Main St",
  "address2": "Suite 123",
  "city": "New York",
  "state": "NY",
  "zip": "10016"
}
```

