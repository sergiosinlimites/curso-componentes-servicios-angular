import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {

  @Input() product!: Product;
  @Output() productAdded = new EventEmitter<Product>()
  constructor() { }

  ngOnInit(): void {
  }
  
  onLoaded(event: string){
    console.log(event);
  }

  onAddToCart(){
    this.productAdded.emit(this.product);
  }
}
