import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../shared/interfaces';
import { CommonModule } from '@angular/common';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input()product: any;

  constructor(
    private productServ : ProductService
  ) { }

  ngOnInit(): void {
  }

  addProduct(product:any) {
    this.productServ.addProduct(product)

  }

}
