import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../shared/interfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input()product: any;

  constructor() { }

  ngOnInit(): void {
  }

}
