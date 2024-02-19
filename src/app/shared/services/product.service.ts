import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url = "http://localhost:3000/"

  constructor(private http:HttpClient) { }

  getAllCategories() {
    return this.http.get("http://localhost:3000/categories")
  }

  getAllProducts() {
    return this.http.get("http://localhost:3000/products")
  }
  
  saveProduct(obj:any) {
    return this.http.post("http://localhost:3000/products",obj)
  }

  deleteProduct(id:any) {
    alert("deleted successfully!")
    return this.http.delete("http://localhost:3000/products/"+id)
  }

  addToCart(obj:any) {
    return this.http.post("http://localhost:3000/product",obj)
  }

  getCartData() {
    return this.http.get("http://localhost:3000/product")
  }
}
