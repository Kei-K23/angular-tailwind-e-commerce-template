import { Component, computed, inject, resource } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductCardSkeletonComponent } from '../product-card-skeleton/product-card-skeleton.component';

@Component({
  selector: 'app-women-clothing',
  imports: [ProductCardComponent, ProductCardSkeletonComponent],
  template: `
    <div class="mt-28 pb-10">
      @if (isLoading()) {
      <div class="grid grid-cols-4 mx-auto max-w-7xl gap-6">
        @for (item of [1,2,3,4]; track item) {
        <app-product-card-skeleton />
        }
      </div>
      } @else {
      <div class="grid grid-cols-4 mx-auto max-w-7xl gap-6">
        @for (product of productsResource.value(); track product.id) {
        <app-product-card [product]="product" />
        }
      </div>

      }
    </div>
  `,
})
export class WomenClothingComponent {
  private readonly productCategory = "women's clothing";
  private readonly apiService = inject(ApiService);

  productsResource = resource({
    loader: () => this.apiService.getProducts(this.productCategory),
  });

  isLoading = computed(() => this.productsResource.isLoading());
}
