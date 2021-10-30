export default class TransactionDetailGateway {
  constructor ({ restConnector }) {
    this.restConnector = restConnector
  }

  async updateDetail (
    id,
    {
      yearBuilt,
      bedrooms,
      squareFootage,
      schoolDistrict,
      type,
      bathrooms,
      lotSize,
      country,
      streetNumber,
      streetName,
      unitNumber,
      city,
      state,
      postalCode,
      county,
      mlsNumber,
      taxId
    }
  ) {
    const resp = await this.restConnector.patch(`/transactionDetails/${id}`, {
      yearBuilt,
      bedrooms,
      squareFootage,
      schoolDistrict,
      type,
      bathrooms,
      lotSize,
      country,
      streetNumber,
      streetName,
      unitNumber,
      city,
      state,
      postalCode,
      county,
      mlsNumber,
      taxId
    })
    return resp.data
  }

  async createNewTransactionDetail ({
    yearBuilt,
    bedrooms,
    squareFootage,
    schoolDistrict,
    type,
    bathrooms,
    lotSize,
    country,
    streetNumber,
    streetName,
    unitNumber,
    city,
    state,
    postalCode,
    county,
    mlsNumber,
    taxId
  }) {
    const resp = await this.restConnector.post(`/transactionDetails`, {
      yearBuilt,
      bedrooms,
      squareFootage,
      schoolDistrict,
      type,
      bathrooms,
      lotSize,
      country,
      streetNumber,
      streetName,
      unitNumber,
      city,
      state,
      postalCode,
      county,
      mlsNumber,
      taxId
    })
    return resp.data
  }

  async getById (transactionId) {
    const resp = await this.restConnector.get(
      `/transactionDetails?filter={"where":{"transactionId":"${transactionId}"},"order":"createdAt DESC"}`
    )
    return resp.data
  }
}
