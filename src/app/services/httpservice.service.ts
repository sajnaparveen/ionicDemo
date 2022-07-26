import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  httpOptions = {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  constructor(private  http: HttpClient) { }

  addProduct(products){
    console.log("productService", products)
    return this.http.post<any>('http://localhost:4545/product/addProduct',products,this.httpOptions)
  }

  getProducts(){

    return this.http.get<any>('http://localhost:4545/product/getallproducts');

  }
}
