import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { FbResponse, Product } from './interfaces';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  type = 'Phone'
  cartProducts : Product [] = []

  constructor(private http: HttpClient) { }

  create(product: any) {
    return this.http.post(`${environment.fbDbUrl}/products.json`, product)
      .pipe(map((res: FbResponse | any) => {
        return {
          ...product,
          id: res.name,
          date: new Date(product.date)
        }
      }))
  }

  getAll() {
    return this.http.get(`${environment.fbDbUrl}/products.json`)
      .pipe(map((res: any) => {
        return Object.keys(res)
          .map(key => ({
            ...res[key],
            id: key,
            date: new Date(res[key].date)
          }))

      }))
  }

  getById(id: any){
    return this.http.get(`${environment.fbDbUrl}/products/${id}.json`)
      .pipe(map((res: any) => {
        console.log(res)
        return {
          type: res.type,
          id: res.id, 
          title: res.title,
          photo: res.photo,
          info: res.info,
          price: res.price,
          date: res.date
        }
      }))
  }

  remove (id: any) {
    return this.http.delete(`${environment.fbDbUrl}/products/${id}.json`)
  }

  update(product: Product) {
    return this.http.patch(`${environment.fbDbUrl}/products/${product.id}.json`, product)
  }

  setType (type: string) {
    this.type = type
  }

  addProduct (product:any) {
    this.cartProducts.push(product)
  }
}