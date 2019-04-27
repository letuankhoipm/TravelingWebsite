import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';
import { FirestoreSettingsToken } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { environment } from '@environments/environment.prod';

@NgModule({
  declarations: [SidebarComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule.forRoot(),
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  exports: [
      SidebarComponent
  ],
  providers: [AngularFireAuth, { provide: FirestoreSettingsToken, useValue: {} }]
})
export class ComponentsModule { }
