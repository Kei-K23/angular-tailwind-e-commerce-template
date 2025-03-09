import { Component, computed, inject, resource } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-electronics',
  imports: [],
  templateUrl: './electronics.component.html',
})
export class ElectronicsComponent {
  private readonly productCategory = 'electronics';
  private readonly apiService = inject(ApiService);

  productsResource = resource({
    loader: () => this.apiService.getProducts(this.productCategory),
  });

  isLoading = computed(() => this.productsResource.isLoading());
}
