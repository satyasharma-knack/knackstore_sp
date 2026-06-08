import { Component, OnInit } from '@angular/core';
import { Product, Category } from '../../models';
import { ProductService } from '../../core/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  featuredProducts: Product[] = [];
  categories: Category[] = [];
  loading = true;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getFeaturedProducts().subscribe(products => {
      this.featuredProducts = products;
    });
    this.productService.getCategories().subscribe(cats => {
      this.categories = cats;
      this.loading = false;
    });
  }
}
