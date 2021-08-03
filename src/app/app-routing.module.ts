import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopnavComponent } from './users/topnav/topnav.component';

const routes: Routes = [
  { path: '', redirectTo: 'topnav', pathMatch: 'full'},
  { path: 'topnav', component: TopnavComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 
}
