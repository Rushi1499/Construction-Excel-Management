import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-docket-list',
  templateUrl: './docket-list.component.html',
  styleUrls: ['./docket-list.component.css']
})
export class DocketListComponent implements OnInit {
  sTime: any;
  eTime: any;
  worked: any;
  rate: any;
  pOrder: any;
  sName: any;
  fName: any;
  desc: any;
  ngOnInit(): void {

    this.fName = localStorage.getItem('Name');
    this.sTime = localStorage.getItem('startTime');
    this.eTime = localStorage.getItem('endTime');
    this.worked = localStorage.getItem('noOfHours');
    this.rate = localStorage.getItem('rate');
    this.sName = localStorage.getItem('supplierName');
    this.pOrder = localStorage.getItem('purchaseOrder');
    this.desc = localStorage.getItem('Description');

  }

}
