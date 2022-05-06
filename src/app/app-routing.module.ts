import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursoComponent } from './components/curso/curso.component';

const routes: Routes = [
  {path:'', component:CursoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
