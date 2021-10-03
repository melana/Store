import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { FbResponse } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private  http : HttpClient) { }

  create(order:any) {
    return this.http.post(`${environment.fbDbUrl}/orders.json`, order)
    .pipe(map( (res : FbResponse) => {
      return {
        ...order,
        id: res.name,
        date: new Date(order.date)
      }
    }))
  }

}