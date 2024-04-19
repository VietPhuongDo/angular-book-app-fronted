import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ProductListComponent } from "./components/product-list/product-list.component";
import { routes } from './app.routes';
import { ProductCategoryMenuComponent } from "./components/product-category-menu/product-category-menu.component";
import { CommonModule } from '@angular/common';
import { SearchComponent } from "./components/search/search.component";
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, ProductListComponent, RouterModule, ProductCategoryMenuComponent, CommonModule, SearchComponent,NgbModule,   NgbPaginationModule]
})
export class AppComponent {
  title = 'angular-book-app';
} 

RouterModule.forRoot(routes);