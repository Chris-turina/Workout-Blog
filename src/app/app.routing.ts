import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { CategoriesComponent } from './categories/categories.component';
import { AdminComponent } from './admin/admin.component';
import { CategoryDetailComponent} from './category-detail/category-detail.component';
import { PostComponent } from './post/post.component';
import { PostDetailsComponent } from './post-details/post-details.component';

const appRoutes: Routes = [
  {
    path:'',
    component: WelcomeComponent
  },
  {
    path:'admin',
    component: AdminComponent
  },
  {
    path:'categories',
    component: CategoriesComponent
  },
  {
    path: 'categories/:id',
    component: CategoryDetailComponent
  },
  {
    path:'categories/:id/new-post',
    component: PostComponent
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
