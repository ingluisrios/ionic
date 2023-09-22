import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GastosService {

  url = 'http://localhost/presupuesto/gastos/';

  constructor(public http: HttpClient) { }

  getGastos() {
    return new Promise(resolve => {
      this.http.get(this.url + "read").subscribe(data => {
        resolve(data);
      }, error => {
        console.log(error);
      });
    });
  }

  addGastos(data: any) {
    return new Promise((resolve, reject) => {
      this.http.post(this.url+"create", JSON.stringify(data))
        .subscribe(response => {
          resolve(response);
        }, (error) => {
          reject(error);
        });
    });
  }

}
