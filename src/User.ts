import faker from "faker";
import { ILocation } from "./Location";

export class User {
  name: string;
  location: ILocation;

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
}
