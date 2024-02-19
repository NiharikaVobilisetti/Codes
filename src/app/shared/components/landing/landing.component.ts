import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FooterComponent } from '../footer/footer.component';
import { ProductsComponent } from '../products/products.component';
import { ProductService } from '../../services/product.service';
@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule, FormsModule, FooterComponent,ProductsComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
})
export class LandingComponent implements OnInit{

  constructor(private ps:ProductService){}
  ngOnInit(): void {
  }





}