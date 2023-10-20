import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CsvService } from 'src/app/csv.service';
import * as XLSX from "xlsx";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-docket-form',
  templateUrl: './docket-form.component.html',
  styleUrls: ['./docket-form.component.css']
})
export class DocketFormComponent implements OnInit {
  [x: string]: any;
  sTime: any;
  eTime: any;
  worked: any;
  rate: any;
  pOrder: any;
  sName: any;
  csvData: any[] = [];
  poOrderNo: any[] = [];
  filteredDropdownData: { supplierName: any, wbsCode: any }[] = [];
  supplierFlag: boolean = false;
  filterDataPoNumber: { poNumber: any, itemNo: any }[] = [];


  constructor(private router: Router, private csvService: CsvService, private httpClient: HttpClient) { }

  async ngOnInit(): Promise<void> {
    // localStorage.setItem('isLogin', "F");
    this.read();

    const csvFilePath = '../../assets/export29913.xlsx'; // Adjust the file path as per your project structure
  }
  fName: any;
  lName: any;
  desc: any;
  address: any;
  emailId: any;
  password: any;

  // onFileChange(evt: any) {
  //   const target: DataTransfer = <DataTransfer>(evt.target);

  //   if (target.files.length > 1) {
  //     alert('Multiple files are not allowed');
  //     return;
  //   }
  //   else {
  //     const reader: FileReader = new FileReader();

  //     reader.onload = (e: any) => {
  //       const bstr: string = e.target.result;
  //       const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

  //       const wsname = wb.SheetNames[0];
  //       const ws: XLSX.WorkSheet = wb.Sheets[wsname];

  //       let data = (XLSX.utils.sheet_to_json(ws, { header: 1 }));

  //       // Print the Excel Data
  //       console.log("Actual Data"+data);

  //     }

  //     reader.readAsBinaryString(target.files[0]);
  //   }

  // }

  read() {
    this.httpClient.get('../../assets/export29913.xlsx', { responseType: 'blob' })
      .subscribe((data: any) => {
        const reader: FileReader = new FileReader();

        let dataJson1;
        let dataJson2;

        reader.onload = (e: any) => {
          const bstr: string = e.target.result;
          const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

      /* grab first sheet */      const wsname1: string = wb.SheetNames[0];
          const ws1: XLSX.WorkSheet = wb.Sheets[wsname1];

      /* grab second sheet */      const wsname2: string = wb.SheetNames[1];
          const ws2: XLSX.WorkSheet = wb.Sheets[wsname2];

      /* save data */      dataJson1 = XLSX.utils.sheet_to_json(ws1);
          dataJson2 = XLSX.utils.sheet_to_json(ws2);
          console.log("Actual JSON===>", dataJson1[0]);
          this.csvData = dataJson1;
          console.log("Actual JSON DATA===>", this.csvData[0].Supplier);
          this.poOrderNo = dataJson1;
          console.log("Actual JSON DATA 1===>", this.poOrderNo[0]);

          this.csvData = dataJson1;

          for (let i = 0; i < this.csvData.length; i++) {
            const item = this.csvData[i].Supplier;
            const wbsCode = this.csvData[i].WBSCode;
            if (item !== "") {

              const object = {
                supplierName: item,
                wbsCode: wbsCode
              };
      


              this.filteredDropdownData.push(object);
            }
          }
          console.log("this.filteredDropdownData==", this.filteredDropdownData);




        };
        reader.readAsBinaryString(data);
        console.log("Actual===>", data);
      });
  }


  Submit() {
    console.log(this.sName)


    localStorage.setItem('Name', (this.fName));
    localStorage.setItem('startTime', (this.sTime));
    localStorage.setItem('endTime', (this.eTime));
    localStorage.setItem('noOfHours', (this.worked));
    localStorage.setItem('rate', (this.rate));
    // localStorage.setItem('supplierName', (this.sName));
    // localStorage.setItem('purchaseOrder', (this.pOrder));
    localStorage.setItem('Description', (this.desc));

    this.router.navigateByUrl('/docket-list');

  }
  onDropdownSelect() {

    const values = this.sName.split(',');


    const supName = values[0];
    const wbCode = values[1];

    localStorage.setItem('supplierName', (supName));


    console.log("Supplier Name ==> ", wbCode);
    this.supplierFlag = true;

    for (let i = 0; i < this.csvData.length; i++) {
      const item = this.csvData[i].WBSCode;

      if (wbCode == item) {
        const poNumber = this.csvData[i].PONumber;
        const itemNo = this.csvData[i].Item;

        const object = {
          poNumber: poNumber,
          itemNo: itemNo
        };


        this.filterDataPoNumber.push(object);
      } else {
        continue;
      }

      console.log("Data:." + this.filterDataPoNumber);
    }



  }
  findDescription() {

    console.log("Find description" + this.pOrder)


    const values = this.pOrder.split('-');


    const variable1 = values[0];
    const variable2 = values[1];

    localStorage.setItem('purchaseOrder', (variable2));


    for (let i = 0; i < this.csvData.length; i++) {
      const item = this.csvData[i].PONumber;
      const item1 = this.csvData[i].Item;
      if (variable2 == item && variable1 == item1) {
        this.desc = this.csvData[i].Description;
        // this.filterDataPoNumber.push(poNumber);
      }
    }

  }


}
