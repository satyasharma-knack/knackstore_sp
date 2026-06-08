import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product, ProductVariant } from '../../models';
import { ProductService } from '../../core/services/product.service';
import { CartService } from '../../core/services/cart.service';
import { AuthService } from '../../core/services/auth.service';

@Component({ selector: 'app-product-detail', templateUrl: './product-detail.component.html', styleUrls: ['./product-detail.component.css'] })
export class ProductDetailComponent implements OnInit {
  product: Product | null = null;
  selectedVariant: ProductVariant | null = null;
  quantity = 1;
  loading = true;
  addingToCart = false;
  successMessage = '';

  constructor(
    private route: ActivatedRoute, private router: Router,
    private productService: ProductService,
    private cartService: CartService, private authService: AuthService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(p => {
      this.productService.getProductById(+p['id']).subscribe(product => {
        this.product = product;
        if (product.variants?.length) this.selectedVariant = product.variants[0];
        this.loading = false;
      });
    });
  }

  get displayPrice(): number {
    return this.selectedVariant?.price ?? this.product?.basePrice ?? 0;
  }

  get inStock(): boolean {
    return (this.selectedVariant?.stock ?? this.product?.stockQuantity ?? 0) > 0;
  }

  addToCart() {
    if (!this.product) return;
    if (!this.authService.isLoggedIn) { this.router.navigate(['/login']); return; }
    this.addingToCart = true;
    this.cartService.addEntry({
      productId: this.product.id,
      variantId: this.selectedVariant?.id,
      quantity: this.quantity
    }).subscribe({
      next: () => {
        this.addingToCart = false;
        this.successMessage = 'Added to cart!';
        setTimeout(() => this.successMessage = '', 3000);
      },
      error: () => this.addingToCart = false
    });
  }
}
