
# Installment Plan 2

## Structure

`InstallmentPlan2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `billingPeriod` | `string` | Required | The billing period for this installment plan entry. |
| `amountDue` | `string` | Required | Boost generated amount due for this installment plan entry.<br>**Constraints**: *Pattern*: `^[0-9]+(\.[0-9]{1,2})?$` |
| `dueDate` | `string` | Required | The date on which payment is due for this billing period. |
| `taxes` | `string` | Required | Boost generated taxes due for this installment plan entry.<br>**Constraints**: *Pattern*: `^[0-9]+(\.[0-9]{1,2})?$` |
| `fees` | `string` | Required | Boost generated fees due for this installment plan entry.<br>**Constraints**: *Pattern*: `^[0-9]+(\.[0-9]{1,2})?$` |

## Example (as JSON)

```json
{
  "billing_period": "08/01/2018 00:00:00",
  "amount_due": "123.45",
  "due_date": "08/01/2018 00:00:00",
  "taxes": "12.34",
  "fees": "12.34"
}
```

