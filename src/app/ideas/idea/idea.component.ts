import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { IdeasService } from '../ideas.service';
import { Idea } from '../models/idea.model';

@Component({
  selector: 'app-idea',
  templateUrl: './idea.component.html',
  styleUrls: ['./idea.component.scss'],
})
export class IdeaComponent implements OnInit {
  @Input() id: string;
  idea: Idea | undefined;

  constructor(
    private router: Router,
    private ideasService: IdeasService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params
      .pipe(switchMap((params) => this.ideasService.getIdea(params.id)))
      .subscribe((idea) => (this.idea = idea));
  }

  ngOnInit(): void {}

  toList() {
    this.router.navigateByUrl('/ideas');
  }
}
