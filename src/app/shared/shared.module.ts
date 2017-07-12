import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NavbarComponent, LoginComponent, RegisterComponent, FooterComponent],
  exports:[NavbarComponent, LoginComponent, RegisterComponent]
})
export class SharedModule { }
