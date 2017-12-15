import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { CategoriesComponent } from './categories/categories.component';
import { AdminComponent } from './admin/admin.component';
import { CategoryDetailComponent} from './category-detail/category-detail.component';

const appRoutes: Routes = [
  {
    path:'',
    component: WelcomeComponent
  },
  {
    path:'categories',
    component: CategoriesComponent
  },
  {
    path:'admin',
    component: AdminComponent
  },
  {
    path: 'categories/:id',
    component: CategoryDetailComponent
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
