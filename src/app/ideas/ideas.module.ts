import { IdeasRoutingModule } from './ideas-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewIdeaComponent } from './new-idea/new-idea.component';
import { ListIdeasComponent } from './list-ideas/list-ideas.component';
import { IdeaComponent } from './idea/idea.component';
import { VoteComponent } from './vote/vote.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    NewIdeaComponent,
    ListIdeasComponent,
    IdeaComponent,
    VoteComponent,
  ],
  imports: [
    CommonModule,
    IdeasRoutingModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatSnackBarModule
  ],
})
export class IdeasModule {}
