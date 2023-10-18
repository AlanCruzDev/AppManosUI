import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlfabetoComponent } from './modulos/alfabeto/alfabeto.component';
import { AuthComponent } from './modulos/auth/auth.component';
import { TraductorComponent } from './modulos/traductor/traductor.component';
import { LayoutComponent } from './componentes/layout/layout.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { SidebarComponent } from './componentes/sidebar/sidebar.component';


import{HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule,FormsModule  } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserImgComponent } from './componentes/user-img/user-img.component';
import {WebcamModule} from 'ngx-webcam';
import { HablarAudioComponent } from './componentes/hablar-audio/hablar-audio.component';
import { PerfilComponent } from './modulos/perfil/perfil.component';
import { PostComponent } from './modulos/post/post.component';
import { PostCrearComponent } from './componentes/post-crear/post-crear.component';
import { PerfilCrearComponent } from './componentes/perfil-crear/perfil-crear.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    AlfabetoComponent,
    AuthComponent,
    TraductorComponent,
    LayoutComponent,
    NavbarComponent,
    SidebarComponent,
    UserImgComponent,
    HablarAudioComponent,
    PerfilComponent,
    PostComponent,
    PostCrearComponent,
    PerfilCrearComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    WebcamModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
