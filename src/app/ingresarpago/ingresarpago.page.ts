import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GastosService } from '../../app/gastos.service';
import { PagosService } from '../../app/pagos.service';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-ingresarpago',
  templateUrl: './ingresarpago.page.html',
  styleUrls: ['./ingresarpago.page.scss'],
})
export class IngresarpagoPage implements OnInit {
  id: any;
  nomgas: string | undefined;
  arrayPosts: any;
  ionicForm!: FormGroup;
  constructor(private activatedRoute: ActivatedRoute,
    public formBuilder: FormBuilder,
    public gastosService: GastosService,
    public pagosService: PagosService) { }

  ngOnInit() {

    let fechsis = moment(new Date()).format("YYYY-MM-DD");
    let horsis = moment(new Date()).format("H:m:s");

    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    this.ionicForm = this.formBuilder.group({
      idegas: [this.id, []],
      valgas: ['', []],
      fecgas: [fechsis, []],
      horgas: [horsis, []],
      cedgas: [localStorage.getItem("docume"), []],
    });
    console.log(this.id);
    this.getGastos();

  }

  submitForm = () => {
    console.log(this.ionicForm.value);
    this.addPagos(this.ionicForm.value);
    this.ionicForm.reset();
  };

  getGastos() {
    this.gastosService.getGastos()
      .then((data: any) => {
        this.arrayPosts = data.items;
        this.arrayPosts = this.arrayPosts.filter((filter1: any) => {
          return filter1.id == this.id;
        })
        this.nomgas = this.arrayPosts[0].nomgas;
        console.log(this.nomgas);
      });
  }

  addPagos(value: any) {
    console.log(value);
    this.pagosService.addPagos(value)
      .then((data: any) => {
        console.log(data);
        this.getGastos();
      });
  }

}
