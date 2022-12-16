import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products!: Array<any>;
  constructor() {
    this.products=[
      {id:1,name:"prod1",price:6500},
      {id:2,name:"prod2",price:1200},
      {id:3,name:"prod3",price:1400},
    ];
  }

  public getAllProducts(): Observable<Array<any>>{
    return of(this.products);
  }
}
