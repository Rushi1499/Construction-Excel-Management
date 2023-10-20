import { Injectable } from '@angular/core';
import * as Papa from 'papaparse';

@Injectable({
  providedIn: 'root'
})
export class CsvService {

  constructor() { }


  async getDataFromCsv(csvFilePath: string): Promise<any[]> {
    return new Promise((resolve, reject) => {
      Papa.parse(csvFilePath, {
        header: true,
        download: true,
        dynamicTyping: true,
        complete: (results) => {
          resolve(results.data);
        },
        error: (error) => {
          reject(error);
        }
      });
    });
  }



}
