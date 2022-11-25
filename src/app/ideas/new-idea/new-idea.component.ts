import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { IdeasService } from '../ideas.service';

@Component({
  selector: 'app-new-idea',
  templateUrl: './new-idea.component.html',
  styleUrls: ['./new-idea.component.scss'],
})
export class NewIdeaComponent implements OnInit {
  form: FormGroup;
  isLoading = false;

  constructor(private ideasService: IdeasService, private router: Router, private snackBar: MatSnackBar) {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {}

  submitted() {
    this.isLoading = true;
    this.ideasService
      .createIdea(this.form.value.name, this.form.value.description)
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe(() => {
        this.isLoading = false;
        this.router.navigateByUrl('/ideas');
      }, () => {
        this.snackBar.open('An error has accured', 'OK', {duration: 5000})
      });
  }
}
