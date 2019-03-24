import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ClientsComponent } from './clients.component';
import { ClientsRoutingModule } from './clients.routing';
import { NavbarModule } from 'src/app/components/navbar/navbar.module';
import { FooterModule } from 'src/app/components/footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    ClientsRoutingModule,
    NavbarModule,
    FooterModule
  ],
  declarations: [ClientsComponent],
  exports: [ClientsRoutingModule]
})
export class ClientsModule { }
