import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterseptorService } from './auth-interceptor.service';

@NgModule({
  declarations: [LoginComponent, RegistrationComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
  ],
  exports: [LoginComponent, RegistrationComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterseptorService,
      multi: true,
    },
  ],
})
export class AuthModule {}
