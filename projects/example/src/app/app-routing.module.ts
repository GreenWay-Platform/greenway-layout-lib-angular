import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleLayoutComponent } from './pages/example-layout/example-layout.component';

const routes: Routes = [
  { path: '', component: ExampleLayoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
