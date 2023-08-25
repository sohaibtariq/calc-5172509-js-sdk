
# Attributes 6

Attributes that describe a policy resource with optional writeable money fields.

## Structure

`Attributes6`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `createdDate` | `string \| undefined` | Optional | Date time when this resource was created in our system. |
| `modifiedDate` | `string \| undefined` | Optional | Date time when this resource was last modified in our system. |
| `documentId` | `string \| undefined` | Optional | UUID that identifies the document for this policy. |
| `actualEndDate` | `string \| undefined` | Optional | The end date for this policy if it has been ended. |
| `status` | [`StatusEnum \| undefined`](../../doc/models/status-enum.md) | Optional | The status of the policy. |
| `earnedPremium` | `string \| undefined` | Optional | Our calculated earned premium thus far for this policy.<br>**Constraints**: *Pattern*: `^[0-9]+(\.[0-9]{5})?$` |
| `earnedTax` | `string \| undefined` | Optional | Our calculated earned tax thus far for this policy.<br>**Constraints**: *Pattern*: `^[0-9]+(\.[0-9]{5})?$` |
| `earnedFees` | `string \| undefined` | Optional | Our calculated earned fees thus far for this policy.<br>**Constraints**: *Pattern*: `^[0-9]+(\.[0-9]{5})?$` |
| `cancelReason` | `string \| undefined` | Optional | A value from the set denoting the reason for policy cancellation. |
| `cancelDescription` | `string \| undefined` | Optional | User provided description for why policy was cancelled. |
| `policyNumber` | `string \| undefined` | Optional | A unique alphanumeric string used as a human-readable value for the Policy.<br>**Constraints**: *Pattern*: `^BLU-[0-9a-zA-Z]{2}-[0-9a-zA-Z]{9}$` |
| `effectiveDate` | `string \| undefined` | Optional | The date and time this policy went into effect. |
| `externalReference` | `string \| undefined` | Optional | Any value you wish to associate with this policy such as an ID from your system. |
| `limit` | `string \| undefined` | Optional | A value from the set denoting the user-selected limit of coverage. This is dependent on your product's configuration.<br>**Constraints**: *Pattern*: `^[0-9]+(\.[0-9]{1,2})?$` |
| `deductible` | `string \| undefined` | Optional | A value from the set denoting the user-selected deductible of coverage. This is dependent on your product's configuration.<br>**Constraints**: *Pattern*: `^[0-9]+(\.[0-9]{1,2})?$` |
| `policyState` | [`PolicyStateEnum \| undefined`](../../doc/models/policy-state-enum.md) | Optional | The two letter state code (including Washington DC) for the state in which the issured entity resides. |
| `metadata` | `unknown \| undefined` | Optional | Additional data about the policy. The required metadata fields are specific to your product. |
| `termEndDate` | `string \| undefined` | Optional | The policy's natural term end date and time. |
| `installmentPlan` | `string \| undefined` | Optional | The installment plan schedule that determines invoicing and/or automatic payment dates. |
| `writtenPremium` | `string \| undefined` | Optional | The written premium for this policy.<br>**Constraints**: *Pattern*: `^[0-9]+(\.[0-9]{1,2})?$` |
| `issueDate` | `string \| undefined` | Optional | The date and time that the policy was issued. |
| `nonRenewalNoticeDate` | `string \| undefined` | Optional | The most recently set date and time that a non-renewal notice was set to be sent. |
| `cancellationNoticeDate` | `string \| undefined` | Optional | The most recently set date and time that a cancellation notice was set to be sent. |
| `requestedCancellationDate` | `string \| undefined` | Optional | The most recently set date and time that an allowed party requested a policy to be cancelled. |
| `stateTax` | `string \| undefined` | Optional | The term state tax<br>**Constraints**: *Pattern*: `^[0-9]+(\.[0-9]{1,2})?$` |
| `stateFees` | `string \| undefined` | Optional | The aggregate term state fees.<br>**Constraints**: *Pattern*: `^[0-9]+(\.[0-9]{1,2})?$` |
| `serviceFees` | `string \| undefined` | Optional | The term aggregate service fees<br>**Constraints**: *Pattern*: `^[0-9]+(\.[0-9]{1,2})?$` |
| `termPremium` | `string \| undefined` | Optional | This term premium . This value includes taxes only for admitted products<br>**Constraints**: *Pattern*: `^[0-9]+(\.[0-9]{1,2})?$` |
| `billingFees` | `string \| undefined` | Optional | The term aggregate billing fees<br>**Constraints**: *Pattern*: `^[0-9]+(\.[0-9]{1,2})?$` |

## Example (as JSON)

```json
{
  "created_date": "08/01/2018 10:41:32",
  "modified_date": "08/01/2018 10:41:32",
  "document_id": "530c8393-ebb6-4625-a4be-fe9bc5a75d4a",
  "actual_end_date": "06/01/2019 00:00:00",
  "status": "issued",
  "earned_premium": "100.00000",
  "earned_tax": "0.01644",
  "earned_fees": "0.10142",
  "cancel_reason": "fraud",
  "cancel_description": "Client committed fraud when applying for this policy.",
  "policy_number": "BLU-XX-2FM83109D",
  "effective_date": "08/01/2018 00:00:00",
  "external_reference": "000000001",
  "limit": "1000000",
  "deductible": "1000",
  "policy_state": "AZ",
  "term_end_date": "08/01/2019 00:00:00",
  "installment_plan": "ANNUAL",
  "written_premium": "1234.56",
  "issue_date": "08/01/2018 00:00:00",
  "non_renewal_notice_date": "08/01/2018 00:00:00",
  "cancellation_notice_date": "08/01/2018 00:00:00",
  "requested_cancellation_date": "08/01/2018 00:00:00",
  "state_tax": "12.34",
  "state_fees": "12.34",
  "service_fees": "12.34",
  "term_premium": "1234.56",
  "billing_fees": "12.34"
}
```

