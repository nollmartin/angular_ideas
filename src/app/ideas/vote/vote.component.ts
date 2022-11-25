import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IdeasService } from '../ideas.service';
import { Idea } from '../models/idea.model';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.scss'],
})
export class VoteComponent implements OnInit {
  @Input() idea: Idea;
  @Output() vote = new EventEmitter<void>();

  constructor(private ideasService: IdeasService, private router: Router) {}

  ngOnInit(): void {}

  upVote() {
    this.ideasService
      .upvoteIdea(this.idea.id)
      .subscribe((_) => this.vote.next());
  }

  downVote() {
    this.ideasService
      .downvoteIdea(this.idea.id)
      .subscribe((_) => this.vote.next());
  }
}
