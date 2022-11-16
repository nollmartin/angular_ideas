import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthRegistrationService } from '../auth-registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  email: string = '';
  password: string = '';
  username: string = '';

  constructor(
    private registrationService: AuthRegistrationService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  registration() {
    this.registrationService
      .registration(this.email, this.password, this.username)
      .subscribe();
  }
}
