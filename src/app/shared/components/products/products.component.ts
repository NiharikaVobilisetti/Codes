import { CommonModule, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Item } from '../../../orders/models/item'; 
import { Order } from '../../../orders/models/order';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{

  isSidePanelVisble:boolean=false;
  // quantity:number=0;  

  // cartobj :Order={
  //   OrderNo:1,
  //   ContactName:"Niharika",
  //   OrderDate:new Date(),
  //   ItemsOrdered:0,
  //   OrderTotal:0,
  //   TaxTotal:0,
  //   GrandTotal:0
  // };

  
  myproductForm= new FormGroup ({
    productId: new FormControl(''),
    productSku: new FormControl(''),
    productName: new FormControl(''),
    productPrice: new FormControl(''),
    productShortName: new FormControl(''),
    productDescription: new FormControl(''),
    createdDate: new FormControl(''),
    deliveryTimeSpan: new FormControl(''),
    categoryId: new FormControl(''),
    productImageUrl: new FormControl(''),
    productQuantity:new FormControl('')
  });



  categoryList:any;
  productList:any;

  constructor(private ps:ProductService){}
  ngOnInit(): void {
    console.log("ngOnInit")
    this.getAllCategory();
    this.getAllProduct();
  }

  onSave() {
    console.log(this.myproductForm.value);
    this.ps.saveProduct(this.myproductForm.value).subscribe(
      (res)=>{
        if(res){
        alert("Product created successfully")
        this.getAllProduct();
        } else {
          alert("Product creation failed")
        }
      }
    )
  }

  getAllCategory() {
    this.ps.getAllCategories().subscribe(
    (res)=>{
    this.categoryList=res;
    console.log("result data is: " + res)
    console.log("categoryList: " + this.categoryList);
    })
  }
  
  getAllProduct() {
    this.ps.getAllProducts().subscribe(
    (res)=>{
    this.productList=res;
    console.log("result data is: " + res)
    console.log("productList: " + this.productList);
    })
  }

  onEdit(product:any) {
    this.myproductForm=product
    this.openSidePanel()
  }

  onDelete(productId:any) {
    console.log("Id is: ",productId)
    const isDelete = confirm("Are you sure you want to delete?")
    if(isDelete) {
    this.ps.deleteProduct(productId).subscribe(
      (data)=>{
        this.getAllProduct();
      }
    );}
  }
  

  addToCart(product:any) {
    const cartObj = {
      "productId" : product.productId,
      "quantity" : product.productQuantity,
      "addedDate" : new Date(),
      "productName" : product.productName,
      "price" : product.productPrice,
      "url" : product.productImageUrl
    }

    this.ps.addToCart(cartObj).subscribe(
      (data)=>{
         if(data) {
          alert("Product added to cart")
         }else {
          alert("product not added to cart")
         }
      }
    )


  }

  openSidePanel() {
    this.isSidePanelVisble=true;
  }

  closeSidePanel() {
    this.isSidePanelVisble=false;
  }

  increment(product:any) {
    return ++product.productQuantity;
  }

  decrement(product:any) {
    return --product.productQuantity;
  }


}
