import faker from 'faker'
import { ILocation }  from './Location'

export class Company {
  companyName: string;
  catchPhrase: string;
  location: ILocation;

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    }
  }
}