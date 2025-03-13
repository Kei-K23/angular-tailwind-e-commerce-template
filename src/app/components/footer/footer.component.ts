import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  template: `
    <footer
      class="border-t border-t-base-300 pt-10 pb-6 mb-2 max-w-7xl mx-auto"
    >
      <p class="text-center">
        Copyright&#64; {{ currentDate }} Angular E-Commerce Template. All right
        reserved
      </p>
      <p class="text-center text-sm">
        Build with ❤️ by
        <a
          class="hover:text-blue-500 transition-colors"
          href="https://github.com/Kei-K23"
          target="_blank"
          >Arkar Min(Kei)</a
        >
      </p>
    </footer>
  `,
  styles: ``,
})
export class FooterComponent {
  currentDate = new Date().getFullYear();
}
