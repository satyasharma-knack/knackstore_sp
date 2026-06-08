import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product, Category } from '../../models';
import { ProductService } from '../../core/services/product.service';

@Component({ selector: 'app-product-list', templateUrl: './product-list.component.html', styleUrls: ['./product-list.component.css'] })
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  categories: Category[] = [];
  brands: string[] = [];
  loading = true;
  filters = { search: '', category: '', brand: '', minPrice: null as number | null, maxPrice: null as number | null };

  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.productService.getCategories().subscribe(c => this.categories = c);
    this.productService.getBrands().subscribe(b => this.brands = b);
    this.route.queryParams.subscribe(params => {
      this.filters.search = params['search'] || '';
      this.filters.category = params['category'] || '';
      this.filters.brand = params['brand'] || '';
      this.filters.minPrice = params['minPrice'] ? +params['minPrice'] : null;
      this.filters.maxPrice = params['maxPrice'] ? +params['maxPrice'] : null;
      this.loadProducts();
    });
  }

  loadProducts() {
    this.loading = true;
    const f: any = {};
    if (this.filters.search) f.search = this.filters.search;
    if (this.filters.category) f.category = this.filters.category;
    if (this.filters.brand) f.brand = this.filters.brand;
    if (this.filters.minPrice != null) f.minPrice = this.filters.minPrice;
    if (this.filters.maxPrice != null) f.maxPrice = this.filters.maxPrice;
    this.productService.searchProducts(f).subscribe(p => { this.products = p; this.loading = false; });
  }

  applyFilters() {
    const qp: any = {};
    if (this.filters.search) qp['search'] = this.filters.search;
    if (this.filters.category) qp['category'] = this.filters.category;
    if (this.filters.brand) qp['brand'] = this.filters.brand;
    if (this.filters.minPrice != null) qp['minPrice'] = this.filters.minPrice;
    if (this.filters.maxPrice != null) qp['maxPrice'] = this.filters.maxPrice;
    this.router.navigate(['/products'], { queryParams: qp });
  }

  clearFilters() {
    this.filters = { search: '', category: '', brand: '', minPrice: null, maxPrice: null };
    this.router.navigate(['/products']);
  }

  get activeCategory(): string { return this.categories.find(c => c.code === this.filters.category)?.name || 'All Products'; }
}
