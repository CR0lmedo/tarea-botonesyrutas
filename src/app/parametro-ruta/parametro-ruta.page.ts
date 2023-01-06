import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-parametro-ruta',
  templateUrl: './parametro-ruta.page.html',
  styleUrls: ['./parametro-ruta.page.scss'],
})
export class ParametroRutaPage implements OnInit {
  public nombre : string = '';
  public tipo : string = '';
  public precio : any = '';
  public imagen : string = '';
  public peso : string = '';

  constructor(
    private route : ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(parametros =>{
      this.nombre   = parametros['nombre'  ||'sin nombre'];
      this.tipo = parametros['tipo'||'sin genero'];
      this.precio = parametros['precio'||'sin precio'];
      this.imagen = parametros['imagen' || 'no'];
      this.peso = parametros['peso'||'sin precio'];
  });
  }
}

