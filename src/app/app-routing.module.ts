import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerDatabaseComponent } from './components/customer-database/customer-database.component';
import { ForbiddenAccessPageComponent } from './components/forbidden-access-page/forbidden-access-page.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'forbidden-access', component: ForbiddenAccessPageComponent },
  { path: 'customer-database', component: CustomerDatabaseComponent },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
