import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatPrincipalComponent } from './components/chat-principal/chat-principal.component';

const routes: Routes = [
  {path:'chat', component: ChatPrincipalComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
