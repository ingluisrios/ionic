import { Component, OnInit } from '@angular/core';
import { GastosService } from '../../app/gastos.service';
import { PagosService } from '../../app/pagos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-valoresgastos',
  templateUrl: './valoresgastos.page.html',
  styleUrls: ['./valoresgastos.page.scss'],
})
export class ValoresgastosPage implements OnInit {
  arrayPosts: any;
  constructor(
    private router: Router,
    public gastosService: GastosService,
    public pagosService: PagosService) { 
      
    }

  ngOnInit() {
    this.getPagosGastos();
  }

  ionViewDidEnter(){
    this.getPagosGastos();
  }
  getPagosGastos() {
    this.pagosService.getPagosGastos()
      .then((data: any) => {
        console.log(data);
        this.arrayPosts = data.items;
      });
  }
  

}
