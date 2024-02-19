import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Observable, map } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {

  constructor(private ps:ProductService){
    //  this.products$=this.ps.getAllCategories().pipe(
    //   map((item:any)=>{
    //     return item.data;
    //   })
    //  );
  }
  categoryList:any;

  getAllCategory() {
    this.ps.getAllCategories().subscribe(
    (res)=>{
    this.categoryList=res;
    console.log("result data is: " + res)
    console.log("categoryList: " + this.categoryList);
    })
  }
}
