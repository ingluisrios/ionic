import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  docume: string = "";
  docVis: boolean = false;
  btnVis: boolean = false;
  nomtit: string = "";
  boldoc: boolean = false;
  constructor(private router: Router) { }

  ngOnInit() {
    this.validarSession();
  }

  irGastos() {
    this.router.navigate(['/gastos']);
  }

  irGrupos() {
    this.router.navigate(['/grupos']);
  }

  irPagos() {
    this.router.navigate(['/valoresgastos']);
  }

  salir() {
    localStorage.clear();
    this.nomtit = "Iniciar sesión";
    this.docVis = true;
    this.btnVis = false;
  }

  logeo() {
    localStorage.setItem("docume", this.docume);
    this.docVis = false;
    this.nomtit = "Monica Caceres";
    this.btnVis = true;
    this.docume = "";
  }

  validarSession() {
    const boldoc = (localStorage.getItem("docume")) ? true : false;
    if (!boldoc) {
      this.docVis = true;
      this.nomtit = "Iniciar sesión";
      this.btnVis = false;
    }

    if(boldoc){
      this.docVis = false;
      this.nomtit = "Monica Caceres";
      this.btnVis = true;
      this.docume = "";
    }
  }

}
