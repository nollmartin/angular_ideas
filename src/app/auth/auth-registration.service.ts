import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthRegistrationService {
  private _baseUrl = `${environment.baseUrl}/auth`;
  private message;
  constructor(private http: HttpClient, private router: Router) {}

  registration(email: string, password: string, username: string) {
    return this.http
      .post<{ email: string; password: string; username: string }>(
        `${this._baseUrl}/registration`,
        { email, password, username }
      )
      .pipe(
        map((reg) => {
          if (!reg.email) {
            this.message = reg;
            alert(`${this.message.message}`);
          } else {
            this.router.navigateByUrl('login');
          }
        })
      );
  }
}
