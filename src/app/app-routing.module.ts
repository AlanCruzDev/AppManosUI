import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthComponent } from './modulos/auth/auth.component';
import { LayoutComponent } from './componentes/layout/layout.component';
import { AlfabetoComponent } from './modulos/alfabeto/alfabeto.component';
import { TraductorComponent } from './modulos/traductor/traductor.component';
import { PerfilComponent } from './modulos/perfil/perfil.component';



const routes: Routes = [
    { path: 'acceso', component: AuthComponent },
    {path: 'sidebar', component: LayoutComponent ,children: [
      {
        path:'traductor',
        component:TraductorComponent
      },{
        path:'aprender',
        component:AlfabetoComponent
      },{
        path:'perfil',
        component:PerfilComponent
      }
    ]
  },
     { path: '**', redirectTo: 'acceso' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
