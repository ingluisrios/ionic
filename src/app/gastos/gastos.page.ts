import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { GastosService } from '../../app/gastos.service';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.page.html',
  styleUrls: ['./gastos.page.scss'],
})
export class GastosPage implements OnInit {
  ionicForm!: FormGroup;
  arrayPosts: any;
  constructor(private router: Router, public formBuilder: FormBuilder, public gastosService: GastosService) { }

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      nomgas: ['', []],
      //cedgru: [localStorage.getItem("docume"), []],
    });
    this.getGastos();
  }

  submitForm = () => {
    console.log(this.ionicForm.value);
    this.addGastos(this.ionicForm.value);
    this.ionicForm.reset();
  };

  getGastos() {
    this.gastosService.getGastos()
      .then((data: any) => {
        console.log(data);
        this.arrayPosts = data.items;
      });
  }

  addGastos(value: any) {
    console.log(value);
    this.gastosService.addGastos(value)
      .then((data: any) => {
        console.log(data);
        this.getGastos();
      });
  }

}
