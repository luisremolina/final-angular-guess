import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuicklinkStrategy } from 'ngx-quicklink';
import { AdminGuard } from './admin.guard';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: LayoutComponent,
    canActivate: [AdminGuard],
    children: [
      {
        path: 'products',
        loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
      },

    ]
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'test-1',
    loadChildren: () => import('./test-1/test-1.module').then(m => m.Test1Module)
  },
  {
    path: 'test-2',
    loadChildren: () => import('./test-2/test-2.module').then(m => m.Test2Module)
  },
  {
    path: 'test-3',
    loadChildren: () => import('./test-3/test-3.module').then(m => m.Test3Module)
  },
  {
    path: 'test-4',
    loadChildren: () => import('./test-4/test-4.module').then(m => m.Test4Module)
  },
  {
    path: 'test-5',
    loadChildren: () => import('./test-5/test-5.module').then(m => m.Test5Module)
  },
  {
    path: 'test-6',
    loadChildren: () => import('./test-6/test-6.module').then(m => m.Test6Module)
  },
  {
    path: 'test-7',
    loadChildren: () => import('./test-7/test-7.module').then(m => m.Test7Module)
  },
  {
    path: 'test-8',
    loadChildren: () => import('./test-8/test-8.module').then(m => m.Test8Module)
  },
  {
    path: '**',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: QuicklinkStrategy }),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
