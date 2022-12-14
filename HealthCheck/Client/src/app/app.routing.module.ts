import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FetchDataComponent } from './fetch-data-component/fetch-data-component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'fetch-data', component: FetchDataComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
