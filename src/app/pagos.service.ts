import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PagosService {

  url = 'http://localhost/presupuesto/valoresgastos/';
  
  urx = 'http://localhost/presupuesto/pagosgastos/';
  constructor(public http: HttpClient) { }

  getPagos() {
    return new Promise(resolve => {
      this.http.get(this.url + "read").subscribe(data => {
        resolve(data);
      }, error => {
        console.log(error);
      });
    });
  }

  addPagos(data: any) {
    return new Promise((resolve, reject) => {
      this.http.post(this.url + "create", JSON.stringify(data))
        .subscribe(response => {
          resolve(response);
        }, (error) => {
          reject(error);
        });
    });
  }

  getPagosGastos() {
    return new Promise(resolve => {
      this.http.get(this.urx + "read").subscribe(data => {
        resolve(data);
      }, error => {
        console.log(error);
      });
    });
  }

}
