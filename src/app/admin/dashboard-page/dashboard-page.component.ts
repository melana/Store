import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/product.service';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {

  products: any
  pSub!: Subscription
  rSub!: Subscription
  productName: any

  constructor(
    private productServ: ProductService
  ) { }

  ngOnInit() {
    this.pSub = this.productServ.getAll().subscribe( products => {
      console.log(products)
      this.products = products
    })
  }

  ngOnDesroy() {
    if (this.pSub) {
      this.pSub.unsubscribe()
    }

    if (this.rSub) {
      this.rSub.unsubscribe()
    }
  }

  remove (id: any) {
    this.rSub = this.productServ.remove(id).subscribe( () => {
      this.products = this.products.filter( (product: { id: any; }) => product.id !== id)
    })
  }

}