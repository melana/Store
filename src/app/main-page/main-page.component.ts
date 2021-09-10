import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Product } from '../shared/interfaces';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  products$!: Observable<Product[]>;
  constructor(
    private productServ: ProductService
  ) { }

  ngOnInit() {
    this.products$ = this.productServ.getAll();
    console.log(this.products$)
  }

}