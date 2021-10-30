export function getFullName (transactionParty) {
  let fullName = ''

  if (transactionParty.firstName) {
    fullName += transactionParty.firstName
  }

  if (transactionParty.lastName) {
    fullName += ` ${transactionParty.lastName}`
  }

  return fullName
}
