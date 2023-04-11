import { Component } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-dates',
  templateUrl: './dates.component.html',
  styleUrls: ['./dates.component.css']
})
export class DatesComponent {
  /**
   *  Conditions:
   * 1. On load, the start date should be 6months before the current date and the end date should be the previous sunday.
   * 2. start date cannot be less than 05/25/2020(MM/DD/YYYY).
   * 3. start date cannot be greater than end date.
   * 4. end date cannot be greater than sunday of previous week sunday ex: if today is 23rd feb 2023 then the end date should be 19th feb 2023.
   */

  startDate: any = null;
  endDate: any = null;
  leastDate: any = null;
  maxDate: any = null;
  errMsg: string = "";

  constructor() {
    this.startDate = moment().subtract(6, 'months').toDate();
    this.endDate = moment().subtract(1, 'weeks').endOf('isoWeek').toDate();
    this.leastDate = moment('2020-05-25').toDate();
    this.maxDate = moment().subtract(1, 'weeks').endOf('isoWeek').toDate();
  }

  ngOnInit(): void { }

  startDateChange(event: any) {
    /*
    Conditions:
    1. start date cannot be less than 05/25/2020(MM/DD/YYYY).
    2. start date cannot be greater than end date.
    */
    if (moment(event.value).isBefore('2020-05-25')) {
      this.startDate = event.value;
      this.errMsg = "Start date cannot be less than 05/25/2020(MM/DD/YYYY).";
    } else if (moment(event.value).isAfter(this.endDate)) {
      this.startDate = event.value;
      this.errMsg = "Start date cannot be greater than end date.";
    } else {
      this.startDate = moment(event.value).toDate();
      this.errMsg = "";
    }
  }

  endDateChange(event: any) {
    /*
    Conditions:
    1. end date cannot be greater than sunday of previous week sunday ex: if today is 23rd feb 2023 then the end date should be 19th feb 2023.
    2. start date cannot be greater than end date.
    */
    if (moment(event.value).isAfter(moment().subtract(1, 'weeks').endOf('isoWeek').toDate())) {
      this.endDate = event.value;
      this.errMsg = "End date cannot be greater than sunday of previous week sunday ex: if today is 23rd feb 2023 then the end date should be 19th feb 2023.";
    } else if (moment(event.value).isBefore(this.startDate)) {
      this.endDate = event.value;
      this.errMsg = "Start date cannot be greater than end date.";
    }else {
      this.endDate = moment(event.value).toDate();
      this.errMsg = "";
    }
  }

}
