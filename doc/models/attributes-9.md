
# Attributes 9

Attributes for this object.

## Structure

`Attributes9`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `limit` | `string \| undefined` | Optional | A value from the set denoting the user-selected limit of coverage. This is dependent<br>on the product's configuration.<br>**Constraints**: *Pattern*: `^[0-9]+(\.[0-9]{1,2})?$` |
| `deductible` | `string \| undefined` | Optional | A value from the set denoting the user-selected deductible of coverage. This is dependent<br>on the product's configuration.<br>**Constraints**: *Pattern*: `^[0-9]+(\.[0-9]{1,2})?$` |
| `policyState` | [`PolicyState2Enum`](../../doc/models/policy-state-2-enum.md) | Required | The two letter state code (including Washington DC). |
| `effectiveDate` | `string` | Required | Effective date for when the resulting policy would go into effective should it be generated. |
| `termEndDate` | `string` | Required | The desired end date for the policy that results from this quote. The span from effective_date to this term_end_date must be allowable by the product's terms. |
| `externalReference` | `string \| undefined` | Optional | Any value you wish to associate with this policy such as an ID from your system. |
| `metadata` | `unknown \| undefined` | Optional | Additional data about the policy. The required metadata fields are specific to the product. |
| `bindableOn` | `string \| undefined` | Optional | The date this quote was rated and set to bindable. |
| `termPremium` | `string \| undefined` | Optional | Boost generated term premium for this quote.<br>**Constraints**: *Pattern*: `^[0-9]+(\.[0-9]{1,2})?$` |
| `validUntil` | `string \| undefined` | Optional | The date this quote is valid until after which point a new quote will need to be generated. |
| `convertableOn` | `string \| undefined` | Optional | The date this quote satisfied all its dependencies to become a policy. |
| `convertedOn` | `string \| undefined` | Optional | The date this quote was converted into a policy. |
| `status` | [`Status2Enum \| undefined`](../../doc/models/status-2-enum.md) | Optional | The status of the quote. |
| `installmentPlans` | `Record<string, unknown> \| undefined` | Optional | Payment installment plans that are available for this quote |
| `minPremium` | `string \| undefined` | Optional | Boost generated minimum premium for this product.<br>**Constraints**: *Pattern*: `^[0-9]+(\.[0-9]{1,2})?$` |
| `stateTax` | `string \| undefined` | Optional | Any state taxes that apply to this quote.<br>**Constraints**: *Pattern*: `^[0-9]+(\.[0-9]{1,2})?$` |
| `stateFees` | `string \| undefined` | Optional | Any state fees that apply to this quote.<br>**Constraints**: *Pattern*: `^[0-9]+(\.[0-9]{1,2})?$` |
| `serviceFees` | `string \| undefined` | Optional | Any service fees that apply to this quote.<br>**Constraints**: *Pattern*: `^[0-9]+(\.[0-9]{1,2})?$` |
| `billingFees` | `string \| undefined` | Optional | Any billing fees that apply to this quote.<br>**Constraints**: *Pattern*: `^[0-9]+(\.[0-9]{1,2})?$` |

## Example (as JSON)

```json
{
  "limit": "1000",
  "deductible": "1000",
  "policy_state": "AZ",
  "effective_date": "2016-03-13T12:52:32.123Z",
  "term_end_date": "08/01/2018 00:00:00",
  "external_reference": "000000001",
  "bindable_on": "08/01/2018 00:00:00",
  "term_premium": "123.45",
  "valid_until": "08/01/2018 00:00:00",
  "convertable_on": "08/01/2018 00:00:00",
  "converted_on": "08/01/2018 00:00:00",
  "status": "draft",
  "min_premium": "12.34",
  "state_tax": "12.34",
  "state_fees": "12.34",
  "service_fees": "12.34",
  "billing_fees": "12.34",
  "metadata": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

