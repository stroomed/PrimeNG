import { Component, OnInit } from '@angular/core';
import { Producto } from '../models/producto';
import { ProductoService } from '../service/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  producto: Producto[];

  constructor(
    private perServ: ProductoService
  ) { }

  ngOnInit() {
    this.getAll();
  }

  getAll(){
    this.perServ.getAll().subscribe(
      (result: any) => {
        let productos: Producto[] = [];
        for (let i = 0; i< result.length; i++){
          let producto = result[i] as Producto;
          productos.push(producto);
        }
        this.producto = productos;
      }, error => {
        console.log(error);
      }
    );
  }

}
