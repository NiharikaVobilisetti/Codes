import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../shared/services/product.service';
import { Order } from '../../models/order';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule,Router } from '@angular/router';


@Component({
  selector: 'app-view-orders',
  standalone: true,
  imports: [FormsModule, CommonModule,HttpClientModule],
  templateUrl: './view-orders.component.html',
  styleUrl: './view-orders.component.css'
})
export class ViewOrdersComponent implements OnInit{
   
  // constructor(private ps:ProductService){}
  
  // cartdata:any;
  // generate:number=0;
  // totalPrice = 0;

  
  // order:Order={
  //   OrderNo:0,
  //   ContactName:"Niharika",
  //   OrderDate:new Date(),
  //   ItemsOrdered:0,
  //   OrderTotal:0,
  //   TaxTotal:0,
  //   GrandTotal:0
  // };

  // ngOnInit(): void {
  //     this.getCartData();
  //     console.log(this.cartdata);
  // }

  // getCartData() {
  //   this.ps.getCartData().subscribe(
  //     (data)=>{
  //       this.cartdata=data;
  //       this.order.OrderNo=++this.generate;
  //       this.order.ItemsOrdered = Object.keys(data).length;
  //       this.order.OrderTotal=this.getTotalPrice(this.cartdata)
  //       this.order.TaxTotal=0.18;
  //       this.order.GrandTotal=this.getGrandTotal();
  //     }
  //   )
  // }


  // getTotalPrice(cartdata:any) {
  //   this.cartdata.map((cartdata:any)=>{
  //     this.totalPrice += ((cartdata.quantity)+(cartdata.price));
  //   })
  //   return this.totalPrice;
  // }

  // getGrandTotal() {
  //  return ((0.18)*this.totalPrice);
  // }

  orderlist: string = 'http://localhost:3000/product';
  orders: Order[] = [];
  constructor(private http: HttpClient,private router:Router) {}
  ngOnInit(): void {
    this.getAllOrders();
  }
  getAllOrders() {
    this.http.get<Order[]>(this.orderlist).subscribe(data => {
      this.orders = data;
    });
  }
  getOrderById(id:string) {
    const url = "http://localhost:3000/product/"+id; // Construct the URL for the specific order
    this.http.get<Order[]>(this.orderlist).subscribe({
      next: (data) => {
        this.orders = data; // Store the retrieved order
        console.log('Order retrieved successfully:', this.orders);
      }});
  }
  viewOrderInfo(orderId:string){
    this.router.navigate(['/view-order-info', orderId]);
  }
}
  

  
  // Call the function to get the total price
  // const totalPrice = calculateTotalPrice(order:Order);
  // console.log("Total Price:", totalPrice);

