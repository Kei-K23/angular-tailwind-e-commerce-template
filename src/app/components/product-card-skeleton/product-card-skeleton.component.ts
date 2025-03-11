import { Component } from '@angular/core';

@Component({
  selector: 'app-product-card-skeleton',
  imports: [],
  template: `
    <div class="card skeleton bg-base-100 w-full h-full shadow-sm">
      <figure>
        <div class="skeleton w-full h-[350px]"></div>
      </figure>
      <div class="card-body">
        <div class="skeleton w-full h-[35px] "></div>
        <div class="skeleton w-[80px] h-[20px]"></div>
        <div class="skeleton w-full h-[100px]"></div>
      </div>
    </div>
  `,
})
export class ProductCardSkeletonComponent {}
