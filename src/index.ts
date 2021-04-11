import { User } from './User';
import { Company } from './Company';
import { Map, MarkerIconType } from './Map'

const user = new User();

console.log(user);

const company = new Company();

console.log(company);

const map = new Map(document.getElementById('map'));
map.addMarker(user.name, user.location, MarkerIconType.STAR_PURPLE);
map.addMarker(company.companyName, company.location);