import { Component } from '@angular/core';
import {faker} from '@faker-js/faker'

@Component({
  selector: 'app-secound',
  templateUrl: './secound.component.html',
  styleUrls: ['./secound.component.css']
})
export class SecoundComponent {
  counter = 0;

  constructor() {
    setInterval(() => {
      this.counter++;
    }, 1000);

    const data = this.getFakeData();
    console.log(data);
  }

  getFakeData() {
    const res: any = [];
    for (let i = 0; i < 10; i++) {
      res.push(        {
          "name": faker.name.fullName(),
          "email": faker.internet.email(),
          "postCode": faker.address.zipCode(),
          "city": faker.address.cityName(),
          "country": faker.address.country(),
          "phoneNumber": faker.phone.phoneNumber(),
          "favouriteQuote": faker.lorem.sentence()
        });
      }
      return res;
  }
}
